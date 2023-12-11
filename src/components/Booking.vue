<script setup>
import NavigationBar from './NavigationBar.vue'
</script>
<template>
  <div>
    <NavigationBar />
    
    <div class="bookcontainer">
        <div class="bookheader">
            <h1 class="bookhead">NOTIFICATION</h1>
        </div>
       <div class="bookingcontainer">
     <table class="bookingtable">
      <thead>
        <tr class="headerz">
          <th>Client name</th>
          <th>Purpose</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="notifs in notif" :key="notifs.id">
          <td>
            <div class="notif-content">
              <div class="clientName">{{ notifs.clientName }}</div>
              <div class="purpose">{{ notifs.purpose }}</div>
              <div class="time">{{ notifs.time }}</div>
            </div>
          </td>
        </tr>
        
      </tbody>
     </table>

      
    </div>
  </div> 
  </div>



</template>

<style>
.bookcontainer {
  
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
.bookingtable{
  color: black;
    border: none;
    grid: none;
    
    font-size: 50%; /* Adjust the font size as needed */
  width: 100%; /* Set the width to 100% or a specific value */
  }

.bookingcontainer{
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
.notif-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;
  height: 50px; /* Set a fixed height for consistency */
}
.notifdata {
  background-color: #CCCCCC; /* Grey background color */
  border: none; /* Remove borders */
  
  overflow: hidden; /* Hide any overflow content */
}
.notifdata td {
  height: 50px;
  
 
}
.headerz th{
  position: relative;
    right: 20%;
  color:#DD2A70;
  border: none; /* Remove borders */
  background-color: transparent; /* Make the background transparent */
  
}
.clientName, .purpose, .time{
  position: relative;
  left: 25%;

}
.clientName{
  margin-left: 50px;
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
<script>

export default {
  data() {
    return {
      notif: [
        { id: 1, clientName: "Zon Trisha Japay", purpose: "Special Quiz", time:"1 hour ago" },
        { id: 2, clientName: "202", purpose: "Occupied", time:"1 hour ago"  },
        { id: 3, clientName: "203", purpose: "Available", time:"1 hour ago" },
        { id: 4, clientName: "204", purpose: "Available", time:"1 hour ago" },
        { id: 5, clientName: "205", purpose: "Available", time:"1 hour ago" },
        
      ],
    };
  }
}
</script>