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
      <tbody >
        <tr v-for="notif in notif" :key="notif.id" @click="handleRowClick(notif)" class="notifItem">
        <td>{{ notif['Full name'] }}</td>
        <td>{{ notif['Purpose'] }}</td>
        <td>{{ notif['Created AT'] }}</td>
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
      <span id="name">{{ selectedNotif['Full name'] }}</span>
    </div>
    <div class="field">
      <label for="purpose">Purpose:</label>
      <span id="purpose">{{ selectedNotif['Purpose'] }}</span>
    </div>
    <div class="field">
      <label for="timeIn">Time In:</label>
      <span id="timeIn">{{ selectedNotif['TimeIN'] }}</span>
    </div>
    <div class="field">
      <label for="timeOut">Time Out:</label>
      <span id="timeOut">{{ selectedNotif['TimeOut']}}</span>
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
  border-collapse: collapse;
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
display: flex;
    flex-direction: column;
    align-items: center;
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
tbody{
 position: relative;
  top: 20%;
}
.headerz th {
  flex: 1; /* Allow items to flexibly occupy space */
  color: #DD2A70;
  border: none;
  background-color: transparent;
  padding: 10px;
  text-align: left;
  
}
.headerz {
  display: flex;
  justify-content: space-between; /* Spread header items equally */
  position: relative; /* Set position to relative */
  top: 0; /* Align with the top of the container */
  width: 100%; /* Occupy the full width */
  z-index: 2; /* Ensure header is above background image */
  
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
.header-item:first-child {
  position: fixed;
  left: 18%; /* Move the first child to the right */
  /* Align text to the left */
}


.header-item:nth-child(2) {
  position: fixed;
  left: 50%;/* Move the middle child to the right */
}
.header-item:last-child {
  position: fixed;
  left: 82.5%; /* Align text to the right */
}
.notifItem td {
  
 
    padding: 10px;
    text-align: left;
    
}
.notifItem td:first-child{
  position: relative;
  left: 6%;
}
.notifItem td:nth-child(2) {
    position: fixed;
    left:50%;
  }

  .notifItem td:last-child {
   position: relative;
    left: 33%;
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

/* Remove unnecessary styles */
.notifdata {
  background-color: #CCCCCC; /* Remove this line if not needed */
  border: none; /* Remove this line if not needed */
}

.notifdata td {
  height: 50px; /* Remove this line if not needed */
}

.notifitem {
  position: fixed;
  justify-content: space-between;
  
  
}

/* Remove unnecessary styles */
.notifitem .clientName, .purpose, .time {
  position: relative; /* Remove this line if not needed */
  color:black;
  padding-right: 100px;
  margin-bottom: 20%;
  
  
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

.notif-item {
  background-color: rgba(128, 128, 128, 0.5); /* RGBA color with 50% opacity */
  border-radius: 10px; /* Adjust the border radius as needed */
  margin-bottom: 10px; /* Add margin to separate each notification */
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
import NavigationBar from './NavigationBar.vue'
import axios from 'axios';


// Function to convert duration in seconds to hours, minutes, and AM/PM format
function formatDurationToAMPM(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    
    // Calculate AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;
    
    // Format the output
    const formattedDuration = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    return formattedDuration;
}

// Example usage
const durationInSeconds = 7260; // PT7260S
const formattedDuration = formatDurationToAMPM(durationInSeconds);
console.log(formattedDuration); // Output: "2:01 AM"


function timeAgo(timestamp) {
  const currentDate = new Date();
  const createdAtDate = new Date(timestamp);
  const timeDifference = currentDate - createdAtDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (weeks > 0) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return "Just now";
  }
}


export default {
  data() {
    return {
      selectedNotif: null,
      notif: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
  try {
    const response = await axios.get('http://localhost:8000/api/bookings/');
    this.notif = response.data;
   
    this.notif.forEach(notification => {
      console.log(notification['Full name']);
      console.log(notification['TimeIN']);
      console.log(notification['TimeOut']);
      console.log(formatDurationToAMPM(notification['TimeIN']));
      notification['Created AT'] = timeAgo(notification['Created AT']);
      notification['TimeIN'] = formatDurationToAMPM(notification['TimeIN']);
      notification['TimeOut'] = formatDurationToAMPM(notification['TimeOut']);

    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
},
    handleRowClick(notif) {
      this.selectedNotif = notif;
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
