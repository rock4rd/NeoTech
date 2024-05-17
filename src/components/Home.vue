<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import NavigationBar from './NavigationBar.vue';
import Popup from './Popup.vue';

const schedules = ref([]);
const labs = ref([]);
const isPopupVisible = ref(false);
const selectedTime = ref('');
const selectedDay = ref('');
const selectedTimeIn = ref('');
const selectedTimeOut = ref('');
const selectedParticipant = ref('');
const selectedLab = ref('');
const selectedYearSection = ref('');
const currentTime = ref('');
const currentDay = ref('');

const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 NN', 'Lunch Break',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];
const YearnSection = [
  'BSCS-1', 'BSCS-2', 'BSCS-3', 'BSIT-1A', 'BSIT-1B', 'BSIT-2A', 'BSIT-2B', 'BSIT-3A', 'BSIT-3B'
];

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
  const schedule = schedules.value.find(schedule => {
    const scheduleTimeInMinutes = convertTimeToMinutes(schedule.timein);
    const scheduleTimeOutMinutes = convertTimeToMinutes(schedule.timeout);
    const slotTime = convertTimeToMinutes(time);
    const slotEnd = slotTime + 60;
    return (
      scheduleTimeInMinutes < slotEnd &&
      scheduleTimeOutMinutes >= slotTime &&
      schedule.dayofweek.trim() === day.trim()
    );
  });

  if (schedule) {
    selectedTime.value = time;
    selectedDay.value = day;
    selectedTimeIn.value = schedule.timein;
    selectedTimeOut.value = schedule.timeout;
    selectedParticipant.value = schedule.participant;
    isPopupVisible.value = true;
  }
};

const hidePopup = () => {
  isPopupVisible.value = false;
};

const fetchSchedules = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/schedule/');
    schedules.value = response.data.map(schedule => ({
      ...schedule,
      timein: formatTime(schedule.timein),
      timeout: formatTime(schedule.timeout),
    }));
    updateLabStatus();
  } catch (error) {
    console.error('Error fetching schedules:', error.response ? error.response.data : error.message);
  }
};

const fetchLabs = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/labstatus/');
    labs.value = response.data;
    updateLabStatus();
  } catch (error) {
    console.error('Error fetching labs:', error.response ? error.response.data : error.message);
  }
};

const hasSchedulesForTimeDayAndRoom = (time, day, roomNumber, yearSection) => {
  const slotTime = convertTimeToMinutes(time);

  return schedules.value.some(schedule => {
    const scheduleTimeInMinutes = convertTimeToMinutes(schedule.timein);
    const scheduleTimeOutMinutes = convertTimeToMinutes(schedule.timeout);

    const isMatchingRoom = roomNumber === 'All' || schedule.roomnumber === roomNumber;
    const isMatchingYearSection = yearSection === '' || schedule.YearSection === yearSection;

    return (
      isMatchingRoom &&
      isMatchingYearSection &&
      scheduleTimeInMinutes < slotTime + 60 &&
      scheduleTimeOutMinutes >= slotTime &&
      schedule.dayofweek.trim() === day.trim()
    );
  });
};

const convertTimeToMinutes = (time) => {
  const [timePart, ampm] = time.split(' ');
  const [hours, minutes] = timePart.split(':').map(Number);
  const adjustedHours = (ampm === 'PM' && hours !== 12) ? hours + 12 : (ampm === 'AM' && hours === 12) ? 0 : hours;
  return adjustedHours * 60 + minutes;
};

const updateCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  currentTime.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  currentDay.value = now.toLocaleDateString('en-US', { weekday: 'long' });
};

const updateLabStatus = () => {
  updateCurrentTime();

  labs.value.forEach(lab => {
    const isOccupied = schedules.value.some(schedule => {
      const scheduleTimeInMinutes = convertTimeToMinutes(schedule.timein);
      const scheduleTimeOutMinutes = convertTimeToMinutes(schedule.timeout);
      const currentTimeInMinutes = convertTimeToMinutes(currentTime.value);
      
      return (
        scheduleTimeInMinutes <= currentTimeInMinutes &&
        scheduleTimeOutMinutes > currentTimeInMinutes &&
        schedule.dayofweek.trim() === currentDay.value.trim() &&
        schedule.roomnumber === lab.labname
      );
    });
    lab.occupied = isOccupied;
  });
};

onMounted(() => {
  fetchSchedules();
  fetchLabs();
  setInterval(updateLabStatus, 30000); // Update lab status every 30 sec
});

watch([currentTime, currentDay], updateLabStatus);

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
        <h4 class="reactiveheader">{{ selectedYearSection }}</h4>
        <div class="lab-filter">
          <label for="lab-select">Select Laboratory:</label>
          <select id="lab-select" v-model="selectedLab">
            <option value="All">All</option>
            <option v-for="lab in labs" :value="lab.labname" :key="lab.labstatusid">{{ lab.labname }}</option>
          </select>
        </div>
        <div class="yrNsectionfilter">
          <label for="section-select">Select Year & Section:</label>
          <select id="section-select" v-model="selectedYearSection">
            <option v-for="section in YearnSection" :value="section" :key="section">{{ section }}</option>
          </select>
        </div>
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
              <tr v-for="time in timeSlots" :key="time">
                <td class="timeslottd">{{ time }}</td>
                <td v-for="day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']" :key="day"
                    :class="{ [getHighlightClassForDay(day)]: hasSchedulesForTimeDayAndRoom(time, day, selectedLab, selectedYearSection) }"
                    @click="showPopup(time, day)">
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
              <tr v-for="lab in labs" :key="lab.labstatusid">
                <td>
                  <div class="lab-content">
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
    <Popup
      v-if="isPopupVisible"
      :time="selectedTimeIn"
      :day="selectedDay"
      :timeout="selectedTimeOut"
      :participant="selectedParticipant"
      @close="hidePopup"
    />
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
  height: 87.5%;
  width: 80%;
  border-radius: 34.56px 34.56px 0px 0px;
  border: 1px solid var(--LIght, #F5347F);
  background: rgba(255, 255, 255, 0.41);
  box-shadow: 15px 15px 10px 0px #F5347F;
}
.manual-time{
  position: relative;
  bottom: 20%
}
.schedhome {
  position: relative;
  background-color: white;
  left: 30px;
  bottom: 5%;
  color: white;
  height: 82%;
  width: 55%;
  overflow-y: auto;
}
.lab-filter{
  position: relative;
  left: 3.5%;
}
.yrNsectionfilter{
  position: relative;
  left: 44%;
  bottom: 8%;
}
.lab-filter, .yrNsectionfilter {
  margin-bottom: 5px;
}

.lab-filter label, .yrNsectionfilter label {
  font-weight: bold;
  color: #333;
}

.lab-filter select, .yrNsectionfilter select {
  display: block;
  width: 10%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.lab-filter select:focus, .yrNsectionfilter select:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.sched-table {
  position:relative;
  color: black;
  border: black;
  grid: black;
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
  
  height: 95%;
  width: 5px;
  bottom: 97.5%;
  background-color: black;
  left: 60%;
}
.schedhead {
  color: black;
  font-weight: bold;
  position: relative;
  left: 23%;
  top: 3%;
}
.sched-table td, .sched-table th {
  padding: 10px; /* Add padding inside cells */
}
tr .timeslottd{
  margin-bottom: 10px;
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
  left: 65%;
  bottom: 175%;
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
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 50px;
  width: 200px;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: 200px;
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
.reactiveheader{
  position: relative;
  top: 2%;
  left: 26%;
  font-size: 20px;
  font-weight: bold;
  color:black;
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


