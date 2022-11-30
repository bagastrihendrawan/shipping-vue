<template>
    <div>
            <a href="" @click.prevent="$emit('changePic', cardGambar)">
            <img :src="require('@/assets/'+cardGambar +'.png')" >
        </a>
                <div class="card-body">
                    <h5>{{cardTitle}}</h5>
                    <p>IDR {{cardHarga}}</p>
                </div>
            
    </div>
</template>

<script>
export default {
    name: 'CardComponents',
    props:['cardGambar','cardTitle','cardHarga']
};
</script>

<!-- <template>
    <div class="card border-light">
        <a href=""@click.prevent="$emit('changeImg', cardImg)"><img
             :src="require"</a>
    </div>
</template>

<script>
export default {
    name: 'LatihanVueCard',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style> -->