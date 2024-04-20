<template>
    <div>
      <div>
        <label for="month">Month:</label>
        <select v-model="selectedMonth" @change="updateCalendar">
          <option v-for="(month, index) in months" :key="index" :value="index + 1">
            {{ month }}
          </option>
        </select>
      </div>
      <div>
        <label for="year">Year:</label>
        <input type="number" v-model="selectedYear" @input="updateCalendar" />
      </div>
      <datepicker
        v-model="selectedDate"
        :type="'month'"
        :first-day-of-week="1"
        :format="dateFormat"
      ></datepicker>
    </div>
  </template>
  
  <script>
  import Datepicker from 'vue3-datepicker';
  
  
  export default {
    components: {
      Datepicker,
    },
    data() {
      return {
        selectedDate: new Date(),
        selectedMonth: new Date().getMonth() + 1,
        selectedYear: new Date().getFullYear(),
        dateFormat: 'yyyy-MM',
        months: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ],
      };
    },
    methods: {
      updateCalendar() {
        this.selectedDate = new Date(this.selectedYear, this.selectedMonth - 1);
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  /* Media query for smaller screens */
@media only screen and (max-width: 768px) {
  .bookingcontainer {
    /* Adjust the styles for smaller screens */
    left: 5%;
    width: 90%;
  }
}
  </style>
  