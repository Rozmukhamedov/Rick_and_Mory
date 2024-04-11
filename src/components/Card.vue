<script setup>
import { RouterLink } from "vue-router";
import CardImg from "../assets/images/card.png";

defineProps(["title", "species", "gender", "image", "status", "id"]);
</script>

<template>
  <div class="card">
    <router-link :to="`/character/${id}`">
      <img :src="image" class="card-img-top" alt="card-img" />
      <div class="card-body">
        <h5 class="card-title">Name: {{ title }}</h5>
        <p class="card-text">Gender: {{ gender }}</p>
        <p class="card-text">Species: {{ species }}</p>
        <p class="card-text">Status: {{ status }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}

.card a {
  color: #000;
  text-decoration: none;
}

.card .card-text {
  margin-block: 3px;
}
</style>
