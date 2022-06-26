<template>
<div class="container">
  <div class="card mt-3 mb-3">
    <div class="card-body">
      <h4>EDIT TODO</h4>
      <label for="" class="inputs-label">Todos:</label>
      <input class="form-control form-control-sm" type="text" v-model="todo_obj.todoDesc">
      <div class="form-check">
        <label class="form-check-label inputs-label" for="flexCheckDefault">
        Done?
        <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="todo_obj.isComplete" :checked="isComplete_checked">
        </label>
      </div>
      <button type="button" class="btn btn-primary btn-sm btn-save" @click="saveTodo">SAVE</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name : 'EditTodo',
  data() {
    return {
      todoId: this.$route.params.id,
      isComplete_checked : "",
      todo_obj : {
        todoId : this.$route.params.id, 
        todoDesc : "", 
        isComplete : false
      },
    }
  },
    created() {
    console.log('Component has been created!')
    this.axios.get(`http://127.0.0.1:8000/api/todo/${this.todoId}/edit`)
    .then(res => {
      // console.log(res)
      NProgress.start()
      if(res.data.status) {
        this.todo_obj = {
          todoId : res.data.todo.id,
          todoDesc : res.data.todo.todo,
          isComplete : res.data.todo.iscomplete,
        }

        if(res.data.todo.iscomplete) {
          this.isComplete_checked = "checked"
        }
      }
      NProgress.done()
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    saveTodo() {
      this.axios.put(`http://127.0.0.1:8000/api/todo/${this.todoId}`, this.todo_obj)
      .then(res => {
        // console.log(res)
        NProgress.start()
        if(res.data.status) {
          if(res.data.todo.iscomplete) {
            this.isComplete_checked = ""
          }
          NProgress.done()
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
}
</script>