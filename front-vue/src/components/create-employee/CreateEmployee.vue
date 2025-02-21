<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <Form :validation-schema="schema">
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <Field
              id="name"
              name="name"
              type="text"
              class="form-control"
              placeholder="Type your Name"
              v-model="employee.name"
              :rules="validateName"
            />
            <ErrorMessage name="name" class="error" />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <Field
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              placeholder="Type your Job Role"
              v-model="employee.job_role"
            />
            <ErrorMessage name="job_role" class="error" />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <Field
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              placeholder="Type your Salary"
              v-model="employee.salary"
            />
            <ErrorMessage name="salary" class="error" />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <Field
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              placeholder="YYYY/MM/DD"
              v-model="employee.birth"
            />
            <ErrorMessage name="birth" class="error" />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Employee Registration</label>
            <Field
              type="text"
              class="form-control"
              id="employee_registration"
              name="employee_registration"
              placeholder="Employee Registration"
              v-model="employee.employee_registration"
            />
            <ErrorMessage name="employee_registration" class="error" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click="onSubmit">
              <font-awesome-icon :icon="'fas fa-user-plus'" /> Employee
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  job_role: yup.string().required(),
  birth: yup.date().required(),
  salary: yup.number().required(),
  employee_registration: yup.string().required(),
});

const employee = {
  name: "",
  job_role: "",
  salary: "",
  birth: "",
  employee_registration: "",
};

function onSubmit() {
  console.log("Submitting ", employee);
  if (
    !employee.name ||
    !employee.job_role ||
    !employee.salary ||
    !employee.birth ||
    !employee.employee_registration
  ) {
    alert("Please complete All Fields!");
    console.log("Missing info");
  } else {
    console.log("All Fields were filled!!");
    return true;
  }
}
</script>
<style scoped>
.form-group {
  padding-top: 1em;
}
.error {
  color: red;
}
</style>
