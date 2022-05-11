<template>
<v-layout align-center justify-center row fill-height>
    <v-container>
        <v-row>
            <v-col :cols="10"  md="4" offset="1" offset-md="4">
            <v-card shaped elevation="8" class="px-16 pt-8 pb-16">
                <v-card-title class="text-h4 pl-0">Вход</v-card-title>
                <form>
                    <v-text-field
                        v-model="username"
                        :error-messages="usernameErrors"
                        label="Имя пользователя"
                        required
                        @input="$v.username.$touch()"
                        @blur="$v.username.$touch()"
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPass ? 'text' : 'password'"
                        name="input-10-2"
                        label="Пароль"
                        class="input-group--focused"
                        @click:append="showPass = !showPass"
                    ></v-text-field>
                    <v-btn
                        color="warning"
                        @click="login"
                    >
                        Войти
                    </v-btn>
                    <v-text class="pl-6">Нет аккаунта?</v-text>
                    <router-link to="/register" class="pl-4" color="">Зарегистрироваться!</router-link>
                </form>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-layout>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'Login',

  mixins: [validationMixin],
  validations: {
    username: { required, maxLength: maxLength(25) },
  },

  data () {
    return {
      authBody: {},
      username: '',
      showPass: false,
      password: '',
      rules: {
        required: value => !!value || 'Заполни поле пароля.',
        min: v => v.length >= 4 || 'Минимум 4 символа',
      }
    }
  },

  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength && errors.push('Имя пользователя должно состоять не более чем из 25 символов.')
      !this.$v.username.required && errors.push('Имя пользователя должно быть заполнено.')
      return errors
    },
    
  },

  methods: {
    login(){
       fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({username: this.username,password:this.password})
      })
    },
  }
}


</script>
<style>
</style>