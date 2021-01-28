<template>
  <v-app>
    <Loading :visible="loading" />
    <SnackBar :configSnack="snackBar" />
    <v-main>
      <router-link to="/"> Home </router-link>|
      <router-link to="/about"> About </router-link>|
      <router-link to="/criar-pessoa"> Criar Pessoa </router-link>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Loading from "@/components/Loading";
import SnackBar from "@/components/SnackBar"
import { mapState } from 'vuex'

export default {
  name: "App",

  components: {
    Loading,
    SnackBar
  },

  data() {
    return {};
  },
  computed:{
    ...mapState(['snackBar', 'loading'])
  }
};
</script>
