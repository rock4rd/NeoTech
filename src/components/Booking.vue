<script setup>
import NavigationBar from './NavigationBar.vue'
</script>
<template>
  <div>
    <NavigationBar />
    
    <div class="bookcontainer">
        <div class="bookheader">
            <h1 class="bookhead">Booking Request</h1>
        </div>
        
      <div class="book-wrapper">
        <p>Name:  </p>
        <p>Purpose: </p>
        <p>Schedule: </p>
        <p><b class="bi bi-dot"></b> Date:</p>
        <p><b class="bi bi-dot"></b> Time In:</p>
        <p><b class="bi bi-dot"></b> Time Out:</p>
        <p>Contact Number: </p>
        <p>  </p>
        <p>NOTE (OPTIONAL): </p>
      </div>

      <div class="decision">
            <div class="yes"><a href="" class="accept">Accept <b class="bi bi-check2 icon"></b></a></div>
            <div class="no"><a href="" class="decline">Decline <b class="bi bi-x-lg icon"></b> </a></div>
      </div>
    </div>
  </div>



</template>

<style>
.bookcontainer {
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
.bookheader{
  color: #F5347F;
  position: relative;
  left: 50px;
  top: 50px;
}
.book-wrapper{
    position: relative;
    top: 15%;
    left: 25%;
    font-weight: 100;
    color: white;
}
.yes{
    height: 50px;
    width: 200px;
    background-color: #93FF97;
    position: relative;
    top: 333px;
    left: 57%;
    border-radius: 10px;

}
.accept{
    position: relative;
    font-weight: bold;
    left: 32%;
    top: 29%;
    color: black;
    
}
.icon{
    font-weight: bold;
}
.no{
    height: 50px;
    width: 200px;
    background-color: #FF9C9C;
    position: relative;
    top: 280px;
    left: 70%;
    border-radius: 10px;

}
.decline
{
    position: relative;
    font-weight: bold;
    left: 32%;
    top: 29%;
    color: black;
}

</style>