<template>
  <div>
    <input type="text" v-model="todo">
    <button @click="fetchTodos">SEND</button>
  </div>
</template>

<script>
export default {
  name: 'ClientOrderComponent',
  data() {
    return {
      todo : ''
    }
  },
  methods : {
    fetchTodos() {
      this.axios.post('http://127.0.0.1:8000/api/getTodos', {todo:this.todo})
      .then(res => {
        // NProgress.start()
        // console.log(res.data.todos)
        // NProgress.done()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>