<template>
  <div class="home">
    <h1>Home</h1>
    <v-card elevation="10" width="500" class="card-person" v-if="pessoa.id">
      <v-card-title>{{ pessoa.nome }}</v-card-title>
      <v-card-subtitle>{{
        `${pessoa.isHability ? "Motorista" : "Cliente"}`
      }}</v-card-subtitle>
      <v-card-text>Tipo de veículo: {{ pessoa.tipoVeiculo }}</v-card-text>
      <v-card-subtitle>Informações sobre a pessoa</v-card-subtitle>
      <v-card-text>{{ pessoa.infoPessoa }}</v-card-text>
      <v-btn text color="error">
        excluir
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      pessoa: {
        id: null,
        nome: "",
        tipoVeiculo: "",
        infoPessoa: "",
        isHability: false,
      },
    };
  },
  methods: {
    async getPersonId() {
      if (Number(this.id) > 0) {
        try {
          const { data } = await Axios.get(
            `http://localhost:3000/pessoas/${this.id}`
          );
          this.pessoa = data;
        } catch (error) {
          this.$router.push({name: 'notFound'})
          console.log(error);
        }
      }else{
        this.$router.push({name: 'notFound'})
      }
    },
  },
  mounted(){
    this.getPersonId()
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
