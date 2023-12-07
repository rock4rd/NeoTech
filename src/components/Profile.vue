<script setup>
import NavigationBar from './NavigationBar.vue'
</script>

<template>
  <div>
    <NavigationBar />

    
    <div class="profcontainer">
        <div class="profheader">
            <h1>PROFILE</h1>
        </div>
       
      <div class="prof-wrapper">
        <div class="scheditems">
           
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.profcontainer {
  position: fixed;
  top: 0; /* Adjusted to start from the top of the viewport */
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url('./overallbg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}



.profheader {
  color: #F5347F;
  position: relative;
  left: 50px;
  top: 50px;
}
.prof-wrapper{
    position: relative;
    top: 60px;
    left: 120px;
    height: 40%;
    width: 25%;
    background-color: white;
    border-radius: 20px;
}


</style>
