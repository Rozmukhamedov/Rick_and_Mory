<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Card from "../components/Card.vue";

const data = ref({});
const loading = ref(false);
const error = ref(null);

const route = useRoute();

watch(() => route.params.id, fetchData, { immediate: true });

async function fetchData(id) {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    data.value = res.data;
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Card
            :id="data.id"
            :image="data.image"
            :title="data.name"
            :gender="data.gender"
            :status="data.status"
            :species="data.species"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>