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





           
            <div class="labrec"> 
                <p>LABORATORY RECORD</p>
            </div>
            
        </div>
        
        <div class="divider">

        </div>

        <div class="laboratory">
    <h2 class="headir">LABORATOasdsadsaRY ROOM</h2>
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
  
</template>
<style>
.homecontainer {
    position: fixed;
    top: 96px; /* Set the top position to the height of the navigation bar */
    left: 0;
    width: 100%;
    overflow: hidden;
    height: calc(100% - 96px); /* Adjusted to cover the remaining height */
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1; /* Adjust the value to be less than the dropdown z-index */
  }
  .schedhome{
    position: relative;
    background-color: white;
    left: 130px;
    top: 50px;
    color: white;
    height: 615px;
    width: 600px;
    
  }
  .sched-table{
    color: black;
    border: none;
    grid: none;
  }
  .labrec p{
    position: relative;
    top: 12px;
    left: 27px;
  }

  .labrec{
    position: relative;
    height: 50px;
    width: 250px;
    background-color: #ff69b4;
    border-radius: 10px;
    font-weight: bold;
    top: 20px;
    left: 28%;
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
    height: 650px;
    width: 10px;
    bottom: 70%;
    background-color: white;
    left: 49%;
  }
  .schedhead{
    color: #ff69b4;
    font-weight: bold;
    position: relative;
    left: 17%;
    top: 5%;
    
  }
  .homeheader{
    position:relative;
    left: 41%;
    height: 50px;
    width: 300px;
    top: 20px;
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
    color: #ff69b4;
    font-weight: bold;
    position: relative;
    left: 80px;
    bottom: 50px;
    
  }
  .laboratory {
  position: relative;
  height: 300px;
  width: 500px;
  left: 60%;
  bottom: 145%;
  color: white;
}

.lab-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.labroom {
  height: 50px;
  width: 200px;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
}


.laboratory .labtable {
  border-collapse: separate;
  border-spacing: 1px; /* Adjust the spacing as needed */
}

.laboratory .labtable th,
.laboratory .labtable td {
  border: none; /* Remove borders */
  padding: 20px; /* Add padding to cells */
}
.status{
    position: relative;
    bottom: 10px;
    font-weight: bold;
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

