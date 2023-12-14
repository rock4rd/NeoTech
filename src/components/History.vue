<script setup>
import NavigationBar from './NavigationBar.vue'
</script>

<template>
  <div>
    <NavigationBar />
    
    <div class="hiscontainer">
        <div class="hisheader">
            <h1>HISTORY</h1>
        </div>
        
      <div class="sched-wrapper">
        <div class="scheditems">
    
    <table class="schedtable">
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
        <tr>
          <td style="font-weight: bold;">Morning</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7:00 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>8:00 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9:00 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10:00 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Afternoon</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1:00 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2:00 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3:00 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4:00 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5:00 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6:00 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <!-- Add more rows for different times -->
      </tbody>
    </table>
  </div>
      

      <div class="calendar">
    <div class="month">
      <button @click="toggleDropdown" class="monthbot">{{ selectedMonth }} <b class="bi bi-caret-down-square-fill"></b></button>
      <ul v-if="showDropdown" class="month-dropdown">
        <li v-for="month in months" :key="month" @click="selectMonth(month)">
          <a href="#">{{ month }}</a>
        </li>
      </ul>
    </div>

    <div class="calendartable">
      <table>
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in calendar" :key="week">
            <td v-for="day in week" :key="day" :class="{ 'selected': day === selectedDay }">
              {{ day }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <button ></button>
</div>
    </div>
  </div>
</template>

<style>
.hiscontainer {
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

table {
      border-collapse: collapse;
      width: 100%;
      
    }
   

    th, td {
      border: none;
      padding: 8px;
      text-align: center;
      
    }
    
    th {
     font-weight: bold;
    }
.scheditems{
    position:relative;
    top: 20px;
}
.calendar{
  position: relative;
  height: 500px;
  width: 350px;
  left: 70%;
  bottom: 55%;
  

}
.calendartable{
height: 50%;
width: 350px;
margin-top: 35px;
background-color: #FDB0C0;
border: solid 1px black;
font-size: 70%;
}
.monthbot{
  position: relative;
  left: 50px;
}
.month {
  display: flex;
  align-items: center;
  position: relative;
  background: white;
  height: 50px;
  width: 200px;
  left: 70px;
 
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

.button b {
  margin-left: 5px;
}

.month-dropdown {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  white-space: nowrap;
}

.month-dropdown li {
  padding: 8px;
  border-bottom: 1px solid #ccc;
}

.month-dropdown li:last-child {
  border-bottom: none;
}

.month-dropdown a {
  
  text-decoration: none;
  color: #333;
  display: block;
}

/* Optional: Style the selected month differently */
.month-dropdown li.selected {
  background-color: #ff69b4; /* Example color for selected month */
  color: #fff;
}
</style>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      showDropdown: false,
      selectedMonth: moment().format('MMMM'), // Default to the current month
      selectedDay: moment().format('D'), // Default to the current day
      months: moment.months(),
      daysOfWeek: moment.weekdaysShort(),
      calendar: [],
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectMonth(month) {
      this.selectedMonth = month;
      this.showDropdown = false;
      this.generateCalendar();
    },
    generateCalendar() {
      const firstDayOfMonth = moment(`${this.selectedMonth} 1, 2023`, 'MMMM D, YYYY');
      const daysInMonth = firstDayOfMonth.daysInMonth();

      let calendar = [];
      let week = [];
      for (let i = 1; i <= daysInMonth; i++) {
        const currentDay = moment(`${this.selectedMonth} ${i}, 2023`, 'MMMM D, YYYY');
        week.push(currentDay.format('D'));

        if (currentDay.weekday() === 6 || i === daysInMonth) {
          calendar.push([...week]);
          week = [];
        }
      }

      this.calendar = calendar;
    },
  },
  mounted() {
    this.generateCalendar();
  },
};
</script>