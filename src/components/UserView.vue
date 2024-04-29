  <script setup>
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref()
</script>
  
  <template>
    <div>
      <div class="usercontainer">
        <div class="userheader">
          <h1>LAB CONTROL SYSTEM</h1>
        </div>

        <div class="user-wrapper">
          <div
          
            class="labschedule1"
            :class="{ 'transitioned': isTransitioned }"
            :style="{ left: isSliderOnLeft ? '0%' : '100%', transition: 'left 1s ease-in-out' }"
            v-if="isSliderOnLeft"
            
          >
          <div class="tpic">
                  <b class="bi bi-person logot"></b>
                  
                </div>
                <h2 class="tname">Teachers Name</h2>
                <div class="tcred">
                  <table class="tcredtable">
                        <tbody>
                          <tr v-for="(value, label) in userInfo" :key="label">
                            <td class="tlabel">{{ label }} :</td>
                            <td class="titem">
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                  <div class="tlabsched">
                      <h2 class="tschedhead"> LABORATORY SCHEDULE</h2>
          <table class="sched-table">
      <thead>
        <tr>
          
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

          <a href="" @click.prevent="toggleLayout" class="slider-container">
            <div class="slider" :class="{ 'transitioned': isTransitioned }" :style="{ transform: isSliderOnLeft ? 'translateX(0%)' : 'translateX(-234%)' }">
              <h2 class="slidertext">{{sliderText}}</h2>
              <div class="sliderline"> </div>
            </div>
          </a>

  <div class="bookwrap" :style="{ transform: isSliderOnLeft ? 'translateX(-20%)' : 'translateX(0%)', opacity: isSliderOnLeft ? '0' : '1', visibility: isSliderOnLeft ? 'hidden' : 'visible' }" ref="bookwrap"> 


    <div class="page1" v-if="currentStep === 1">      
  <div class="bookcalendar" >
      <div class="calcircle">
        <b class="bi bi-calendar4 calendaricon"></b>
      </div>

      <h3>Select the date from the calendar</h3>
      
      <div class="calendarcontainer">
        <div>
      <label for="datepicker" class="labelpick">Select Date:</label>
      <Datepicker
        v-model="selectedDate"
        :type="'month'"
        :first-day-of-week="1"
        :format="dateFormat"
        @selected="handleDateSelection"
        id="datepicker"
      ></Datepicker>

      
      
        </div>

    </div>
        <div class="caltable">
          <table>
      <thead>
        <tr>
          <th v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek">{{ dayOfWeek }}</th>
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

  <div class="booktime">
      <div class="timecircle">
        <b class="bi bi-clock clockicon"></b>
      </div>

      <h3>Select time of your reservation</h3>

      <div class="timepickercontainer">
      <div class="timepicker">
        <label for="timeInPicker" class="labelpick">Time In:</label>
<input
  id="timeInPicker"
  type="time"
  v-model="selectedTimeIn"
  class="custom-timepicker"
/>

<label for="timeOutPicker" class="labelpick">Time Out:</label>
<input
  id="timeOutPicker"
  type="time"
  v-model="selectedTimeOut"
  class="custom-timepicker"
/>

      </div>

      <div>
        <p class="labeltime">Time In: {{ selectedTimeIn }}</p>
        <p class="labeltime">Time Out: {{ selectedTimeOut }}</p>
      </div>
    </div>
  </div>

  <div class="bookinfo">
      <div class="infocircle">
        <b class="bi bi-person-workspace personicon"></b>
      </div>

      <h3>User Information</h3>
    <div class="userinform">
      <div class="name-inputs">
        <label for="firstName" class="labelinput1">First Name:</label>
<input
  id="firstName"
  type="text"
  v-model="firstName"
  class="name-input"
  placeholder="Enter your first name"
/>

<label for="lastName" class="labelinput1">Last Name:</label>
<input
  id="lastName"
  type="text"
  v-model="lastName"
  class="name-input"
  placeholder="Enter your last name"
/>

<label for="purpose" class="labelinput1">Purpose:</label>
<input
  id="purpose"
  type="text"
  v-model="purpose"
  class="name-input"
  placeholder="Enter your purpose"
