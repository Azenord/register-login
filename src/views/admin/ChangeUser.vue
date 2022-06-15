<template>
 <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="6" offset="1" offset-md="0">
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="pl-0
              text-h6       
              text-md-h3         
              text-lg-h2         
              text-xl-h2
            ">Изменение пользователя</v-card-title>
            <v-card-text class="pl-0
              text-h6            
              text-md-h5         
              text-lg-h4         
              text-xl-h4
            ">
            <v-text
                v-model="userName"
                label="Имя пользователя"
            >Имя пользователя: {{userName}}</v-text>
            <v-text-field
            class="pt-5"
                v-model="surName"
                label="Фамилия"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="firstName"
                label="Имя"
                outlined
                required
            ></v-text-field>
            <v-text-field
                v-model="email"
                label="Email"
                outlined
                required
            ></v-text-field>
            <v-combobox
            v-model="select"
            :items="items"
            label="Выберите роль"
            outlined
            @change="onChange"
          ></v-combobox>
            <v-checkbox
                v-model="checkbox"
                color="green"
                :label="'Изменить пароль?'"
            ></v-checkbox>
            <v-text-field
                v-model="pass"
                v-if="checkbox"
                :append-icon="showPass1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="showPass1 ? 'text' : 'password'"
                name="pass"
                hint="Пароль больше 4 символов"
                label="Пароль"
                required
                @click:append="showPass1 = !showPass1"
            ></v-text-field>
            </v-card-text>
                <v-form>    
                    <v-btn
                        color="green"
                        style="color:white"
                        @click="changeUser"
                    >
                        Изменить
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import usersApi from '@/api/usersApi'
export default{
    mixins: [validationMixin],
    validations: {
        username: { required, maxLength: maxLength(25) },
        email: { required, email },
    },
    
    async mounted(){
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
    data(){
        return{
            users: Array,
            userData:Array,
            userName: this.$route.params.username,
            email: "",
            pass: "",
            firstName: "",
            userRole:"ROLE_GUEST",
            showPass1: false,
            checkbox:false,
            errorMessage: 'Что-то пошло не так!',
            rules: {
                required: value => !!value || 'Заполните поле пароль',
                min: v => v.length >= 4 || 'Минимум 4 символа'
            },
            items: [
                'Администратор',
                'Техник',
                'Пользователь',
                'Гость',
            ],
        }
    },
    methods:{
        async changeUser(){
            
            if(!this.checkbox){
                this.userData = {userName:this.userName,email:this.email,roles:[this.userRole],firstName:this.firstName,surName:this.surName}
            }else{
                this.userData = {userName:this.userName,email:this.email,roles:[this.userRole],firstName:this.firstName,surName:this.surName,pass:this.pass}
            }
            await usersApi.changeUser(this.userData)
            await this.$router.push("/users")
        },
        onChange(value) {
            if(value === "Администратор"){
                this.userRole = "ROLE_ADMIN"
            }
            if(value === "Техник"){
                this.userRole = "ROLE_TECHNICIAN"
            }
            if(value === "Пользователь"){
                this.userRole = "ROLE_USER"
            }
        }
    }
}
</script>