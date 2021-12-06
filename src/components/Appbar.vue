<template>
    <v-app-bar
      app
      fixed
      color=#FF00FF
      scroll-target="#scrolling-techniques">
      
      <v-icon left>mdi-book-open-page-variant-outline</v-icon>
      <v-toolbar-title>Studies</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-for="item in draweritens" :key="item.title" >
            <v-btn @click="$router.push(item.url)"
            style = "background-color:#DDA0DD" 
            class="white--text">
              {{item.title}}
            </v-btn>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Appbar',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Video",
        url:"/",
      },
      {
        title:"Musica",
        url:"/Musica",
      },
      {
        title:"Livro",
        url:"/Livro",
      },
      {
        title:"Imagem",
        url:"/Imagem",
      },
    ],

  selecteditem: 0,
  }),
};
</script>