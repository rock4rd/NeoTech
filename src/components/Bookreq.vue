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
        <div>
    <h1>Notification Details</h1>
    <div>
      <label>Name:</label>
      <span>{{ notification.clientName }}</span>
    </div>
    <div>
      <label>Purpose:</label>
      <span>{{ notification.purpose }}</span>
    </div>
    <div>
      <label>Schedule:</label>
      <span>{{ notification.schedule }}</span>
    </div>
    <div>
      <label>Date:</label>
      <span>{{ notification.date }}</span>
    </div>
    <div>
      <label>Time in:</label>
      <span>{{ notification.timeIn }}</span>
    </div>
    <div>
      <label>Time out:</label>
      <span>{{ notification.timeOut }}</span>
    </div>
    <div>
      <label>Contact No. :</label>
      <span>{{ notification.contactNumber }}</span>
    </div>
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
    font-size: 100%; /* Adjust the font size as needed */
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
</style>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const notification = ref(null);

const fetchNotificationDetails = () => {
  // You need to fetch the details based on the route parameter (notification id)
  const route = useRoute();
  const notificationId = route.params.id;

  // Example: Fetch notification details from your API or data source
  // Replace this with your actual data fetching logic
  // For now, using static data for demonstration
  notification.value = {
    id: notificationId,
    clientName: 'Zon Trisha Japay',
    purpose: 'Special Quiz',
    schedule: 'Some schedule',
    date: '2023-12-20',
    timeIn: '10:00 AM',
    timeOut: '12:00 PM',
    contactNumber: '123-456-7890',
  };
};

onMounted(() => {
  fetchNotificationDetails();
});
</script>