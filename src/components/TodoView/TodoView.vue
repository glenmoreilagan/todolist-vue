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
      todos : [
        {todoId : 1, todoDesc : "todo 1", isCompelte : false},
        {todoId : 2, todoDesc : "todo 2", isCompelte : true},
        {todoId : 3, todoDesc : "todo 3", isCompelte : false}
      ]
    }
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
          this.todos = this.todos.filter(todo => todo.todoId !== data.todoId)
        break;
      }
    },
    saveTodo(todo) {
      const new_todo_obj = {...this.todo_obj, todoId : this.todos.length + 1}
      this.todos.push(new_todo_obj)
      // console.log(new_todo_obj)
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