<template>
<div>
    <br><br>
        <center>
        <img src="../assets/logo2.png" alt="">
    </center><br><br>
    <div class="kaki">
        <div>
            <p><b>Overview</b></p>
            <p>Shipping</p>
            <p>Refund</p>
            <p>Promotion</p>
        </div>
        <div>
            <p><b>Company</b></p>
            <p>About</p>
            <p>Career</p>
            <p>Contact Us</p>
        </div>
        <div>
            <p><b>Explore</b></p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>For Developer</p>
        </div>
        <div>
            <p><b>Special Latter</b></p>
            <div class="input-group mb-3">
                <input id="inputNama" type="email" class="form-control" placeholder="Your Email Adress" aria-label="Username" aria-describedby="basic-addon1">
                <button id="btnAlert" style="border: 0px; background-color: rgb(230, 177, 223); border-radius: 2px; " type="submit"> <img src="../assets/tele-icon.png" alt=""></button> 
            </div>            
        </div>    
    </div>
</div>
        
</template>

<script>
export default {
    name: 'FooterrComponents',

    
};
</script>

<style scoped>
.kaki {
	display: flex;
	justify-content: space-around;
    border-radius: 10px;
    
}
.footer{	
    background-color: rgb(250, 250, 250);
	width: 100%; 
	height:300px;
	
	margin-top:70px;
 }
 .bangku4 {
	border-radius: 20px;
	margin-top: 10px;
	margin-left: 10px;
	background-color: rgb(243, 243, 243);
	padding-bottom: 50px;
	padding-top: 50px;
}
</style>