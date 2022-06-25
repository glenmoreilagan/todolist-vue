<template>
  <div class="container">
    <div class="card mt-3 mb-3">
    <!--
    <h5 class="card-header">HOME</h5>
    !-->
    <div class="card-body">
      
      <AddTodo v-bind:todo_obj="todo_obj" v-on:save-todo="saveTodo" />
      <TodoItem v-bind:todos="todos" v-on:todoAction="todoAction" />
    </div>
  </div>
</div>
</template>

<script>
import AddTodo from './AddTodo.vue'
import TodoItem from './TodoItem.vue'

export default {
  name : 'HomeView',
  components : {
    AddTodo,
    TodoItem,
  },
  data() {
    return {
       todo_obj : {
        todoId : 0, 
        todoDesc : "", 
        isCompelte : false
      },
      todos : [],
    }
  },
  created() {
    console.log('Component has been created!')
    this.axios.get('http://127.0.0.1:8000/api/todo')
    .then(res => {
      NProgress.start()
      // console.log(res.data.todos)
      this.todos = res.data.todos.map((value, index) => ({
        todoId : value.id,
        todoDesc : value.todo,
        isCompelte : value.iscomplete
      }))
      NProgress.done()
    }).catch(error => {
      console.log(error)
    })
  },
  mounted() {
    console.log('Component has been mounted!')
  },
  destroyed() {
    console.log('Component has been destroyed!')
  },
  methods : {
    todoAction(data) {
      switch(data.action) {
        case 'edit':
          // console.log(data.todo)
          this.todo_obj = {...this.todo_obj, todoDesc : data.todo.todoDesc, todoId : data.todo.todoId}
        break;
        case 'delete':
          // console.log(data)
          this.axios.delete(`http://127.0.0.1:8000/api/todo/${data.todoId}`)
          .then(res => {
            // console.log(res)
            NProgress.start()
            if(res.data.status) {
              this.todos = this.todos.filter(todo => todo.todoId !== data.todoId)
              NProgress.done()
            }
          }).catch(error => {
            console.log(error)
          })
        break;
      }
    },
    saveTodo(todo) {
      this.axios.post('http://127.0.0.1:8000/api/todo', todo)
      .then(res => {
        // console.log(res)
        NProgress.start()
        if(res.data.status) {
          this.todos.push({
            todoId : res.data.todos.id,
            todoDesc : res.data.todos.todo,
            isCompelte : res.data.todos.iscomplete
          });
          NProgress.done()
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
  .btn-save {
    margin-top : 1em !important;
  }

  :is(tr, td, button, .inputs-label, input) {
    font-size: var(--small_font);
  }

  .btn-save, .btn-action {
    width: 75px;
    margin: 2.5px;
    padding: 1.5px;
  }
</style>