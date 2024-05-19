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
      <b class="bi bi-x-circle xcircle" @click="closePopup"></b>
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
        <span id="timeOut">{{ selectedNotif['TimeOut'] }}</span>
      </div>
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
  position: fixed;
    top: 15.5%;
    left: 13%;
    height: 75%;
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
.header-item{
  font-size: 23px;
  font-weight: bolder;
}
.header-item:first-child {
  position: fixed;
  left: 18%; /* Move the first child to the right */
  /* Align text to the left */
}


.header-item:nth-child(2) {
  position: fixed;
  left: 49.5%;/* Move the middle child to the right */
}
.header-item:last-child {
  position: fixed;
  left: 82%; /* Align text to the right */
}
.notifItem td {
  
 
    position: relative;
    top: 21%;
    
}
.notifItem td:first-child{
  position: relative;
  left: 7%;
}
.notifItem td:nth-child(2) {
    position: relative;
    left:50.5%;
  }

  .notifItem td:last-child {
   position: relative;
    left: 82.5%;
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
.xcircle{
  font-size: 24px;
  position: relative;
  left: 93%;
  bottom: 50px;
  cursor: pointer;
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
import NavigationBar from './NavigationBar.vue';
import axios from 'axios';

// Function to convert duration in seconds to hours, minutes, and AM/PM format
// Function to convert duration string to HH:MM:SS format
function formatDurationToHHMMSS(durationString) {
  // Check if the durationString includes 'H' for hours
  if (durationString.includes('H')) {
    // Extract hours from the provided format (e.g., PT12H)
    const hours = parseInt(durationString.substring(2, durationString.length - 1));
    
    // Convert hours to HH:MM:SS format
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    
    // Return the formatted time with hours
    return `${formattedHours}:00:00`;
  } else {
    // Extract seconds from the provided format (e.g., PT300S)
    const seconds = parseInt(durationString.substring(2, durationString.length - 1));
    
    // Convert seconds to HH:MM:SS format
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    // Format each part to ensure leading zeros if necessary
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    
    // Return the formatted time
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}



function formatDateINtoDayOfWeek(dateIN) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateIN);
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
}

// Function to convert timestamp to "time ago" format
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
  if (months > 0) return months === 1 ? "1 month ago" : `${months} months ago`;
  if (weeks > 0) return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  if (days > 0) return days === 1 ? "1 day ago" : `${days} days ago`;
  if (hours > 0) return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  if (minutes > 0) return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  return "Just now";
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
    
    closePopup() {
      this.selectedNotif = null;
    },
    
    async fetchData() {
  try {
    const response = await axios.get('http://localhost:8000/api/bookings/');
    this.notif = response.data;
    console.log("Fetched notifications:", this.notif); // Log fetched notifications
    this.notif.forEach(notification => {
      notification['Created AT'] = timeAgo(notification['Created AT']);
      notification['TimeIN'] = formatDurationToHHMMSS(notification['TimeIN']);
      notification['TimeOut'] = formatDurationToHHMMSS(notification['TimeOut']);
      notification['DayOfWeek'] = formatDateINtoDayOfWeek(notification['Datein']);

      console.log(notification['TimeIN']);
      console.log(notification['TimeOut']);
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
},


    
handleRowClick(notif) {
  this.selectedNotif = notif;
  console.log("Selected Notification:", notif);
  console.log("Notification properties:", Object.keys(notif)); // Log all properties of the notification
  console.log("Timein:", notif.TimeIN);
  console.log("Timeout:", notif.TimeOut);
  
  console.log(localStorage.getItem('username'));
  console.log(localStorage.getItem('userId'));
  
},


async acceptBooking() {
      try {
        if (!this.selectedNotif || !this.selectedNotif.TimeIN || !this.selectedNotif.TimeOut) {
          console.error('Selected notification or time data is undefined.');
          return;
        }
        const guestid = this.selectedNotif.Guestid;
        const dayofweek = formatDateINtoDayOfWeek(this.selectedNotif.dateIN);
        const timein = this.selectedNotif.TimeIN;
        const timeout = this.selectedNotif.TimeOut;
        const participant = this.selectedNotif['Full name'];
        const userId = localStorage.getItem('userId'); // Get and parse User ID from localStorage
        const bookingId = this.selectedNotif.bookingid;

        // Create a FormData object
        const formData = new FormData();
        formData.append('guest_id', guestid);
        formData.append('day_of_week', dayofweek);
        formData.append('time_in', timein);
        formData.append('time_out', timeout);
        formData.append('participant', participant);

        // Make a POST request with form data to accept booking
        const response = await axios.post(`http://127.0.0.1:8000/api/schedule/acceptbook`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log("Booking accepted:", response.data);

        // Add data for the history entry
        const historyFormData = new FormData();
        historyFormData.append('guest_id', guestid);
        historyFormData.append('booking_id', bookingId); // Assuming the booking ID is returned in the response
        historyFormData.append('full_name', participant);
        historyFormData.append('purpose', this.selectedNotif.Purpose);
        historyFormData.append('action', 'Accepted'); // Add action status
        historyFormData.append('user_id', userId); // Append the User ID

        // Make a POST request with form data to add history
        const historyResponse = await axios.post(`http://127.0.0.1:8000/api/history/add`, historyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log("History added:", historyResponse.data);

       
        
        const deleteResponse = await axios.delete(`http://localhost:8000/api/bookings/${bookingId}`);
        console.log("Booking deleted:", deleteResponse.data);

        // Remove the deleted notification from the list
        this.notif = this.notif.filter(notif => notif.bookingid !== bookingId);
        this.selectedNotif = null; // Close the popup
      } catch (error) {
        console.error('Error accepting booking:', error);
      }
    },

    async declineBooking() {
      try {
        if (!this.selectedNotif) {
          console.error('Selected notification is undefined.');
          return;
        }
        const guestid = this.selectedNotif.Guestid;
        const participant = this.selectedNotif['Full name'];
        const userId = localStorage.getItem('userId'); // Get and parse User ID from localStorage
        const bookingId = this.selectedNotif.bookingid; // Correctly accessing the booking ID

        // Add data for the history entry
        const historyFormData = new FormData();
        historyFormData.append('guest_id', guestid);
        historyFormData.append('booking_id', bookingId);
        historyFormData.append('full_name', participant);
        historyFormData.append('purpose', this.selectedNotif.Purpose);
        historyFormData.append('action', 'Declined'); // Add action status
        historyFormData.append('user_id', userId); // Append the User ID

        // Make a POST request with form data to add history
        const historyResponse = await axios.post(`http://127.0.0.1:8000/api/history/add`, historyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log("History added:", historyResponse.data);

        // Delete the booking after storing it in history
        const response = await axios.delete(`http://localhost:8000/api/bookings/${bookingId}`);
        console.log("Booking declined:", response.data);

        // Remove the declined notification from the list
        this.notif = this.notif.filter(notif => notif.bookingid !== bookingId);
        this.selectedNotif = null; // Close the popup
      } catch (error) {
        console.error('Error declining booking:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
        }
      }
    },
  },
};
</script>