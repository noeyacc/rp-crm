<template>
  <div class="sidebar">
    <v-navigation-drawer permanent>
      <v-list dense nav>
        <v-list-item v-for="item in list" :key="item.id" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content @click="goPath(item.router)">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { deepCopy } from "@UTIL/other";
export default {
  name: "Sidebar",
  computed: {
    ...mapGetters({
      menuList: "Menu/menuList"
    }),
    list() {
      let list = deepCopy(this.menuList || []);
      list = [
        {
          id: 0,
          name: "首頁",
          router: "Dashboard"
        },
        ...list
      ];
      return list;
    }
  },
  methods: {
    goPath(path) {
      this.$router.push({ name: path });
    }
  }
};
</script>
