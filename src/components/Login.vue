<template>
  <div class="background-container">
    <div class="container">
      <div class="header">
        <img src="/logo1.png" alt="logo">
      </div>

      <div class="user">
        <label for="username"><i class="bi bi-person"></i> USERNAME</label>
        <input type="text" class="userInput" id="username" name="username" v-model="username" @input="handleInput" required autocomplete="username">
      </div>

      <div class="pass">
        <label for="password"><i class="bi bi-lock"></i> PASSWORD</label>
        <input type="password" class="passInput" id="password" name="password" v-model="password" @input="handleInput" required autocomplete="current-password">
      </div>

      <div class="button">
        <button @click="attemptLogin" class="loginbtn">Login</button>
        <div class="guestbutton">
          <router-link to="userview">User/Guest</router-link>
        </div>
      </div>

      <div class="terms-checkbox">
        <input type="checkbox" class="termsCheckbox" v-model="agreedToTerms" id="termsCheckbox">
        <label for="termsCheckbox" class="termsLabel">I agree to the <a href="https://www.uic.edu.ph/terms-of-use/" target="_blank">Terms of Use</a> and <a href="https://www.uic.edu.ph/privacy-policy/" target="_blank">Privacy Policy</a> of the University of Immaculate Conception</label>
      </div>
    </div>

    <div class="helloworld">
      <h2 class="helloheader">Lab Control System</h2>
      <p>Welcome to Lab Control System</p>
      <p>Experience streamlined laboratory management with the Lab Control System, providing a user-friendly interface for efficient equipment control, experiment coordination, and data organization.</p>
    </div>
    </div>

   
    <div v-if="showPrompt" class="prompt show">
      <div class="prompt-content">
        <p>Please check and agree to the Terms of Use and Privacy Policy before proceeding.</p>
        <button @click="closePrompt">Close</button>
      </div>
    </div>

    <div v-if="showWrong" class="pass-prompt show">
      <div class="prompt-content">
        <p>Wrong password.</p>
        <button @click="closePrompt">Close</button>
      </div>
    </div>

    <div v-if="showUserPrompt" class="user-prompt show">
      <div class="prompt-content">
        <p>Username doesn't exist.</p>
        <button @click="closePrompt">Close</button>
      </div>
    </div>

    <div v-if="showSuccessPrompt" class="success-prompt show">
      <div class="prompt-content">
        <p>Login successful! Redirecting<span class="loading-dots-container">...</span></p>
      </div>
    </div>
 
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      agreedToTerms: false,
      showPrompt: false,
      showSuccessPrompt: false,
      showUserPrompt: false,
      showWrong: false
    };
  },
  methods: {
    closePrompt() {
      this.showPrompt = false;
      this.showWrong = false;
      this.showUserPrompt = false;
    },
    attemptLogin() {
  this.closePrompt(); // Close any open prompts

  if (!this.agreedToTerms) {
    this.showPrompt = true;
  } else {
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);

    axios.post('http://127.0.0.1:8000/api/users/login/', formData)
      .then(response => {
        if (response.status === 200) {
          console.log("Success");
          this.showSuccessPrompt = true;
          localStorage.setItem('username', this.username);
          console.log('Username stored in local storage:', localStorage.getItem('username'));
          setTimeout(() => {
            this.$router.push('/home'); // Redirect to home after successful login
          }, 5000);
       
        } else {
          console.log("Error");
          this.showWrong = true; // Show prompt for wrong password
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        if (error.response && error.response.status === 401) {
          this.showWrong = true; // Show prompt for wrong password
        } else {
          this.showUserPrompt = true; // Show prompt for non-existing username
        }
      });
  }
}
  }
}
</script>




<style>

@import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/uicbg.jpg') ;
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
  .success-overlay {
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001; /* Ensure it's above the original overlay */
}



.success-prompt h2 {
    color: #333;
}

