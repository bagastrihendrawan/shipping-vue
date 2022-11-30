<template> 
        <nav class=" navbar navbar-light bg-light justify-content-beetwen">     
            <div class="logooo">
                <img src="../assets/logo2.png" alt="" width="90px">
            </div>       
            <div class="d-flex">
                <router-link to="/detail" style="color: black;" class="nav-link text-dark" href="#">Home</router-link>
                <router-link to="/shipping" class="nav-link text-dark">Shipping</router-link> 
                <router-link to="/catalog" class="nav-link text-dark">Catalog</router-link>
                <a class="nav-link text-dark" href="#">Delivery</a>
                <a class="nav-link text-dark" href="#">Rewards</a>   
                <div>
                    <img src="../assets/cart-icon.png" alt="">
                </div>            
            </div>       
        </nav>  
</template> 

<script>
export default {
    name: 'NavbarComponents',
    props: {
        msg: String
    }

};
</script>

<style scoped>

    

</style>