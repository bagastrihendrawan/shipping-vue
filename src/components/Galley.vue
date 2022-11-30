<template>
    <div>
        
 
        <div class="utama">
            <div class="d-flex p-5 my-5">
                <div class="d-flex flex-column justify-content-around" style="width: 98px; height: auto;">
                    <img src="../assets/side-2.png" alt="" width="80px">
                    <img src="../assets/side-3.png" alt="" width="80px">
                    <img src="../assets/side-1.png" alt="" width="80px">
                    <img src="../assets/side-3.png" alt="" width="80px">
                    <img src="../assets/side-2.png" alt="" width="80px">                   
                </div>
            </div>
             <div class="p-4">
            <img  :src="require('@/assets/'+iniImg +'.png')" alt="bangku" width="450px" height="auto">   
             </div>

             <div class="text">
                <h2>Chair Thatty</h2>
                <div class="harga"><p>IDR 12.000.000</p></div>
                <router-link to="/shipping" style="color:black; border-radius: 10px;" class="add"> <img src="../assets/cart-icon.png" alt="">add to chart</router-link> 
                <br>
                <hr>
                <p><b>About the product:</b></p>
                <p>Tailored to a level of perfection synonymous with that
                of a Savile Row suit and with understated quality in the 
                detail, Jetty has been influenced by timeless 1950s style.</p>
                
                <p>Providing a subtle nod to the past, Jetty also provides a
                perfect solution for the way we work today.
                A comprehensive product family, Jetty features a variety 
                of elegant chairs and sofas.</p>         
                
             </div>
        </div>
    </div>
        
</template>

<script>
export default {
    name: 'GalleyComponents',
    props: ['iniImg']
};
</script>

<style  scoped>
  .utama {
	display: flex;
	flex-direction: row;
	margin-top: 40px;
	text-decoration: none;
}
.text {
	margin: 10px;
	padding: 1px;
	border: 0px;
}
.kursi {
	
	padding: 10px;
	width: 600px;
	border-radius: 20px ;
	justify-content: center;
	margin-right: 30px;
	
}
.add {
	background-color: rgb(236, 200, 231);
	margin: 0px;
	padding: 0px;
	width: 200px;
	height: 32px;
	border-radius: 50px;
	margin-right: 150px;
}

</style>