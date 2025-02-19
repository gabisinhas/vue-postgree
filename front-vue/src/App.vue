<template>
  <div>
    <!-- INICIO NAVBAR  -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <!-- Navbar content -->
      <div class="container">
        <a class="navbar-brand order-md-last"
          >CRUD Vue.js + Node.js + PostgreSQL</a
        >
        <ul class="navbar-nav mr-auto" style="padding-left: 25px">
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              >Create New Employee</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-employees"
              >List All Employees</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- FIM NAVBAR  -->
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.alignment {
  padding-left: 30rem;
}
</style>
