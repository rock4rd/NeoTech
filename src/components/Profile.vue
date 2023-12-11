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
        <div class="profilepic">
           
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
.prof-wrapper{
  position: relative;
    top: 10%;
    left: 13%;
    height: 75%;
    width: 80%;
    border-radius: 34.56px 34.56px 0px 0px;
border: 1px solid var(--LIght, #F5347F);
background: rgba(255, 255, 255, 0.41);
box-shadow: 15px 15px 10px 0px #F5347F;
}



.profheader {
  color: #F5347F;
  position: relative;
  left: 50px;
  top: 50px;
}
.profilepic{
  position: relative;
  top: 20%;
  left: 10%;
  height: 25%;
  width: 15%;
  border-radius: 20px;
background: var(--Soft-Grey, #DFDFDF);
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
}


</style>