/>

      </div>
    </div>

  </div>

  <div class="next-cancel-buttons">
        
        <button class="back-button" @click="prevStep">Back <b class="bi bi-caret-left-fill buttonicons"></b></button>
        <button class="next-button" @click="validateAndNext">Next <b class="bi bi-caret-right-fill buttonicons"></b></button>

  </div>


  </div>
    <div class="page2" v-if="currentStep === 2">
      <h3>Almost Done.....</h3>
      <div class="reviewcircle">
          <b class="bi bi-flag-fill reviewicon"></b>
      </div>
            
              <h3>Review Your Information</h3>

            <div class="informations">
              <p>Selected DATE: {{ selectedDate }}</p>
              <p>Purpose: {{ purpose }}</p>
              <p>Time IN: {{ selectedTimeIn }}</p>
              <p>Time OUT: {{ selectedTimeOut }}</p>
              <p>First Name: {{firstName }}</p>
              <p>Last Name: {{ lastName }}</p>
            </div>
    <div class="submit-cancel-buttons">
        <button class="back-button" @click="prevStep">Back <b class="bi bi-caret-left-fill buttonicons"></b></button>
        <button class="submit-button" @click="submitStep">Submit <b class="bi bi-caret-right-fill buttonicons"></b></button>

    </div>   

    </div>

      <div class="page3" v-if="currentStep === 3">

        <h3>Successfully Booked!</h3>
            <div  class="checkcircle">
              <b class="bi bi-check-circle checkicon"></b>
            </div>

            <h3>Please wait for the confirmation from the Admin</h3>
              <div class="done-buttons">
              <button class="done-button" @click="submitBooking">Done <b class="bi bi-check2 checkicon2"></b></button>
              </div>

      </div>
      
      <div v-if="showSuccessPrompt" class="success-prompt show">
        <div class="prompt-content">
          <p> Redirecting<span class="loading-dots-container">...</span></p>
          
        </div>
      </div>

  </div>
            
          </div>
        </div>
      </div>

      <div class="container" id="container" :class="{ 'right-panel-active': !isSliderOnLeft }" >
        <div class="overlay overlay-left">
          <div class="overlay-panel" :style="{ transform: isSliderOnLeft ? 'translateX(0%)' : 'translateX(100%)' }" ref="labschedule1">

            <div class="tpic">
                  <b class="bi bi-person logot"></b>
                  
                </div>
                <h2 class="tname">Teachers Name</h2>
                <div class="tcred">
                  <table class="tcredtable">
                        <tbody>
                          <tr v-for="(value, label) in userInfo" :key="label">
                            <td class="tlabel">{{ label }} :</td>
                            <td class="titem">
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                  <div class="tlabsched">
                      <h2 class="tschedhead"> LABORATORY SCHEDULE</h2>
          <table class="sched-table">
      <thead>
        <tr>
          
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
                </div>
              </div>
    <div class="bookwrap" :style="{ transform: isSliderOnLeft ? 'translateX(-100%)' : 'translateX(-100%)' }">

            

  <div class="bookcalendar">
      <div class="calcircle">
        <b class="bi bi-calendar4 calendaricon"></b>
      </div>

      <h3>Select the date from the calendar</h3>

  </div>

  <div class="booktime">
      <div class="timecircle">
        <b class="bi bi-clock clockicon"></b>
      </div>

      <h3>Select time of your reservation</h3>

  </div>

  <div class="bookinfo">
      <div class="infocircle">
        <b class="bi bi-person-workspace personicon"></b>
      </div>

      <h3>Name</h3>

  </div>

  </div>
          
          
    
  </template>

<script>
import MyCalendar from './MyCalendar.vue';
import Timepicker from 'vue3-timepicker';
import axios from 'axios';
import { ref } from 'vue';

