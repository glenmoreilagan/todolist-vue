<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">TEST-VUE</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!--
            <a class="nav-link" href="/">Home</a>
            -->
            <router-link class="nav-link" to="/">Todo</router-link>
          </li>
          <li class="nav-item">
            <!--
            <a class="nav-link" href="/jobs">Jobs</a>
            -->
            <router-link class="nav-link" to="/jobs">Jobs</router-link>
          </li>
          <li class="nav-item">
            <!--
            <a class="nav-link" href="/login">Login</a>
            -->
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <!--
            <a class="nav-link" href="/register">Login</a>
            -->
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <!--
            <a class="nav-link" href="/pusher">Login</a>
            -->
            <router-link class="nav-link" to="/pusher">Pusher</router-link>
          </li>
          <li class="nav-item">
            <!--
            <a class="nav-link" href="/client-order">Login</a>
            -->
            <router-link class="nav-link" to="/client-order">Client Order</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>