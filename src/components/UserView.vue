<script setup>
import NavigationBar from './NavigationBar.vue'
</script>

<template>
  <div>
    <NavigationBar />

    
    <div class="usercontainer">
        <div class="userheader">
            <h1>LABORATORY SCHEDULE</h1>
        </div>
       
      <div class="user-wrapper">
        


        </div>
      </div>
    </div>
  
</template>

<style>
.usercontainer {
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
.user-wrapper{
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



.userheader {
  color: var(--LIght, #F5347F);
  position: relative;
  top: 50px;
  left: 8%;
font-family: Suez One;
font-size: 45px;
font-style: normal;
font-weight: 400;
line-height: normal;
}



</style>

