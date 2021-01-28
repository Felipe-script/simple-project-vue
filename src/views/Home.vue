<template>
  <div class="home">
    <h1>Home</h1>
    <div style="margin:50px">
      <v-progress-circular
        v-if="showProgress"
        :size="50"
        color="primary"
        indeterminate
      >
      </v-progress-circular>
    </div>
    <v-card
      elevation="10"
      width="500"
      class="card-person"
      v-for="item in getPessoas"
      :key="item.id"
    >
      <v-card-title>{{ item.nome }}</v-card-title>
      <v-card-subtitle>{{
        `${item.isHability ? "Motorista" : "Cliente"}`
      }}</v-card-subtitle>
      <v-card-text>Tipo de veículo: {{ item.tipoVeiculo }}</v-card-text>
      <v-card-subtitle>Informações sobre a pessoa</v-card-subtitle>
      <v-card-text>{{ item.infoPessoa }}</v-card-text>
      <v-btn
        text
        color="error"
        @click="setDelete(item.id)"
        :disabled="disabled"
      >
        excluir
      </v-btn>
    </v-card>
    <!--  <v-snackbar v-model="snackbar" :color="color">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="#000" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>-->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Axios from 'axios'
import service from "@/services";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    //HelloWorld
  },
  data() {
    return {
      disabled: false,
      showProgress: false,
      color: "",
      snackbar: false,
      text: "",
      pessoas: [],
    };
  },
  computed: {
    getPessoas: {
      get() {
        return this.$store.getters.getPessoas;
      },
      set() {},
    },
  },
  methods: {
    ...mapActions(["setDelete", "listaPessoas"]),
    snackbarMessage(message, success = true) {
      this.snackbar = true;
      this.text = message;
      this.color = success ? "success" : "error";
    },
    async getPessoas() {
      this.showProgress = true;
      try {
        const { data } = await service.getPessoas();
        this.pessoas = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.showProgress = false;
      }
    },
    //this.$store.dispatch('setDelete', id)
    // deletePessoa(id) {
    /* this.showProgress = true;
      this.disabled = true;
      try {
        await service.deletePessoa(id);
        this.pessoas = this.pessoas.filter((pessoa) => pessoa.id !== id);
        this.snackbarMessage("Excluido com sucesso!");
      } catch (error) {
        this.snackbarMessage("Erro ao excluir pessoa", false);
        console.log("error", error.response);
      } finally {
        this.showProgress = false;
        this.disabled = false;
      }*/
    // },
  },
  mounted() {
    console.log("state vuex", this.$store.state);
    this.listaPessoas();
    /* try {
      this.showProgress = true;
      await this.$store.dispatch("listaPessoas");
    } catch (error) {
      console.log("errorx", error.response);
    }finally{
       this.showProgress = false;
    }*/
    // this.getPessoas();
  },
};
</script>
<style scoped>
.card-person {
  margin-top: 50px;
}
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
</style>
