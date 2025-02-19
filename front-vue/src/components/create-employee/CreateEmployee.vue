<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="add">
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type your Name"
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type your Job Role"
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              class="form-control"
              placeholder="Type your Salary"
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input type="date" class="form-control" placeholder="YYYY/MM/DD" />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Employee Registration</label>
            <input
              type="text"
              class="form-control"
              placeholder="Employee Registration"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  component: {
    name: "CreateEmployee",
  },
  setup() {},
};
</script>
<style scoped>
.form-group {
  padding-top: 1em;
}
</style>
