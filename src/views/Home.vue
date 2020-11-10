<template>
  <div class="home">
    <Header />
    <div class="wrapper">
      <Sidebar />
      <v-container class="lighten-5">
        <v-row>
          <v-col
            ><h1 class="text-h6">{{ title }}</h1>
            <v-divider
          /></v-col>
        </v-row>
        <router-view />
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@C/Header.vue";
import Sidebar from "@C/Sidebar.vue";
import { routeMappingName } from "@UTIL/hardCode";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar
  },
  computed: {
    title() {
      const route = this.$route.name;
      return routeMappingName[route];
    }
  }
};
</script>
<style lang="scss" scoped></style>
