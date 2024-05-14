<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Import NavigationBar component
import NavigationBar from './NavigationBar.vue';

// Define reactive variables
const schedules = ref([]);
const labs = ref([]);

// Define time slots
const timeSlots = [
  '7:00 AM','8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 NN',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

// Helper function to format time
const formatTime = (ptTime) => {
  console.log('Input time:', ptTime); // Log the input time
  const seconds = parseInt(ptTime.replace('PT', '').replace('S', ''), 10);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  console.log('Formatted time:', formattedTime); // Log the formatted time
  return formattedTime;
};

// Function to fetch schedules
const fetchSchedules = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/schedule/');
    console.log('Response Data:', response.data);
    schedules.value = response.data.map(schedule => ({
      ...schedule,
      timein: formatTime(schedule.timein),
      timeout: formatTime(schedule.timeout),
    }));
  } catch (error) {
    console.error('Error fetching schedules:', error.response ? error.response.data : error.message);
  }
};

// Function to fetch lab statuses
const fetchLabs = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/labstatus/');
    labs.value = response.data;
  } catch (error) {
    console.error('Error fetching labs:', error.response ? error.response.data : error.message);
  }
};

// Function to get schedules for a specific time and day
const getSchedulesForTimeDay = (time, day) => {
  console.log('Selected Time:', time);
  console.log('Selected Day:', day);
  
  // Helper function to check if a schedule overlaps with the given time slot
  const doesOverlap = (scheduleTimeInMinutes, scheduleTimeOutMinutes, slotTime) => {
    return slotTime >= scheduleTimeInMinutes && slotTime < scheduleTimeOutMinutes;
  };

  const slotTime = convertTimeToMinutes(time);

  const filteredSchedules = schedules.value.filter(schedule => {
    const scheduleTimeInMinutes = convertTimeToMinutes(schedule.timein);
    const scheduleTimeOutMinutes = convertTimeToMinutes(schedule.timeout);
    
    console.log('Schedule Time In Minutes:', scheduleTimeInMinutes);
    console.log('Schedule Time Out Minutes:', scheduleTimeOutMinutes);
    console.log('Slot Time:', slotTime);
    console.log('Schedule Day:', schedule.dayofweek.trim());
    
    const isScheduleMatching = (
      doesOverlap(scheduleTimeInMinutes, scheduleTimeOutMinutes, slotTime) ||
      (scheduleTimeInMinutes >= slotTime && scheduleTimeInMinutes <= slotTime + 60) || // Check if start time or end time is within slot
      (scheduleTimeOutMinutes > slotTime && scheduleTimeOutMinutes <= slotTime + 60)  // Check if end time is within slot
    ) && schedule.dayofweek.trim() === day.trim();
    
    console.log('Is Schedule Matching:', isScheduleMatching);
    
    return isScheduleMatching;
  });

  return filteredSchedules;
};

// Function to check if a time slot is within a schedule's time frame
const isSlotWithinSchedule = (slotTime, scheduleTimeIn, scheduleTimeOut) => {
  const slotMinutes = convertTimeToMinutes(slotTime);
  const scheduleTimeInMinutes = convertTimeToMinutes(scheduleTimeIn);
  const scheduleTimeOutMinutes = convertTimeToMinutes(scheduleTimeOut);

  return slotMinutes >= scheduleTimeInMinutes && slotMinutes < scheduleTimeOutMinutes;
};




// Helper function to convert time to minutes for easier comparison
const convertTimeToMinutes = (time) => {
  console.log('Input Time:', time);
  // Split time into hours, minutes, and AM/PM if applicable
  const [timePart, ampm] = time.split(' ');
  const [hours, minutes] = timePart.split(':').map(Number);
  console.log('Hours:', hours);
  console.log('Minutes:', minutes);
  // Convert 12-hour format to 24-hour format
  const adjustedHours = (ampm === 'PM' && hours !== 12) ? hours + 12 : hours;
  const totalMinutes = adjustedHours * 60 + minutes;
  console.log('Total Minutes:', totalMinutes);
  return totalMinutes;
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchSchedules();
  fetchLabs();
});

// Helper function to get highlight class based on status
const getHighlightClass = (status) => {
  switch (status) {
    case 'Badiang':
      return 'highlighted1';
    case 'Cloribel':
      return 'highlighted2';
    case 'Balaman':
      return 'highlighted3';
    default:
      return status ? 'highlighted' : '';
  }
};

