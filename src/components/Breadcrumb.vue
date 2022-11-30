<template>
    <div class="header">
        <router-link to="/detail" style="color: black;" href="#">Home | </router-link>
            <a style="color: black;" href="#"> Office Room | </a>
            <a style="color: black;" href="#"> Details </a><br>
            <br><br><br>                  
        </div>
</template>

<script>
export default {
    name: 'BreadcrumbComponents',
    props: {
        msg: String
    }

    
};
</script>

<style scoped>
.header{
    width: 100vw;
    padding: 3vh;
    padding-bottom: 50px;
    height: 3vh;
    background-color: rgb(243, 243, 243);


}
</style>