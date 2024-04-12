<script setup>
import { RouterLink } from "vue-router";
import logoImg from "../assets/images/logo-black 1.png";
</script>

<template>
  <div class="header border-bottom">
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img :src="logoImg" alt="" />
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/"
              class="nav-link"
              aria-current="page"
              >Characters
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link active-class="active" to="/episodes" class="nav-link"
              >Episodes</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" to="/locations" class="nav-link"
              >Locations</router-link
            >
          </li> -->
        </ul>
      </header>
    </div>
  </div>
</template>

<style scoped>
.header header ul li {
  margin: auto;
}

.header header ul li a {
  font-size: 18px;
  line-height: 16px;
  font-weight: 600;
  color: #000000;
}
</style>
