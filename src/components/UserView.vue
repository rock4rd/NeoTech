

<template>
  

    
    <div class="usercontainer">
        <div class="userheader">
            <h1>LABORATORY SCHEDULE</h1>
        </div>
       
      <div class="user-wrapper">
          <div  v-if="isSliderOnLeft" class="labschedule1" :class="{ 'transitioned': isTransitioned }"> 
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
          <div class="slider" :class="{ 'transitioned': isTransitioned }">

              <h2 class="slidertext">LABORATORY SCHEDULE</h2>
              <div class="sliderline"> </div>
          </div>

        </a>

        <div class="bookwrap">

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
 
  
</template>

<style>
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
}
.user-wrapper{
  position: relative;
    top: 10%;
    left: 5%;
    height: 82%;
    width: 90%;
    border-radius: 34.56px 34.56px 0px 0px;
border: 1px solid var(--LIght, #F5347F);
background: rgba(255, 255, 255, 0.41);
box-shadow: 15px 15px 10px 0px #F5347F;
}
.labschedule1{
  height: 100%;
  width: 70%;
  display: flex; /* Use flexbox to align items horizontally */
 
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
border-radius: 0px 34.56px 0px 0px;
border-left: 2px solid var(--LIght, #F5347F);

background: rgba(245, 52, 127, 0.36);

box-shadow: -1.44px 0px 5.76px 0px rgba(255, 255, 255, 0.15) inset, 0px 11.52px 8.64px 0px rgba(0, 0, 0, 0.05);
backdrop-filter: blur(71.99995422363281px);



  
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
  background-color: white;
  bottom: 100%;
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
.slider-container {
  cursor: pointer;
}

.transitioned {
  transition: transform 0.5s ease-in-out;
}

/* Add this style for the transition effect */
.slider.transitioned {
  transform: translateX(-100%);
}

.labschedule1.transitioned {
  transform: translateX(-100%);
}

.tlabsched.transitioned {
  transform: translateX(0);
}



</style>

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
        LOGOUT: "john.doe@example.com",
      },
      isSliderOnLeft: true, // Initial position of the slider
      isTransitioned: false, // Flag for transition effect
    };
  },
  methods: {
    toggleLayout() {
      // Toggle the position of the slider
      this.isSliderOnLeft = !this.isSliderOnLeft;
      this.isTransitioned = true; // Set the flag to enable transition effect

      // Reset the transition flag after the transition duration
      setTimeout(() => {
        this.isTransitioned = false;
      }, 500);
    },
  },
};
</script>
