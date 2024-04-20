<script setup>
import NavigationBar from './NavigationBar.vue'
</script>

<template>
  <div>
    <NavigationBar />

    
    <div class="profcontainer">
        <div class="profheader">
            <h1>PROFILE</h1>
        </div>
       
      <div class="prof-wrapper">
        <div class="profilepic">
           <b class="bi bi-person proficon"></b>
        </div>

        <div class="credentials">
          <table class="credtable">
              <tbody>
                <tr v-for="(value, label) in userInfo" :key="label">
                  <td class="tablelabel">{{ label }}:</td>
                  <td class="tableitem">
                    <div :style="{ width: computeHighlightContainerWidth(value) }" class="highlight-container">{{ value }}</div>
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
.profcontainer {
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
}
.prof-wrapper{
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



.profheader {
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
.profilepic{
  position: relative;
  min-width: 150px;
  max-width: 150px;
  top: 20%;
  left: 10%;
  height: 20%;
  width: 15%;
  border-radius: 20px;
background: var(--Soft-Grey, #DFDFDF);
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
}
.proficon{
  position: relative;
  align-items: center;
  left: 20%;
  font-size: 100px;
}
.credentials{
  position: relative;
  left: 35%;
  bottom: 2%;
}
.credtable {
  width: 50%;
  border-collapse: collapse;
  margin-top: 20px;
}
.tablelabel{
  color: #B80048;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.tableitem {
  border: none;
  padding: 8px;
  text-align: left;

  @media only screen and (max-width: 768px) {
    padding: 5px; /* Adjust padding for smaller screens */
    font-size: 18px; /* Adjust font size for smaller screens */
  }
}
.highlight-container {
  height: 35px;
  border-radius: 11.853px;
  background: rgba(0, 0, 0, 0.14);
  box-shadow: 0px -1.185px 2.371px 0px rgba(255, 255, 255, 0.14) inset;
  overflow: hidden; /* Ensures the shadow is not cut off */
  display: inline-block; /* Allows the width to be based on content */
display: flex;
width: 633px;
height: 43px;
padding: 0px 11.853px 0px 9.482px;
align-items: center;
flex-shrink: 0;
}

/* Media query for smaller screens */
@media only screen and (max-width: 768px) {
  .bookingcontainer {
    /* Adjust the styles for smaller screens */
    left: 5%;
    width: 90%;
  }
}

</style>

<script>
export default {
  data() {
    return {
      userInfo: {
        Name: "John Doe",
        Alias: "JD",
        Age: "25",
        Username: "john_doe",
        ID: "123456",
        Position: "Developer",
        Email: "john.doe@example.com",
        Address: "123 Main St, Cityville"
      }
    };
  },
  methods: {
    computeHighlightContainerWidth(value) {
      
      const baseWidth = 150;
      const additionalWidthPerCharacter = 10;

      const calculatedWidth = baseWidth + value.length * additionalWidthPerCharacter;

      // Ensure the calculated width is not less than the base width
      return `${Math.max(baseWidth, calculatedWidth)}px`;
    },
  },
};

</script>
