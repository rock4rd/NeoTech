<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Import NavigationBar component
import NavigationBar from './NavigationBar.vue';
import Popup from './Popup.vue';


// Define reactive variables
const schedules = ref([]);
const labs = ref([]);
const isPopupVisible = ref(false);
const selectedTime = ref(''); // Define selectedTime here
const selectedDay = ref('');

// Define time slots
const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 NN',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

// Helper function to format time
const formatTime = (ptTime) => {
  const seconds = parseInt(ptTime.replace('PT', '').replace('S', ''), 10);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};
const togglePopup = () => {
  isPopupVisible.value = !isPopupVisible.value;
};
const showPopup = (time, day) => {
  console.log("Clicked Time:", time);
  console.log("Clicked Day:", day);
  // Check if the clicked cell is highlighted
  if (hasSchedulesForTimeDay(time, day)) {
    selectedTime.value = time;
    selectedDay.value = day;
    isPopupVisible.value = true;
  }


  // Check if the schedule exists and if the cell is highlighted
  if (schedule && hasSchedulesForTimeDay(time, day)) {
    // Extract timein, timeout, and participant from the schedule
    const { timein, timeout, participant } = schedule;
    selectedTime.value = timein;
    selectedDay.value = day;
    selectedParticipant.value = participant; // Assuming you have a ref for participant
    isPopupVisible.value = true;
  }
};




// Function to hide pop-up
const hidePopup = () => {
  isPopupVisible.value = false;
};

// Function to fetch schedules
const fetchSchedules = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/schedule/');
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

// Function to check if there are schedules for a specific time and day
const hasSchedulesForTimeDay = (time, day) => {
  const slotTime = convertTimeToMinutes(time);

  const doesOverlap = (scheduleTimeInMinutes, scheduleTimeOutMinutes, slotTime) => {
    const slotEnd = slotTime + 60;
    return (scheduleTimeInMinutes < slotEnd && scheduleTimeOutMinutes >= slotTime);
  };

  return schedules.value.some(schedule => {
    console.log("Schedule Day:", schedule.dayofweek.trim());
    console.log("Selected Day:", day.trim());
    const scheduleTimeInMinutes = convertTimeToMinutes(schedule.timein);
    const scheduleTimeOutMinutes = convertTimeToMinutes(schedule.timeout);
    return doesOverlap(scheduleTimeInMinutes, scheduleTimeOutMinutes, slotTime) && schedule.dayofweek.trim() === day.trim();
  });
};




// Helper function to convert time to minutes for easier comparison
const convertTimeToMinutes = (time) => {
  const [timePart, ampm] = time.split(' ');
  const [hours, minutes] = timePart.split(':').map(Number);
  const adjustedHours = (ampm === 'PM' && hours !== 12) ? hours + 12 : (ampm === 'AM' && hours === 12) ? 0 : hours;
  return adjustedHours * 60 + minutes;
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchSchedules();
  fetchLabs();
});

// Helper function to get highlight class based on day
const getHighlightClassForDay = (day) => {
  switch (day) {
    case 'Monday':
      return 'highlighted-monday';
    case 'Tuesday':
      return 'highlighted-tuesday';
    case 'Wednesday':
      return 'highlighted-wednesday';
    case 'Thursday':
      return 'highlighted-thursday';
    case 'Friday':
      return 'highlighted-friday';
    default:
      return '';
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
                <td v-for="day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']" :key="day"
                    :class="{ [getHighlightClassForDay(day)]: hasSchedulesForTimeDay(time, day) }"
                    @click="showPopup(time, day)">
                  <!-- Apply class conditionally based on schedules -->
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
    <!-- Pop-up component -->
    <Popup v-if="isPopupVisible" :time="selectedTime" :day="selectedDay" :timeout="selectedTimeOut" @close="hidePopup" />

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
.highlighted-monday {
  background-color: lightblue;
}
.highlighted-tuesday {
  background-color: lightgreen;
}
.highlighted-wednesday {
  background-color: lightcoral;
}
.highlighted-thursday {
  background-color: yellow;
}
.highlighted-friday {
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
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
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


