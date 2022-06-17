<template v-for="tech in items" :key="tech.id">
    <v-combobox
      :items="items"
    ></v-combobox>
</template>

<script>
export default {
  name: "TechList",
  props: {
    items: []
  }
}
</script>

<style scoped>

</style>