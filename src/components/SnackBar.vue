<template>
  <v-snackbar
    v-model="configSnack.visible"
    :color="configSnack.color"
  >
    {{ configSnack.msg }}
    <template v-slot:action="{ attrs }">
        <v-btn color="#000" text v-bind="attrs" @click="configSnack.visible = false">
          Fechar
        </v-btn>
      </template>
  </v-snackbar>
</template>

<script>
export default {
  props:['configSnack'],
}
</script>

<style></style>
