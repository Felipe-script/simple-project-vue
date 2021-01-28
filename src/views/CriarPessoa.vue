<template>
  <div class="content">
    <h1 class="text-center">Criar Pessoa</h1>
    <v-form class="text-center">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Nome"
              outlined
              v-model="pessoa.nome"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Info Pessoa"
              outlined
              v-model="pessoa.infoPessoa"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Tipo veículo"
              outlined
              v-model="pessoa.tipoVeiculo"
            ></v-text-field>
            <v-checkbox
              v-model="pessoa.isHability"
              label="Motorista"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
      <v-btn depressed color="primary" @click="criarPessoa">
        Cadastrar Pessoa
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import service from '@/services'
export default {
  data() {
    return {
      pessoa: {
        nome: "",
        isHability: false,
        tipoVeiculo: "",
        infoPessoa: "",
      },
    };
  },
  methods: {
    async criarPessoa() {
     console.log('debug pessoa', this.pessoa)
     try {
       await service.criarPessoa(this.pessoa)
       console.log('sucesso')
     } catch (error) {
       console.log(error)
     }
    },
  },
};
</script>

<style></style>
