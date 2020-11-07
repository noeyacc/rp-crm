<template>
  <div class="home">
    <Header />
    <div class="wrapper">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@C/Header.vue";
import Sidebar from "@C/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar
  }
};
</script>
