<template>
  <div>
    <h1>Pusher Test</h1>
    <p>
      Publish an event to channel <code>my-channel</code>
      with event name <code>my-event</code>; it will appear below:
    </p>
  </div>
</template>

<script>
export default {
  name : 'PusherComponent',
  items : [],
  created() {
    Pusher.logToConsole = true;

    var pusher = new Pusher('730f32928e3219ba0221', {
      cluster: 'ap1',
      forceTLS: true
    });

    var channel = pusher.subscribe('testing-realtime');
    channel.bind('get-todo-event', function(data) {
      alert(JSON.stringify(data));
    });
  }
}
</script>