<template>
  <table class="table table-bordered table-hover mt-3 mb-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>TODO</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.todoId">
          <td>{{ todo.todoId }}</td>
          <td>{{ todo.todoDesc }}</td>
          <td>{{ todo.isComplete ? "Done" : "Pending" }}</td>
          <td>
            <!-- <button class="btn btn-primary btn-sm btn-action" @click="$emit('todoAction', {todo, action : 'edit'})">EDIT</button> -->
            <router-link class="" :to="'/todo/'+todo.todoId"><button class="btn btn-primary btn-sm btn-action">EDIT</button></router-link>
            <button class="btn btn-danger btn-sm btn-action" @click="$emit('todoAction', {todoId : todo.todoId, action : 'delete'})">DELETE</button>
          </td>
        </tr>
      </tbody>
  </table>
</template>

<script>
export default {
  name : 'TodoItem',
  props : ["todos"]
}
</script>