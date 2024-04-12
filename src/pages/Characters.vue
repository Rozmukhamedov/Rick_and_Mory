<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import LogoImg from "../assets/images/Logo.png";
import Card from "../components/Card.vue";

const data = ref([]);
const loading = ref(false);
const error = ref(null);

const route = useRoute();
const router = useRouter();
const page = ref(route.query.page || 1);
const name = ref("");
const status = ref("");
const gender = ref("");

watch(() => route.query, fetchData, { immediate: true });

async function fetchData() {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character${route.fullPath}`
    );
    data.value = res.data.results;
  } catch (err) {
    console.log(err);
  }
}

const updateQueryName = () => {
  router.push({
    query: { ...route.query, name: name.value || undefined, page: 1 },
  });
};

const updateQueryPage = () => {
  page.value = page.value + 1;
  router.push({
    query: { ...route.query, page: page.value },
  });
};

const updateQueryStatus = () => {
  router.push({
    query: { ...route.query, status: status.value || undefined, page: 1 },
  });
};

const updateQueryGender = () => {
  router.push({
    query: { ...route.query, gender: gender.value || undefined, page: 1 },
  });
};

const clearQuery = () => {
  page.value = 1;
  name.value = "";
  gender.value = "";
  status.value = "";
  router.push({
    query: { page: 1 },
  });
};
</script>

<template>
  <div class="characters">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <img :src="LogoImg" alt="" />
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="name"
              aria-describedby="basic-addon1"
              v-model="name"
              @input="updateQueryName"
            />
          </div>
        </div>
        <div class="col-md-3">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="gender"
            @change="updateQueryGender"
          >
            <option selected>Open this select menu</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="genderless">genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div class="col-md-3">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="status"
            @change="updateQueryStatus"
          >
            <option selected>Open this select menu</option>
            <option value="alive">alive</option>
            <option value="dead">dead</option>
            <option value="unknown">unknown</option>
          </select>
        </div>

        <div class="col-md-1">
          <button
            type="button"
            class="btn btn-danger w-100"
            @click="clearQuery"
          >
            Clear
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-md-3" v-for="(item, index) in data" :key="index">
          <Card
            :id="item.id"
            :image="item.image"
            :title="item.name"
            :gender="item.gender"
            :status="item.status"
            :species="item.species"
          />
        </div>
        <div class="col-12 mb-3 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            @click="updateQueryPage"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.characters img {
  height: 147px;
}

@media (max-width: 576px) {
  .characters img {
    width: 100%;
    height: auto;
  }
}
</style>
