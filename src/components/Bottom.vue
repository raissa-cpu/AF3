<template>
    
  <v-bottom-navigation
      app
      background-color=#FF00FF
      color=#EE82EE
      v-model="selectedBottombarItem"
  >
            <v-btn v-for="item in draweritens" :key="item.title" @click="$router.push(item.url)"
            style = "background-color:#ffffff" 
            class="pink--text">
              {{item.title}}
            </v-btn>
  </v-bottom-navigation>

</template>


<script>
export default {
  name: 'Bottom',

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