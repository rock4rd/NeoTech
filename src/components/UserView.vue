<template>
  <div>
    <div class="usercontainer">
      <div class="userheader">
        <h1>LABORATORY SCHEDULE</h1>
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
export default {
  data() {
    return {
      userInfo: {
          EMAIL: "John Doe",
      SUBJECT: "JD",
      TIME: "25",
      SCHEDULE: "john_doe",
      ROOM: "123456",
      LOGIN: "Developer",
      LOGOUT: "john.doe@example.com",// ... (your existing user info data)
      },
      isSliderOnLeft: true, // Initial position of the slider
      isTransitioned: false, // Flag for transition effect
      delayDuration: 60, // Adjust the delay duration in milliseconds
      sliderText:"LABORATORY SCHEDULE",
    };
  },
  methods: {
    toggleLayout() {
      if (this.isSliderOnLeft) {
    // If the slider is on the left, move labschedule1 to the right
    this.$refs.labschedule1.style.transition = 'transform 0.5s ease-in-out';
    this.$refs.labschedule1.style.transform = 'translateX(100%)';

    // Wait for the transition to finish, then move bookwrap to the center
    setTimeout(() => {
      this.isSliderOnLeft = false;
      this.$refs.bookwrap.style.transform = 'translateX(0)';
      this.$refs.bookwrap.style.opacity = '1';
      this.$refs.bookwrap.style.visibility = 'visible';
      this.isTransitioned = true;
      this.sliderText = "BOOKING PAGE";
    }, this.delayDuration);
  } else {
    // If the slider is on the right, move bookwrap to the left
    this.$refs.bookwrap.style.transform = 'translateX(-100%)';
    this.$refs.bookwrap.style.opacity = '0';
    this.$refs.bookwrap.style.visibility = 'hidden';
    this.sliderText = "LABORATORY SCHEDULE";
    

    // Wait for the transition to finish, then move labschedule1 to the center
    setTimeout(() => {
      this.isSliderOnLeft = true;
      this.$refs.labschedule1.style.transition = 'transform 0.5s ease-in-out';
      this.$refs.labschedule1.style.transform = 'translateX(0)';
      this.isTransitioned = true;
    }, this.delayDuration);
  }
},
},
  };
</script>

<style>
/* Your existing styles go here */
.usercontainer {
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
.labschedule1{
height: 100%;
width: 70%;
display: flex; /* Use flexbox to align items horizontally */
transition: transform 0.5s ease-in-out;


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
left: 31.5%;
top: 10%;
}
.tcred {
position: relative;
top: 50%;
right: 45%;
}

.tcredtable {
color: black;

}
.tlabsched{
position: relative;
top: 10%;
right: 20%;
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
.bookwrap h3{
position: relative;
top: 12%;
color: #DD2A70;

}
.tname{
color: var(--LIght, #F5347F);
text-align: center;
font-family: Roboto;
font-size: 35px;
font-style: normal;
font-weight: 900;
line-height: normal;
position: relative; /* Set the position to absolute */
top: 37.5%;
right: 20%;
bottom: 0; /* Align to the bottom of the containing element (tpic) */
}
.tschedhead{
color: var(--LIght, #F5347F);
text-align: center;
position: relative;
left: 30%;
font-family: Roboto;
font-size: 35px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin-bottom: 10%;
}
.tpic{
height: 30%;
width: 30%;
position: relative;
top: 6%;
left: 4%;
border-radius: 20px;
background: var(--Soft-Grey, #DFDFDF);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

}
.tcred{
position: relative;
top: 50%;
right: 45%;
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
}

.calcircle,
.timecircle,
.infocircle {
height: 30%;
width: 60%;
border-radius: 50%;
border: solid black 1px;
position: relative;
left: 20%;
top: 10%;
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
.infocircle b {
font-size: 90px; /* Adjust font size as needed */
color:#FC6C85;

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
</style>
