<template>
<div class="container">
  <div class="card mt-3 mb-3">
    <div class="card-body">
      <label for="" class="inputs-label">Todos:</label>
      <input class="form-control form-control-sm" type="text" v-model="todo_obj.todoDesc">
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
      todo_obj : {
        todoId : this.$route.params.id, 
        todoDesc : "", 
        isCompelte : false
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
          isCompelte : res.data.todo.iscomplete,
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
          NProgress.done()
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
}
</script>