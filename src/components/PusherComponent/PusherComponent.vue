<template>
  <div>
    <h1>Pusher Test</h1>
    <p>
      Publish an event to channel <code>my-channel</code>
      with event name <code>my-event</code>; it will appear below:
    </p>
    <br>
    <RealTimeTodoListComponent v-if="todos.length > 0" v-bind:todos="todos" />
  </div>
</template>

<script>
import RealTimeTodoListComponent from './RealTimeTodoListComponent.vue'

export default {
  name: 'PusherComponent',
  components: {
    RealTimeTodoListComponent
  },
  data() {
    return {
      todos: [],
    }
  },
  created() {
    Pusher.logToConsole = false
    var pusher = new Pusher('730f32928e3219ba0221', {
      cluster: 'ap1',
      forceTLS: true
    })

    var channel = pusher.subscribe('testing-realtime')
    channel.bind('get-todo-event', function (data) {
      this.todos = data.data.map((value, index) => ({
        todoId: value.id,
        todoDesc: value.todo,
        isComplete: value.iscomplete
      }))
    }, this)
  },
}

</script>