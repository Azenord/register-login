<template>
  <v-simple-table>
    <thead>
    <tr>
      <td>Пользователь</td>
      <td>Аудитория</td>
      <td>Ответственный</td>
      <td>Статус</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="request in requests" :key="request.id">
      <td width="30%">
        <div class="my-1">
          <router-link :to="`/request/${request.id}`" style="text-decoration: none; font-size: 15pt">
            @{{ request.author.surName}} {{request.author.firstName}}
          </router-link>
        </div>
      </td>
      <td width="25%">
        <div class="my-1">
          <span class="mr-2">
              {{request.audience}}
          </span>
        </div>
      </td>
      <td v-if="request.responsible === null" width="25%">
        <div class="my-1">
          <span class="mr-2">
              Не назначен
          </span>
        </div>
      </td>
      <td v-else width="25%">
        <div class="my-1">
          <span class="mr-2">
              {{request.responsible.userName}}
          </span>
        </div>
      </td>
      <td v-if="request.status === false" style="background-color:red;color:white">
        Не выполнена
      </td>
      <td v-else style="background-color:green;color:white">
        Выполнена
      </td>
    </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: "RequestsList",
  props: {
    requests: Array
  }
}
</script>

<style scoped>

</style>