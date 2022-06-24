<template>
  <label for="" class="inputs-label">Todos:</label>
  <input class="form-control form-control-sm" type="text" v-model="todo_obj.todoDesc">
  <button type="button" class="btn btn-primary btn-sm btn-save" @click="addTodo">SAVE</button>
</template>

<script>
export default {
  name : 'AddTodo',
  props : ['todo_obj'],
  emits: ["save-todo"],
  methods: {
    addTodo() {
      // console.log(this.todo_obj)
      this.$emit('save-todo', this.todo_obj)
      this.todo_obj.todoDesc = ''
      this.todo_obj.todoId = 0
    }
  },
}
</script>