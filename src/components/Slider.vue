<template>
<div>
        <div class="bangku4">
            <p><b>Complete Your Room</b></p>
            <p><b>With What Wev Designed</b></p>
        </div>
        <div class="d-flex justify-content-around">
            <Card v-for="(item, index) in cardTitle" :key="index" :cardTitle="item" :cardGambar="cardImg[index]" :cardHarga="cardPrice[index]" 
            @changePic="activImg">
           
        </Card>

            <!-- <Card v-for="(item, index) in cardGambar" :key="index" :cardGambar="item" ></Card>
            <Card :cardGambar="'chair-4'" :cardHarga="'89.300.000'" :cardTitle="'Cangkir Mautie'" @changePic="changePicFunc"></Card>
            <Card :cardGambar="'chair-3'" :cardHarga="'14.500.000'" :cardTitle="'Samman Kakka'"></Card>
            <Card :cardGambar="'chair-2'" :cardHarga="'22.000.000'" :cardTitle="'Lino Dino'"></Card>
            <Card :cardGambar="'chair-1'" :cardHarga="'12.000.000'" :cardTitle="'Syail Ammeno'"></Card> -->
        </div>
</div>
     
</template>

<script>
import Card from './Card.vue';
export default {
    name: 'SliderComponents',
    components:{
        Card
    },
   
    data(){
        return {
            cardImg: ['chair-1', 'chair-2', 'chair-3', 'chair-4'],
            cardTitle: ['Cangkir Mautie', 'Samman Kaka', 'Lino Dino', 'Syail Ammino'],
            cardPrice: ['60.000.000', '78.000.000', '28.000.000', '92.000.000'],
        }
    },

    methods : {
        activImg: function(cardGambar) {
            this.$emit('gantiGambar', cardGambar)    
        }
    },
    
};
</script>

<style scoped>

</style>