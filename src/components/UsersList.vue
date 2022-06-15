<template>
  <v-simple-table>
    <thead>
    <tr>
      <td>Имя пользователя</td>
      <td>Имя</td>
      <td>Фамилия</td>
      <td>Дата регистрации</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <td width="30%">
        <div class="my-1">
          <router-link :to="`/users/${user.userName}`" style="text-decoration: none; font-size: 15pt">
            @{{ user.userName }}
          </router-link>
        </div>
        <div class="my-1">
          <span v-for="role in user.roles" :key="role">
            <span v-if="role === 'ROLE_USER'" class="role_user mr-2">
              Пользователь
            </span>
            <span v-if="role === 'ROLE_GUEST'" class="role_guest mr-2">
              Гость
            </span>
            <span v-if="role === 'ROLE_TECHNICIAN'" class="role_technician mr-2">
              Техник
            </span>
            <span v-if="role === 'ROLE_ADMIN'" class="role_admin mr-2">
              Администратор
            </span>
          </span>
        </div>
      </td>
      <td width="25%">
        <div class="my-1">
          <span class="mr-2">
              {{user.firstName}}
          </span>
        </div>
      </td>
      <td width="25%">
        <div class="my-1">
          <span class="mr-2">
              {{user.surName}}
          </span>
        </div>
      </td>
      <td>
        {{ user.createdDate }}
      </td>
    </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: Array
  }
}
</script>

<style scoped>
.role_user{
  padding: 3px;
  background: #9bd1a0;
  color: white;
}

.role_admin{
  padding: 3px;
  background: #f2a468;
  color: white;
}
.role_guest{
  padding: 3px;
  background: #808080;
  color: white;
}
.role_technician{
  padding: 3px;
  background: #DAA520;
  color: white;
}
</style>