export default {
  components: {
    MyCalendar,
    Timepicker,
  },
  data() {
    return {
      userInfo: {
        EMAIL: "John Doe",
        SUBJECT: "JD",
        TIME: "25",
        SCHEDULE: "john_doe",
        ROOM: "123456",
        LOGIN: "Developer",
        LOGOUT: "john.doe@example.com",
      },
      isSliderOnLeft: true,
      isTransitioned: false,
      delayDuration: 100,
      sliderText: "LABORATORY SCHEDULE",
      selectedDate: new Date(),
      dateFormat: "yyyy-MM-dd",
      daysOfWeek: [""],
      selectedDay: "",
      selectedTimeIn: "",
      selectedTimeOut: "",
      purpose: "",
      firstName: "",
      lastName: "",
      currentStep: 1,
      countdown: 5,
    };
  },
  computed: {
    calendar() {
      return [[]]; // Replace with your actual calendar data
    },
  },
  methods: {
    toggleLayout() {
      if (this.isSliderOnLeft) {
        this.animateSlider("100%", "translateX(0)", "visible", "BOOKING PAGE");
      } else {
        this.animateSlider("-100%", "translateX(0)", "visible", "LABORATORY SCHEDULE");
      }
    },
    animateSlider(slideValue, wrapTransform, wrapVisibility, text) {
      this.$refs.labschedule1.style.transition = "transform 0.5s ease-in-out";
      this.$refs.labschedule1.style.transform = `translateX(${slideValue})`;

      setTimeout(() => {
        this.isSliderOnLeft = !this.isSliderOnLeft;
        this.$refs.bookwrap.style.transform = wrapTransform;
        this.$refs.bookwrap.style.opacity = "1";
        this.$refs.bookwrap.style.visibility = wrapVisibility;
        this.isTransitioned = true;
        this.sliderText = text;
      }, this.delayDuration);
    },
    async submitBooking() { 
    if (!this.selectedDate || !this.selectedTimeIn || !this.selectedTimeOut || !this.firstName || !this.lastName || !this.purpose) {
        alert('Please fill in all the fields.');
        return;
    }

    // Format selectedDate to match server's expected format (YYYY-MM-DD)
    const formattedDate = this.selectedDate.toISOString().split('T')[0];

    const bookingData = {
        date: formattedDate,
        timeIn: this.selectedTimeIn,
        timeOut: this.selectedTimeOut,
        firstName: this.firstName,
        lastName: this.lastName,
        purpose: this.purpose,
    };

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/bookings/', bookingData);
        console.log('Booking submitted successfully:', response.data);
        // Optionally, perform any additional actions upon successful submission
    } catch (error) {
        console.error('Error submitting booking:', error);
        // Optionally, display an error message to the user
    }
},
    startRedirecting() {
      this.showSuccessPrompt.value = true;
      this.countdown = 5;

      const countdownInterval = setInterval(() => {
        this.countdown--;

        if (this.countdown === 0) {
          clearInterval(countdownInterval);
          this.redirectlogin();
        }
      }, 1000);
    },
    redirectlogin() {
      setTimeout(() => {
        this.$router.push('/');
      }, 5000);
    },
    nextStep() {
      this.currentStep++;
    },
    submitStep() {
      this.currentStep++;
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    validateAndNext() {
      if (!this.selectedDate || !this.selectedTimeIn || !this.selectedTimeOut || !this.firstName || !this.lastName || !this.purpose) {
        alert('Please fill in all the fields.');
        return;
      }
      this.nextStep();
    },
  }
};
</script>


  <style>
  /* Your existing styles go here */
  .usercontainer html, body{
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .usercontainer {
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
  transition: transform 0.5s ease-in-out;
  }
  .user-wrapper{
  position: relative;
    top: 10%;
    left: 5%;
    height: 82%;
    width: 90%;
    border-radius: 34px;
  border: 1px solid var(--LIght, #F5347F);
  background: rgba(255, 255, 255, 0.41);
  box-shadow: 15px 15px 10px 0px #F5347F;
  }
  .page2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; 
    width: 100%;
    position: relative;
    bottom: 10%;
  }
  .page3{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; 
    width: 100%;
    position: relative;
    bottom: 15%;
  }



  .labelpick {
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .buttonicons{
    font-size: 20px;
    margin-left: 10%;
  }
  .labeltime{
    position: relative;
    top: 10%;
    left: 10%;
    font-weight: bold;
    margin-top: 13%;
    margin-right: 20%;
    display: inline-block;
  }

  .custom-timepicker {
    width: 120px;
    height: 30px;
    font-size: 14px;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }
  .next-cancel-buttons {
    
    width: 50%;
    height: 7%;
    position: fixed;
    bottom: 20px;
    left: 52%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .submit-cancel-buttons{
    width: 50%;
    height: 7%;
    position: fixed;
    bottom: 20px;
    left: 52%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .done-buttons{
    width: 50%;
    height: 10%;
    position: fixed;
    bottom: 20px;
    left: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .page1 .next-button,
  .page1 .back-button {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    width: 50%;
    cursor: pointer;
    margin-right: 10%;
    align-items: center; /* Center text vertically */
    justify-content: center; /* Center text horizontally */
  }
  .page2 .submit-button,
  .page2 .back-button {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    width: 50%;
    cursor: pointer;
    margin-right: 10%;
    align-items: center; /* Center text vertically */
    justify-content: center; /* Center text horizontally */
  }


  .page1 .next-button {
  border-radius: 20px;
  background: #FB5A7C;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
  .page3 .done-button{
  border-radius: 20px;
  background: #FB5A7C;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 10px;
    font-size: 18px;
    font-weight: bold;
    width: 50%;
    cursor: pointer;
    margin-right: 10%;
    align-items: center; /* Center text vertically */
    justify-content: center; /* Center text horizontally */
  }
  .page2 .submit-button {
  border-radius: 20px;
  background: #FB5A7C;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }

  .back-button {
  border-radius: 20px;
  background: #FDB0C0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }

  .selected-times {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .labtime {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .labschedule1{
  height: 100%;
  width: 70%;
  display: flex; /* Use flexbox to align items horizontally */
  transition: transform 0.5s ease-in-out;


  }
  .timepicker{
    height: 20%;
    width: 90%;
    position: relative;
    top: 10%;
    left: 5%;
    margin-top: -10%;
  }
  .custom-timepicker {
    /* Add your custom styles here */
    width: 100%; /* Adjust width as needed */
    margin-top: 5px; /* Adjust margin as needed */
    /* Add any other styles to match the color and appearance of your other components */
  }
  .slider{
    bottom: 0;
    height: 100%;
    position: absolute;
    right: 0;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 34px;
    border-left: 2px solid var(--LIght, #F5347F);
    background: rgba(245, 52, 127, 0.36);
    backdrop-filter: blur(71.99995422363281px);
    transform: translateX(0); /* Add initial transform */
    transition: transform 0.5s ease-in-out; /* Add the transition property for smooth movement */
    z-index: 1000;
  }
  .sliderline{
    position: relative;
    top: 40%;
    left: 6.5%;
    height: 2%;
    width: 85%;
    border-radius: 20px;
    background: #FFFDFD;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

  }
  .slidertext{
    color: #DD2A70;
    text-align: center;
    font-family: Roboto;
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .logot{
  font-size: 120px;
  position: relative;
  left: 10%;
  bottom: 5px;
  }
  .tcred {
  position:fixed ;
  top: 50%;

  margin-left: 20%;
  }
  .timepickercontainer{
    height: 100%;
    width:100%;
    position: relative;
    top: 6%;
  }
  .datepicker{
    outline: none;
  }
  .page2 h3{
    justify-content: center;
    align-items: center;
  }
  .page3 h3{
    justify-content: center;
    align-items: center;

  }

  .tcredtable {
  color: black;

  }
  .tlabsched{
  position: relative;
  top: 10%;
  left: 20%;
  }

  .tlabel {
  margin-right: 10px; /* Adjust the margin as needed */
  font-weight: 20%;
  }

  .titem {
  margin-bottom: 10px; /* Adjust the margin as needed */
  }
  .bookwrap{
  height: 100%;
  width: 70%;
  display: flex; /* Use flexbox to align items horizontally */
  justify-content: space-between;
  position: relative;
  transition: transform 0.5s ease-in-out;
  left: 30%;

  }
  .page1{
  height: 100%;
  width: 100%;
  display: flex; /* Use flexbox to align items horizontally */
  justify-content: space-between;
  position: relative;
  transition: transform 0.5s ease-in-out;

  }
  body {
    margin: 0;
    padding: 0;
  }
  .name-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }

  .labelinput1{
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .name-input {
    width: 70%;
    height: 35px;
    font-size: 14px;
    padding: 5px;
    margin-bottom: 50px;
    border: 1px solid black;
    border-radius: 5px;
  }
  .userinform{
    height: 100%;
    width: 100%;
    position: relative;
    top: 15%;
  }
  .bookwrap h3{
  position: relative;
  top: 8%;
  color: #DD2A70;
  font-weight: bold;

  }
  .tname{
  color: var(--LIght, #F5347F);
  text-align: center;
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 900;
  position:fixed ; /* Set the position to absolute */
  top: 41%;
  left: 9%;
  bottom: 0; /* Align to the bottom of the containing element (tpic) */
  }

  .informations{
    position: relative;
    top: 10%;
    right: 20%;
    font-size: 20px;
    padding: 2%;
    font-weight: bold;
  
  }
  .tschedhead{
  color: var(--LIght, #F5347F);
  text-align: center;
  position: relative;
  margin-right: 1%;
  left: 30%;
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 900;

  margin-bottom: 10%;
  }
  .checkicon{
    font-size: 200px;
    justify-content: center;

  }
  .tpic{
  position: relative;
    min-width: 150px;
    max-width: 150px;
    top: 10%;
    left: 10%;
    height: 20%;
    width: 15%;
    border-radius: 20px;
  background: var(--Soft-Grey, #DFDFDF);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

  }
  .calendarcontainer{
    height: 40%;
    width: 90%;
    position: relative;
    top: 10%;
    left: 5%;
  }
  .tcred{
  position: fixed;
  top: 50%;
  margin-left: 4%;
  }
  .tcredtable{
  color: black;
  }
  .bookcalendar,
  .booktime,
  .bookinfo {
  flex: 1; /* Distribute available space equally among the three divs */
  height: 100%; /* Set height to 100% */
  box-sizing: border-box; /* Include padding and border in the total width/height */
  text-align: center; /* Center text */
  margin-right: 2px;
  margin-left: 1px;
  }
  .selected {
    background-color: #f5347f; /* Highlight selected day with a different background color */
    color: white; /* Set text color for better visibility */
  }
  .reviewcircle{
  height: 25%;
  width: 20%;
  border-radius: 50%;
  border: solid black 1px;
  position: relative;
  margin-top: 5%;
  margin-bottom: 1%;
  top: 5%;
  background-color:  #FDB0C0;
  stroke-width: 2px;
  stroke: #495E57;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  }
  .checkcircle{
    height: 30%;
  width: 20%;
  border-radius: 50%;
  border: solid black 1px;
  position: relative;
  margin-top: 5%;
  margin-bottom: 1%;
  top: 5%;
  background-color:  #FDB0C0;
  stroke-width: 2px;
  stroke: #495E57;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  }

  .calcircle,
  .timecircle,
  .infocircle {
  height: 20%;
  width: 50%;
  border-radius: 50%;
  border: solid black 1px;
  position: relative;
  left: 20%;
  top: 5%;
  background-color:  #FDB0C0;
  stroke-width: 2px;
  stroke: #495E57;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  }

  /* Example styling for the circle icons (adjust as needed) */
  .calcircle b,
  .timecircle b,
  .infocircle b,
  .reviewcircle b,
  .checkcircle b {
  font-size: 60px; /* Adjust font size as needed */
  color:#f7526e;


  }



  .userheader {
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


  /* Add styles for the transition effect on labschedule1 and bookwrap */
  .labschedule1,
  .bookwrap {
    transition: transform 0.5s ease-in-out;
    animation-timing-function: ease-in-out;
  }
  .container.right-panel-active .slider {
    animation: slideOut 0.5s forwards;
  }
  .container.right-panel-active .container {
    animation: slideOut 0.5s forwards;
  }
  .container.right-panel-active .overlay-left {
    animation: slideIn 0.5s forwards;
  }

  .container.right-panel-active .overlay-container {
    animation: slideIn 0.5s forwards;
  }


  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media only screen and (max-width: 768px){
  .tlabel {
    margin-left: 50px;
  }
  .tname {
    margin-left: 10px;
    object-position: center;
  }
  }

  /* Add a new class for the collapsed state of the sidebar */
  .collapsed {
    width: 0;
  }

  /* Use a media query to set the styles for the collapsed state */
  @media screen and (max-width: 1300px) {
    .slider {
      width: 0;
    }

    .user-wrapper {
      width: 94%;
    }

    .bookwrap {
      width: 100%;
      left: 0;
    }

    .container.right-panel-active {
      transform: translateX(0);
    }
  }



  </style>
