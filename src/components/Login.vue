<script setup>

</script>
<template>


<div class="background-container">

   
  
      <div class="container" >
           <div class="header">
              
            <img src="/logo1.png" alt="logo">
    
            </div>

        <div class="user">
            <label for="userInput"><i class="bi bi-person"></i>USERNAME</label>
            <input type="text" class="userInput" v-model="username" @input="handleInput">
        </div>

        <div class="pass">
            <label for="passInput">PASSWORD</label>
            <input type="password" class="passInput" v-model="password" @input="handleInput">
        </div>

        <div class="button">
          
            <button @click="login" class="loginbtn">Login</button>

            

        </div>
        <div class="terms-checkbox">

<input type="checkbox" class="termsCheckbox" v-model="agreedToTerms">
<label for="termsCheckbox" class="termsLabel">I agree to the <a href="https://www.uic.edu.ph/terms-of-use/" target="_blank ">Terms of Use</a> and <a href="https://www.uic.edu.ph/privacy-policy/" target="_blank">Privacy Policy </a> of the University of Immaculate Conception</label>

</div>
   </div>

   <div class="helloworld">

    <h2 class="helloheader">Lab Control System</h2>

        <p>Welcome to Lab Control System</p>
        <p>Experience streamlined laboratory management with the Lab Control System, providing a user-friendly interface for efficient equipment control, experiment coordination, and data organization.

        </p>

   </div>

   
   
   <link rel="icon" type="image/png" :href="faviconPath" />

</div>


</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      agreedToTerms: false,
      faviconPath: "path/to/your/favicon.png", // Update with your favicon path
    };
  },
  methods: {
    handleInput() {
      // Handle input changes if needed
    },
    login() {
      if (!this.username || this.username !== "admin") {
        alert("Wrong username");
      } else if (!this.password || this.password !== "admin") {
        alert("Wrong password");
      } else if (!this.agreedToTerms) {
        alert("Please accept the terms and agreements");
      } else {
        alert("Login successful!");
        // Redirect or perform other actions for a successful login

        this.$router.push({ name: "home" });

      }
    },
  },
};
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./uicbg.jpg') ;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.background-container .container {
  position: relative;
  top: 30px;
  right: 18%;
  height: 90%;
  width: 50%;
  box-shadow: 1px solid black;
  background-color:lightgray 50% / cover no-repeat;
  
  box-shadow: -1.44px 0px 5.76px 0px rgba(255, 255, 255, 0.15) inset, 0px 11.52px 8.64px 0px rgba(0, 0, 0, 0.05);
  border-radius: 34px;
  backdrop-filter: blur(71.99995422363281px);
  
}
  .user, .pass{
  position: relative;
  align-items: center;
  left: 100px;
  top:100px;
  margin-top: 30px;
  }
  
  .container label{
    
    display: inline;
    margin-bottom: 5px;
    margin-right: 20px;
    color: black;
   

  }
  input{
  width: 50%;
  padding: 8px;
  height: 60    px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px;
  opacity: 100%;
  
  }

img{
    position: relative;
    height: 100px;
    left: 50px;
    top: 50px;
}
.container .header img{
  position: relative;
  left: 30%;
height: 80%;
width: 40%;

}
.header h1{
    color: #FF69B4;
    position: relative;
    left: 150px;
    bottom: 20px;
}
.button{
position: relative;
top: 200px;
left: 350px;
}
.loginbtn {
    background-color: #f3efef; /* Change the background color as needed */
    color: black; /* Change the text color as needed */
    padding: 8px 15px;
    border: solid black 1px;
    border-radius: 10px;
    cursor: pointer;
}

.loginbtn:hover {
    background-color: #2980b9 ; /* Change the hover background color as needed */
}
.terms-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  background-color: none;
  width: 850px;
  
 top: 30%;
  
 
  border: none;
  padding: 10px; /* Adjust padding as needed */
}

.termsCheckbox {
  margin-right: 5px;
  position: relative;
  top: 2px; /* Adjust as needed for vertical alignment */
  right: 50px;
  top: 8px;
}

.terms-checkbox label {
  position: relative;
  margin: 0; /* Remove default margin */
  right: 80px;
  white-space: nowrap;
}
.helloworld{
  position: relative;
  left: 65%;
  bottom: 60%;
  height: 30%;
  width: 30%;
  
}
.helloworld h2{
  position: relative;
  left: 5.5%;
  bottom: 15%;
color: #DD2A70;
font-family: Suez One;
font-size: 55px;
font-style: normal;
font-weight: bold;
line-height: normal;

}
.helloworld p{
  color: black;
margin-bottom: 6%;
text-align: center;
font-family: Suez One;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
font-variant: all-small-caps;
}
</style>