<template>
  <div class="orders-wrapper">
    <h4>PENDING ORDERS</h4>
    <table class="table table-bordered table-hover mt-3 mb-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>TODO</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.todoId">
          <td>{{ todo.todoId }}</td>
          <td>{{ todo.todoDesc }}</td>
          <td>{{ todo.isComplete ? "Done" : "Pending" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "RealTimeTodoListComponent",
  props: ["todos"]
}
</script>