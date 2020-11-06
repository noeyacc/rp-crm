<template>
  <div class="home">
    <Header />
    <Sidebar />
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
    Sidebar,
  },
};
</script>
