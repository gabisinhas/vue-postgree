<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type your Name"
              v-model="employee.name"
              require
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type your Job Role"
              v-model="employee.job_role"
              required
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              class="form-control"
              placeholder="Type your Salary"
              v-model="employee.salary"
              required
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input
              type="date"
              class="form-control"
              placeholder="YYYY/MM/DD"
              v-model="employee.birth"
              required
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Employee Registration</label>
            <input
              type="text"
              class="form-control"
              placeholder="Employee Registration"
              v-model="employee.employee_registration"
              required
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              + Add Employee
            </button>
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
  setup() {
    const employee = {
      name: "",
      job_role: "",
      salary: "",
      birth: "",
      employee_registration: "",
    };

    function handleSubmitForm() {
      console.log("Save");
    }

    return {
      employee,
      handleSubmitForm,
    };
  },
};
</script>
<style scoped>
.form-group {
  padding-top: 1em;
}
</style>
