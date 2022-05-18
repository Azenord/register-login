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