.success-prompt p {
    margin-top: 30px;
}
.loading-dots-container {
  display: inline-block;
  width: 1em;
  text-align: left;
  font-size: 1.5em;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  animation: loadingAnimation 1.5s infinite;
}
.guestbutton{
  position: relative;
  left: 5%;
  top: 5px;
}

@keyframes loadingAnimation {
  0% {
    width: 0;
  }
  25% {
    width: 0.25em;
  }
  50% {
    width: 0.5em;
  }
  75% {
    width: 0.75em;
  }
  100% {
    width: 1em;
  }
}

.success-prompt button {
    padding: 10px 20px;
    background: #0F9D58; /* Change the background color as needed */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    left: 46.5%
}
.prompt-content {
    padding: 15px;
    text-align: center;
  }


  .pass-prompt {
    background: #EEF1EF; /* Red background for wrong password */
    height: 18%;
    width: 20%;
  }
  .pass-prompt button{
    background: #800000; /* Red background for wrong password */
  }

  .user-prompt {
    background: #EEF1EF;
    height: 18%;
    width: 20%;
  }
  .user-prompt button{
    background: #800000;
    
  }

  .success-prompt {
    background: #EEF1EF; /* Green background for successful login */
    height: 18%;
    width: 20%;
    
  }
  .success-prompt button {
    background: black; /* Green background for successful login */
  }
  .prompt{
    background: #EEF1EF;
  }
  .prompt button{
    background: #800000;
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
  .prompt, .pass-prompt, .user-prompt, .success-prompt {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1001; /* Ensure it's above the original overlay */
  opacity: 0; /* Initially set to be transparent */
  transition: opacity 0.3s ease; /* Add a transition for opacity */
}
.prompt button, .pass-prompt button, .user-prompt button, .success-prompt button {
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 25px auto; /* Add this line to center the button */
  opacity: 0; /* Initially set to be transparent */
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Add box-shadow to the transition */

}
.prompt button:hover
.pass-prompt button:hover
.user-prompt button:hover
.success-prompt button:hover {
  opacity: 0.8;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Add a box-shadow for the aura effect */
}
.prompt.show, .pass-prompt.show, .user-prompt.show, .success-prompt.show,
.prompt.show button, .pass-prompt.show button, .user-prompt.show button, .success-prompt.show button {
  opacity: 1; /* Make it fully visible when the "show" class is applied */
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
height: 20%;
width: 15%;
  position: relative;
  font-weight: bold;
  left: 2%;
    background-color: #f3efef; /* Change the background color as needed */
justify-content: center;
align-items: center;
    color: black; /* Change the text color as needed */
    padding: 8px 15px;
    border: solid black 1px;
    border-radius: 10px;
    cursor: pointer;
}

.loginbtn:hover {
    background-color: #2980b9 ; /* Change the hover background color as needed */
}
/*.terms-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  background-color: none;
  width: 97%;
  
 top: 30%;
  
 
  border: none;
  padding: 10px;  Adjust padding as needed 
}*/

.terms-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  background-color: none;
  width: 97%;
  left: 10%;
  top: 30%;
  border: none;
  padding: 10px;  

}

.termsCheckbox {
  position: relative;
  top: 5px; /* Adjust as needed for vertical alignment */
  width: auto;
  margin-right: 10px;
  margin-left: 1px;
 /* top: 8px;*/
}

.terms-checkbox label {
  margin-left: 5px;
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

@media screen and (max-width: 1200px) {
  .container {
    width: 90%; /* Adjust as needed */
    right: auto; /* Remove right positioning */
  }
  .user, .pass {
    left: 10px; /* Adjust as needed */
    top: 70px; /* Adjust as needed */
  }
  .header img {
    left: 0; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    width: 50px; /* Adjust as needed */
  }
  .button {
    top: 100px; /* Adjust as needed */
    left: 0; /* Adjust as needed */
    text-align: center;
    
  }
  .loginbtn {
    top: 0px;
    left: 150px;
    text-align: center;
  }
  .helloworld {
    bottom: 85%;
    text-align: center;
  }
}
</style>