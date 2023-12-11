<script setup>
import NavigationBar from './NavigationBar.vue'
</script>
<template>
    <div>
    <NavigationBar />
    <div class="homecontainer">
        <div class="homeheader">
            <p class="phead">LIVE DATE & TIME <b class="bi bi-record2 rec"></b></p>
        </div>
        <div class="itemscontainer">
        <h2 class="schedhead">SCHEDULE</h2>

        <div class="schedhome">
           

           <table class="sched-table">
      <thead>
        <tr>
          <th>Timesad</th>
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
        
        <div class="divider">

        </div>

        <div class="laboratory">
    <h2 class="headir">LABORATORY ROOM</h2>
    <table class="labtable">
      <thead></thead>
      <tbody>
        <tr v-for="lab in labs" :key="lab.id">
          <td>
            <div class="lab-content">
              <div class="labroom">{{ lab.roomNumber }}</div>
              <div class="status">{{ lab.status }}</div>
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
  .itemscontainer{
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
  .schedhome{
    position: relative;
    background-color: white;
    left: 30px;
    top: 30px;
    color: white;
    height: 82%;
    width: 45%;
  
    
  overflow-y: auto; /* Add a scrollbar when the content exceeds the height */
    
  }
  .sched-table{
    color: black;
    border: none;
    grid: none;
    
    font-size: 50%; /* Adjust the font size as needed */
  width: 100%; /* Set the width to 100% or a specific value */
  }
  
  .rec{
    color:red;
    font-weight: bold;
    
  }
  .schedcontainer{
    position: relative;
    height: 650px;
    width: 500px;
    left: 10%;
    top: 4%;
    color: white;
  }
  .divider{
    position: relative;
    height: 90%;
    width: 5px;
    bottom: 85%;
    background-color: black;
    left: 49%;
  }
  .schedhead{
    color: black;
    font-weight: bold;
    position: relative;
    left: 17%;
    top: 3%;
    
  }
  .homeheader{
    position:relative;
    left: 43%;
    height: 50px;
    width: 300px;
    top: 60px;
    background-color: #ff69b4 ;
    color: white;
    border-radius: 20px;
    margin-top: 20px;
  }
  .phead{
    position: relative;
    top: 15px;
    left: 70px;
    font-weight: 20%;
  }
  .headir{
    color: black;
    font-weight: bold;
    position: relative;
    left: 80px;
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
  border-spacing: 1px; /* Adjust the spacing as needed */
}

.laboratory .labtable th,
.laboratory .labtable td {
  border: none; /* Remove borders */
  padding: 5px; /* Add padding to cells */
}
.status{
    position: relative;
    bottom: 10px;
    font-weight: bold;
}
.labtable{
  position: relative;
  bottom: 15%;
  
}



  

</style>

<script>
export default {
  data() {
    return {
      labs: [
        { id: 1, roomNumber: "201", status: "Occupied" },
        { id: 2, roomNumber: "202", status: "Occupied" },
        { id: 3, roomNumber: "203", status: "Available" },
        { id: 4, roomNumber: "204", status: "Available" },
        { id: 1, roomNumber: "205", status: "Available" },
        
      ],
    };
  },
  methods: {
    updateStatusColor() {
      this.$nextTick(() => {
        const statusElements = this.$el.querySelectorAll(".labtable .status");

        statusElements.forEach((statusElement) => {
          const status = statusElement.textContent.trim();

          // Change the text color based on the status
          if (status === "Occupied") {
            statusElement.style.color = "red";
          } else if (status === "Available") {
            statusElement.style.color = "green";
          }
        });
      });
    },
  },
  mounted() {
    this.updateStatusColor();
  },
};
</script>

