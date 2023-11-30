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
    
    <table>
      <thead>
        <tr>
          <th>Timasdsade</th>
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

    </div>
  </div>
</template>

<style>
.hiscontainer {
  position: absolute;
  
  top: 96px; /* Set the top position to the height of the navigation bar */
  left: 0;
  width: 100%;
  height: calc(100% - 96px); /* Adjusted to cover the remaining height */
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hisheader {
  color: #F5347F;
  position: relative;
  left: 50px;
  top: 50px;
}
.sched-wrapper{
    position: relative;
    top: 80px;
    left: 80px;
    height: 80%;
    width: 65%;
    background-color: white;
}

table {
      border-collapse: collapse;
      width: 100%;
      
    }
   

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
      
    }
    
    th {
      background-color: #f2f2f2;
    }
.scheditems{
    position:relative;
    top: 20px;
}
.calendar{
  position: relative;
  height: 500px;
  width: 350px;
  left: 75%;
  bottom: 70%;
  

}
.calendartable{
height: 270px;
width: 350px;
margin-top: 50px;
background-color: #FDB0C0;
border: solid 1px black;
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
  background-color: #fff;
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