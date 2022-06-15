<template>
  <v-simple-table>
    <thead>
    <tr>
      <td>Название</td>
      <td>Тип</td>
      <td>Количество</td>
      <td>Описание</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="equip in equipment" :key="equip.id">
      <td width="30%">
        <div class="my-1">
          <router-link :to="`/equip/${equip.name}`" style="text-decoration: none; font-size: 15pt">
            @{{ equip.name}}
          </router-link>
        </div>
      </td>
      <td width="25%">
        <div class="my-1">
          <span class="mr-2">
              {{equip.type}}
          </span>
        </div>
      </td>
      <td width="25%">
        <div class="my-1">
          <span class="mr-2">
              {{equip.count}}
          </span>
        </div>
      </td>
      <td>
        {{ equip.description }}
      </td>
    </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: "EquipList",
  props: {
    equipment: Array
  }
}
</script>

<style scoped>

</style>