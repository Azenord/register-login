<template>
<v-layout align-center justify-center row fill-height>
    <v-container>
        <v-row>
            <v-col :cols="10"  md="6" offset="1" offset-md="3">
            <v-card shaped elevation="8" class="px-16 pt-8 pb-16">
                <v-card-title class="pl-0
                text-h4            
                text-md-h3         
                text-lg-h2         
                text-xl-h2 
                ">Вход</v-card-title>
                <v-alert dense elevation="11" type="error" v-if="authBody.auth === 'DENIED'">
                  <strong >Имя пользователя</strong> или <strong>пароль</strong> не совпадают
                </v-alert>
                <v-alert dense elevation="11" type="success" v-if="authBody.auth === 'SUCCESS'">
                  Вход в аккаунт успешно выполнен!
                </v-alert>
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
                        large
                    >
                        Войти
                    </v-btn>            
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
import usersApi from '@/api/usersApi'
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
      userProfile:Array,
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
    async login(){
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', { username, password })
      .then(async () => {
        const userData = await usersApi.getUser(username);
        this.userProfile = userData.data
        if(this.userProfile.roles[0]==="ROLE_ADMIN"){
          console.log(this.userProfile.roles[0])
          localStorage.setItem("isAdmin",true)
        }else{
          localStorage.setItem("isAdmin",false)
        }
        this.$router.push('/profile')
      })
      .catch(err => console.log(err))
    },
  }
}


</script>
<style>
</style>