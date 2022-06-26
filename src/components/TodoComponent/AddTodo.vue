<template>
<div class="container">
  <div class="card mt-3 mb-3">
    <div class="card-body">
      <h4>NEW TODO</h4>
      <label for="" class="inputs-label">Todos:</label>
      <input class="form-control form-control-sm" type="text" v-model="todo_obj.todoDesc">
      <div class="form-check">
        <label class="form-check-label inputs-label" for="flexCheckDefault">
        Done?
        <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="todo_obj.isComplete">
        </label>
      </div>
      <button type="button" class="btn btn-primary btn-sm btn-save" @click="saveTodo">SAVE</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name : 'AddTodo',
  data() {
    return {
       todo_obj : {
        todoId : 0, 
        todoDesc : "", 
        isComplete : false
      },
    }
  },
  methods: {
    saveTodo() {
      this.axios.post('http://127.0.0.1:8000/api/todo', this.todo_obj)
      .then(res => {
        // console.log(res)
        NProgress.start()
        if(res.data.status) {
          this.todo_obj.todoId = 0
          this.todo_obj.todoDesc = ""
          this.todo_obj.isComplete = false
          NProgress.done()
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
}
</script>