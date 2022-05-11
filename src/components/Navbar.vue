<template>
<v-app-bar
    color="#004588"
    dark
    app
>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <router-link to="/" style="text-decoration: none; color: inherit;">
    <v-img
        max-height="4em"
        max-width="4em" 
        src="@/assets/logoNNGASU.png"
    ></v-img>
    </router-link>
    <router-link to="/" style="text-decoration: none; color: inherit;">
        <v-toolbar-title>ННГАСУ | ТРО</v-toolbar-title>
    </router-link>
    <v-spacer/>
    <v-btn color="warning">
        <router-link to="/" style="text-decoration: none; color: inherit;">Главная</router-link>
    </v-btn>
</v-app-bar>  
</template>