// Helper function to get status color based on status
const getStatusColor = (status) => {
  return status === 'Occupied' ? 'red' : 'green';
};
</script>


<template>
  <div>
    <NavigationBar />
    <div class="homecontainer">
      <div class="itemscontainer">
        <h2 class="schedhead">SCHEDULE</h2>
        <div class="schedhome">
          <table class="sched-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <!-- Loop through each time slot -->
              <tr v-for="time in timeSlots" :key="time">
                <td>{{ time }}</td>
                <!-- Loop through each day of the week -->
                <td v-for="day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']" :key="day">
                  <!-- Filter schedules for the current time and day -->
                  <div v-if="getSchedulesForTimeDay(time, day).length > 0">
                    <!-- Loop through filtered schedules -->
                    <template v-for="schedule in getSchedulesForTimeDay(time, day)" :key="schedule.schedule_id">
                      <!-- Display schedule information -->
                      <div>{{ schedule.userid }} - {{ schedule.timein }} to {{ schedule.timeout }}</div>
                    </template>
                  </div>
                  <!-- If no schedules are found, display an empty div -->
                  <div v-else></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="divider"></div>
        <div class="laboratory">
          <p class="headir">LABORATORY ROOM</p>
          <table class="labtable">
            <tbody>
              <!-- Loop through each lab -->
              <tr v-for="lab in labs" :key="lab.labstatusid">
                <td>
                  <div class="lab-content">
                    <!-- Display lab information -->
                    <div class="labroom">{{ lab.labname }}</div>
                    <div class="status" :style="{ color: getStatusColor(lab.occupied ? 'Occupied' : 'Available') }">
                      {{ lab.occupied ? 'Occupied' : 'Available' }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>







<style>
.homecontainer {
  position: fixed;
  top: 0;
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
.highlighted, .highlighted3 {
  background-color: yellow;
}
.highlighted1 {
  background-color: greenyellow;
}
.highlighted2 {
  background-color: green;
}
.itemscontainer {
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
.schedhome {
  position: relative;
  background-color: white;
  left: 30px;
  top: 30px;
  color: white;
  height: 82%;
  width: 45%;
  overflow-y: auto;
}
.sched-table {
  color: black;
  border: none;
  grid: none;
  font-size: 90%;
  width: 100%;
}
.rec {
  color: red;
  font-weight: bold;
}
.schedcontainer {
  position: relative;
  height: 650px;
  width: 500px;
  left: 10%;
  top: 4%;
  color: white;
}
.divider {
  position: relative;
  height: 90%;
  width: 5px;
  bottom: 85%;
  background-color: black;
  left: 49%;
}
.schedhead {
  color: black;
  font-weight: bold;
  position: relative;
  left: 17%;
  top: 3%;
}
.homeheader {
  position: relative;
  left: 43%;
  height: 50px;
  width: 300px;
  top: 60px;
  background-color: #ff69b4;
  color: white;
  border-radius: 20px;
  margin-top: 20px;
}
.phead {
  position: relative;
  top: 15px;
  left: 70px;
  font-weight: 20%;
}
.headir {
  color: black;
  font-weight: bold;
  font-size: 30px;
  position: relative;
  left: 90px;
  bottom: 100px;
}
.laboratory {
  position: relative;
  height: 300px;
  width: 500px;
  left: 55%;
  bottom: 160%;
  color: white;
  font-size: 70%;
}
.lab-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;
  font-size: medium;
}
.labroom {
  height: 50px;
  width: 200px;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 14px;
}
.laboratory .labtable {
  border-collapse: separate;
  border-spacing: 1px;
}
.laboratory .labtable th,
.laboratory .labtable td {
  border: none;
  padding: 5px;
}
.status {
  position: relative;
  bottom: 10px;
  font-weight: bold;
}
.labtable {
  position: relative;
  bottom: 15%;
}
/* Media query for smaller screens */
@media only screen and (max-width: 1500px) {
  .schedcontainer {
    left: 5%;
    width: 90%;
  }
  .lab-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .headir {
    font-weight: bold;
    position: relative;
    left: 10px;
    bottom: 100px;
    word-wrap: break-word;
   
  }
}
</style>