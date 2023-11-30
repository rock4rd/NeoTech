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
  top: 96px; /* Set the top position to the height of the navigation bar */
  left: 0;
  width: 100%;
  overflow: hidden;
  height: calc(100% - 96px); /* Adjusted to cover the remaining height */
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1; /* Adjust the value to be less than the dropdown z-index */
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
