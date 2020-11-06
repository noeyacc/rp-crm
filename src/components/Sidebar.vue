<template>
  <div class="sidebar">
    <div v-for="i in menuList" :key="i.id">
      {{ i.name }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  computed: {
    ...mapGetters({
      menuList: "Menu/menuList",
    }),
  },
};
</script>
