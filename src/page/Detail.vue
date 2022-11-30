<template>
    <div>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Galley :iniImg="iniCard" :cardTitle="iniTitle" :cardHarga="iniHarga"></Galley>
    <Slider @gantiGambar="iniGambar"></Slider>
    <Footerr></Footerr>
    <Copyright></Copyright>
    </div>
</template>
<script>

import Navbar from '../components/Navbar.vue'
import Breadcrumb from '../components/Breadcrumb'
import Galley from '../components/Galley'
import Slider from '../components/Slider'
import Footerr from '../components/Footerr'
import Copyright from '../components/Copyright'

export default {
  name: 'DetailPage',
  components: {
    Navbar,
    Breadcrumb,
    Galley,
    Slider,
    Footerr,
    Copyright, 
   
  },

  methods:{
    iniGambar:function(cardGambar,){
      this.iniCard=cardGambar
    }
  },

  data(){
    return{
      iniCard:'chair',
    }
  }
};
</script>

<style lang="scss" scoped>

</style>


