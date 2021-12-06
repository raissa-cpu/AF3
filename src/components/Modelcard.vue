<template>
    <v-card id="c" outlined color="pink garken-2">
        <v-card-title style="color: white" class="justify-center">
            {{food.name}}
        </v-card-title>
        <br/> <v-img
        contain
        :src="require(`../assets/img/${food.img}`)"
        height="250px">
        </v-img>
        <br/>
        <div>
            <v-btn style = "background-color:#EE82EE"
            class="black--text"
            :href=food.link
            target="_blank"> Link da receita </v-btn>
        </div>
        <br/>
        <p
        class="texto"
        >{{food.descrição}}</p>
        
    </v-card>
</template>

<script>
export default {
    props: ["food"]
}
</script>

<style>
.texto{
 color: rgb(235, 231, 235);
 text-align: justify;
 max-width: 90%;
 justify-self: center;
 margin-left: 5%;
 margin-right: 5%;
}

#c{
    text-align: center;
    height: 600px;
}
</style>