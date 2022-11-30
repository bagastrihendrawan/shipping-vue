<template>
    
    <div>
      <nav class=" navbar navbar-light bg-light justify-content-beetwen">     
              <div class="logooo">
                  <img src="../assets/logo2.png" alt="" width="90px">
              </div>       
              <div class="d-flex">
                <router-link to="/detail" style="color: black;" class="nav-link text-dark" href="#">Home</router-link>
                  <a class="nav-link text-dark" href="#">Shipping</a>
                  <a class="nav-link text-dark" href="#">Shipping List</a> 
                  <div>
                      <img src="../assets/cart-icon.png" alt="">
                  </div>            
              </div>       
        </nav>
      <div>
          <div class="header">
            <router-link to="/detail" style="color: black;" href="#">Home | </router-link> 
                

              <a style="color: black;" href="#"> Shipping </a><br>
              <br><br><br>                  
          </div>
          <!-- <div class="alert alert-success alert-dismissible d-none" id="alert">            
              
             <center>
                 <h1 id="alerttextt"></h1>
                 <h5>Paket akan dikirimkan secepatnya ke alamat anda!</h5>
                 <p id="kedua"></p>
                <a href="index.html"><button type="button" class="btn btn-outline-primary">Back</button></a>
  
             </center>
          </div> -->
  
          
                  <div id="formid" class=" p-4 border border-danger" style="width: fit-content; margin: auto; margin-top: 5%;" >
                      <div>
                          <h1 style="text-align: center; margin-bottom: 5%;">Shipping Form</h1>
                      </div>
                      <form>
                          <div class="form-row d-flex" >
                            <div class="col-md-6 mb-3">
                              <label for="validationDefault01">First Name</label>
                              <input type="text" class="form-control" id="firstname" placeholder="First name" value="" required >
                            </div>
                            <div class="col-md-6 mb-3">
                              <label for="validationDefault02">Phone Number</label>
                              <input type="text" class="form-control" id="phone" placeholder="Phone number" value="" >
                            </div>
                          </div>
              
                          <div class="form-row"> 
                              <div class="col-md-6 mb-3">
                                  <label for="validationDefault01">last Name</label>
                                  <input type="text" class="form-control" id="lastname" placeholder="Last name" value="" >
                              </div>
                              <div class="col-md-6 mb-3">
                                  <label for="validationDefault02">City</label>
                                  <input type="text" class="form-control" id="city" placeholder="Enter City" value="" >
                              </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationDefault01">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Email" value="" >
                                  </div>
                                  <div class="col-md-6 mb-3">
                                      <label for="validationDefault02">Postal Code</label>
                                      <input type="text" class="form-control" id="postal" placeholder="Postal Code" value="" >
                                  </div>
                              </div>
                                  <div class="form-row">
                                      <div class="col-md-3 mb-3">
                                          <label for="">Address</label>
                                          <textarea style="overflow: auto;" name="" id="address" cols="70" rows="4"></textarea>
                                      </div>
              
                                  </div>
                                  <div>
                                    <center>
                                        
                                        <button id="supmit" class="btn-lg mb-3" type="submit"  style="background-color: pink;">submit</button>
                                    </center>
                                      
                                  </div>
                              </form>



<!-- 
      <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button> -->




                  </div>
              
      <div class="footer">
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
                        
      </div><br><br><br><br>
  
      <div class="bawah">
          <center>
              <p>Copyright 2021 • <b>All Rights Reserved LuxSpace by BuildWith Abiseka Bagas</b> </p>
          </center>
          <br>
         
      </div>
      
  </div>
      </div>
    </div>         
  </template>
  
  <script>
  export default {
      name: 'ShippingComponent',




    //   data() {
    //   return {
    //     dismissSecs: 10,
    //     dismissCountDown: 0,
    //     showDismissibleAlert: false
    //   }
    // },
    // methods: {
    //   countDownChanged(dismissCountDown) {
    //     this.dismissCountDown = dismissCountDown
    //   },
    //   showAlert() {
    //     this.dismissCountDown = this.dismissSecs
    //   }
    // }



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
.header{
    width: 100vw;
    padding: 3vh;
    padding-bottom: 50px;
    height: 3vh;
    background-color: rgb(243, 243, 243);


}
.bawah{
    width: 100vw;
    padding: 3vh;
    padding-bottom: 50px;
    height: 3vh;
    background-color: rgb(243, 243, 243);


}
  </style>