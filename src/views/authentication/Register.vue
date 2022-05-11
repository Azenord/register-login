<template>
    <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="4" offset="1" offset-md="0">
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="text-h4 pl-0">Регистрация</v-card-title>
            <v-alert dense elevation="11" type="error" v-if="saveIsOk === false">
                Упс! {{ errorMessage }}
            </v-alert>
            <v-alert dense elevation="11" type="success" v-if="saveIsOk">
                Регистрация прошла успешно!
            </v-alert>
                <v-form>
                    <v-text-field
                        v-model="username"
                        :error-messages="usernameErrors"
                        label="Имя пользователя"
                        required
                        @input="$v.username.$touch()"
                        @blur="$v.username.$touch()"
                    ></v-text-field>
                    <v-text-field
                        v-model="pass"
                        :append-icon="showPass1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPass1 ? 'text' : 'password'"
                        label="Пароль"
                        required
                        @click:append="showPass1 = !showPass1"
                    ></v-text-field>
                    <v-text-field
                        v-model="passConfirm"
                        :append-icon="showPass2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPass2? 'text' : 'password'"
                        label="Подтверждение пароля"
                        required
                        class="input-group--focused"
                        @click:append="showPass2 = !showPass2"
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Email"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-btn
                        color="warning"
                        @click="register"
                    >
                        Зарегистрироваться
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default{
    name: 'Registration',
    mixins: [validationMixin],
    validations: {
        username: { required, maxLength: maxLength(25) },
        email: { required, email },
    },
    computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength && errors.push('Имя пользователя не может быть более 25 символов')
      !this.$v.username.required && errors.push('Имя пользователя должно быть заполнено')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Email должен быть в формате example@email.com')
      !this.$v.email.required && errors.push('Email должен быть заполнен')
      return errors
    },
    },
    data() {
        return {
            password: '',
            username: "",
            email: "",
            pass: "",
            passConfirm: "",
            showPass1: false,
            showPass2: false,
            saveIsOk: null,
            errorMessage: 'Что-то пошло не так!',
            rules: {
                required: value => !!value || 'Заполните поле пароль',
                min: v => v.length >= 4 || 'Минимум 4 символа',
                passMatch: () => this.pass === this.passConfirm || ('Введенные пароли не совпадают'),
            }
        }
    },
    methods: {
    async register () {
        console.log(JSON.stringify({username: this.username,pass: this.pass,passConfirm: this.passConfirm,email:this.email}))
        axios.post('http://localhost:8080/registration', {
        jsonData: JSON.stringify({username: this.username,pass: this.pass,passConfirm: this.passConfirm,email:this.email}),withCredentials: false,
        })  
    }
  }
}
</script>