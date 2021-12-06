<template>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        left
      >
        <v-list>
          <v-list-item class="px-3">
            <v-list-item-avatar>
              <v-img src="https://media-exp1.licdn.com/dms/image/C4D03AQFvvYPLF-rwZA/profile-displayphoto-shrink_800_800/0/1625145271734?e=1644451200&v=beta&t=k14nNmbIAxRWfNnH4-oKyKZoN_Gr80titgA7w4T3PbY"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h12">
                Raissa Miranda de Lira
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
        <v-list-item-group v-model="selecteditem" color="pink">
          <v-list-item v-for="item in draweritens" :key="item.title" link @click="$router.push(item.url)">

            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
        </v-list-item-group>
      </v-list>
        
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Video",
        url:"/",
        icon:"mdi-video-vintage",
      },
      {
        title:"Musica",
        url:"/Musica",
        icon:"mdi-music",
      },
      {
        title:"Livro",
        url:"/Livro",
        icon:"mdi-book-open-blank-variant",
      },
      {
        title:"Imagem",
        url:"/Imagem",
        icon:"mdi-image-multiple-outline",
      },
    ],

  selecteditem: 0,
  }),
};
</script>