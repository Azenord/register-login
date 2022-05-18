<template>
  <v-container justify-center>
    <v-layout  wrap>
      <v-flex xs12 class="text-center" mt-16>
        
        <h1 style="text-align: center; color:white;"
        class=" 
          text-h4            
          text-md-h3         
          text-lg-h2         
          text-xl-h2         
          text-truncate    
          "
        >Добро пожаловать<br> на главную страницу<br> ТРО ННГАСУ</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3  mt-16>
        <blockquote style="color:white;" class=" text-center       
          text-h5            
          text-md-h4         
          text-lg-h3         
          text-xl-h3
                          
        ">
            Здесь вы можете оставить заявку на оборудование, посмотреть или изменить имеющиеся.
            Но для начала войдите или зарегистрируйтесь.
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-center" mt-16 >
        <v-btn color="warning" to="/login" large>Вход</v-btn>
        <v-btn color="primary" to="/register" class="ml-3" large>Регистрация</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>