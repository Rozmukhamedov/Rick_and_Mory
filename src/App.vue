<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};


</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
}
</style>