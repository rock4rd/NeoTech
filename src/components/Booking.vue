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
          <th class="header-item">Client name</th>
          <th class="header-item">Purpose</th>
          <th class="header-item">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="notifs in notif" :key="notifs.id" @click="handleRowClick(notifs)">
    <td class="notifitem" :colspan="3">
      <div class="notif-content-container">
        <div class="notif-content">
          <div class="clientName">{{ notifs.clientName }}</div>
          <div class="purpose">{{ notifs.purpose }}</div>
          <div class="time">{{ notifs.time }}</div>
        </div>
      </div>
    </td>
  </tr>
      </tbody>
     </table>

      
    </div>
  </div> 
  </div>

  <div v-if="selectedNotif" class="popup-container">
  <div class="popup-background"></div>
  <div class="popup-content">
    <h2>Booking Details</h2>
    <div class="field">
      <label for="name">Name:</label>
      <span id="name">{{ selectedNotif.clientName }}</span>
    </div>
    <div class="field">
      <label for="purpose">Purpose:</label>
      <span id="purpose">{{ selectedNotif.purpose }}</span>
    </div>
    <div class="field">
      <label for="timeIn">Time In:</label>
      <span id="timeIn">{{ selectedNotif.timeIn }}</span>
    </div>
    <div class="field">
      <label for="timeOut">Time Out:</label>
      <span id="timeOut">{{ selectedNotif.timeOut }}</span>
    </div>
    <!-- Add other fields like date, note, etc. as needed -->
    <div class="buttons">
      <button @click="acceptBooking" class="accept-button">Accept</button>
            <button @click="declineBooking" class="decline-button">Decline</button>
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
  background-image: url('/overallbg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  
}


.bookingtable{
  color: black;
    border: none;
    grid: none;
    font-size: 100%; /* Adjust the font size as needed */
  width: 100%; /* Set the width to 100% or a specific value */
  }

.bookingcontainer{
  position: relative;
    top: 10%;
    left: 13%;
    height: 85%;
    width: 80%;
    border-radius: 34.56px 34.56px 0px 0px;
border: 1px solid var(--LIght, #F5347F);
background: rgba(255, 255, 255, 0.41);
box-shadow: 15px 15px 10px 0px #F5347F;
}
.bookhead{
  color: var(--LIght, #F5347F);
  position: relative;
  top: 50px;
  left: 8%;
text-align: start;
font-family: Suez One;
font-size: 45px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.headerz th {
  color: #DD2A70;
  border: none;
  background-color: transparent;
  padding: 15px;
  text-align: left;
}
  .notif-content-container {
    position: relative;
    left: 10%;
    background-color: rgba(128, 128, 128, 0.5); /* RGBA color with 50% opacity */
  width: 80%;
  border-radius: 10px; /* Adjust the border radius as needed */
  margin-bottom: 10px; /* Add margin to separate each set of information */
  
}

/* Updated style for the content within the container */
.notif-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%; /* Adjusted to 100% */
}
.header-item {
  padding: px; /* Add padding for better spacing */
  text-align: left; /* Align text to the left */
}
.time {
  margin-right: -13%;
}
.purpose{
  position: relative;
  align-items: center;
  padding-left: 5%;
}


/* Adjust the width of the container */
.notif-content {
  width: 80%; /* Adjust the width as needed */
}
.headerz th:first-child {
 position: relative;
 left: 10%;
}

/* Remove unnecessary styles */
.notifdata {
  background-color: #CCCCCC; /* Remove this line if not needed */
  border: none; /* Remove this line if not needed */
}

.notifdata td {
  height: 50px; /* Remove this line if not needed */
}

.notifitem {
  position: relative;
  
}

/* Remove unnecessary styles */
.clientName, .purpose, .time {
  position: relative; /* Remove this line if not needed */
  color:black
}

/* Media query for smaller screens */
@media only screen and (max-width: 768px) {
  .bookingcontainer {
    /* Adjust the styles for smaller screens */
    left: 5%;
    width: 90%;
  }
}

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.popup-content h2 {
  margin-bottom: 10px;
}

.popup-content .field {
  margin-bottom: 10px;
}

.popup-content .buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.popup-content .buttons button {
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.popup-content .buttons button:focus {
  color: #171e29;
}

.popup-content .buttons button:hover {
  border-color: #06f;
  color: #06f;
  
}

.popup-content .buttons button:active {
  border-color: #06f;
  color: #06f;
  
}

/* Styles for accept button */
.popup-content .buttons button.accept-button {
  
  color: #000000;
  border-color: rgb(255, 255, 255); /* Set border color to match background */
}

.popup-content .buttons button.accept-button:hover,
.popup-content .buttons button.accept-button:active {
  border-color: rgb(0, 255, 123); /* Change border color on hover and active */
}

/* Styles for decline button */
.popup-content .buttons button.decline-button {
  
  color: #000000;
  border-color: rgb(255, 255, 255); /* Set border color to match background */
}

.popup-content .buttons button.decline-button:hover,
.popup-content .buttons button.decline-button:active {
  border-color: rgb(255, 17, 0); /* Change border color on hover and active */
}

</style>
<script>

export default {
  data() {
    return {
      selectedNotif: null,
      notif: [
        { id: 1, clientName: "Zon Trisha Japay", purpose: "Special Exam", time:"1 hour ago" },
        { id: 2, clientName: "", purpose: "", time:"1 hour ago"  },
        { id: 3, clientName: "", purpose: "", time:"1 hour ago" },
        { id: 4, clientName: "", purpose: "", time:"1 hour ago" },
        { id: 5, clientName: "", purpose: "", time:"1 hour ago" },
        
      ],
    };
  },
  methods: {
    handleRowClick(notif) {
      this.selectedNotif = notif;
      // Do any additional processing you need with the selected notif
      console.log("Selected Notification:", notif);

    },
      acceptBooking() {
      console.log("Booking accepted!");
      // Add logic to handle accepting the booking
      this.selectedNotif = null; // Close the popup
    },

    declineBooking() {
      console.log("Booking declined!");
      // Add logic to handle declining the booking
      this.selectedNotif = null; // Close the popup
    
    },
  },
};
</script>