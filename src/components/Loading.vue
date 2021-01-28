<template>
  <v-row justify="center" v-if="visible">
    <v-dialog persistent max-width="290" v-model="visible">
      <v-card height="200" class="d-flex align-center justify-center flex-column">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
        <v-card-title>Carregando...</v-card-title>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props:{
    visible:{
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style></style>
