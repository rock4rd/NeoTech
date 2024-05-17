<template>
  <div>
    <NavigationBar />
    <div class="hiscontainer">
      <div class="hisheader">
        <h1>HISTORY</h1>
      </div>
      <div class="sched-wrapper">
        <table class="history-table">
          <thead>
            <tr>
              <th>History ID</th>
              <th>Date</th>  
              <th>Full Name</th>
              <th>Purpose</th>
              <th>Action</th>
              <th>Admin Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in historyData" :key="item.historyid">
              <td>{{ item.historyid }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.fullname }}</td>
              <td>{{ item.purpose }}</td>
              <td>{{ item.action }}</td>
              <td>{{ item.adminname }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from './NavigationBar.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const historyData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/bookings/history');
    historyData.value = response.data;
    console.log(historyData.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching history:', error);
  }
});
</script>

<style>
.hiscontainer {
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
.schedtable{
  color: black;
    border: none;
    grid: none;
    position: relative;
    left: 3%;
    font-size: 85%; /* Adjust the font size as needed */
  width: 65%; /* Set the width to 100% or a specific value */
  max-height: 100%;
  border-radius: 34.56px;
background: rgba(0, 0, 0, 0.05);
box-shadow: -1.44px 0px 5.76px 0px rgba(0, 0, 0, 0.15) inset, 0px 11.52px 8.64px 0px rgba(0, 0, 0, 0.05);
backdrop-filter: blur(25px);
}
button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  padding: 5px 10px;
  display: flex;
  align-items: center;
}

.hisheader {
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
.sched-wrapper{
  aspect-ratio: 1.32;
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
.history-table {
  width: 100%;
  border-collapse: collapse;
}

.history-table th,
.history-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.history-table th {
  background-color: #f2f2f2;
}

.history-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
