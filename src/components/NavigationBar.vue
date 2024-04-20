To change your navigation bar from a top landscape to a left portrait orientation, you'll need to update the styles and structure of your navigation bar. Here's a modified version of your code to achieve a left portrait navigation bar:

```html
<!-- NavigationBar.vue -->
<template>
  
    
  <nav class="navbar navbar-expand-lg navbar-light bg-light sidebar">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        

        <ul class="navbar-nav flex-column">
          <li class="nav-item" :class="{ active: $route.path === '/home' }">
            <router-link to="/home" class="nav-link">
              <b class="bi bi-house-door navicon"></b> 
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/booking' }">
            <router-link to="/booking" class="nav-link">
              <b class="bi bi-bell navicon"></b> 
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/profile' }">
            <router-link to="/profile" class="nav-link">
              <b class="bi bi-person navicon"></b>
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/history' }">
            <router-link to="/history" class="nav-link">
              <b class="bi bi-archive navicon"></b> 
            </router-link>

<!--           <li @click="toggleMode" class="nav-item">
                  <a href="#" class="nav-link">
                    <b class="bi" :class="{ '': isDarkMode, 'bi-moon moonicon': !isDarkMode }"></b>
                   bi-sun sunicon 
                   
                  </a>-->
          </li>

              <li class="nav-item">
                <button class="nav-link" @click="logout"> 
                  <b class="bi bi-box-arrow-right dropdownicon"></b>
                </button>
              </li>

            </ul>
       
            </div>
            <div v-if="showlogoutPrompt" class="logout-prompt show">
                <div class="prompt-content">
                  <p>Are you sure you want to logout?.</p>
                  <button @click="closePrompt">Cancel</button>
                  <button @click="confirmLogout">Yes</button>
                </div>
            </div>
         
      </div>
    
  </nav>

</template>

<style>
/* Custom styles for the sidebar */
.sidebar {
  height: 50%;
  min-width: 60px;
  max-width: 60px;
  width: 3%; /* Adjust the width as needed */
  position: relative;
  top: 300px;
  left: 5%;
  right: 5%;
  border-radius: 118.526px;
background: rgba(255, 255, 255, 0.55);
box-shadow: 3px 5px 3px 5px #F5347F;
  z-index: 1000;
}
.nav-item:hover {
  background-color: #f8f9fa; /* Change the background color as needed */
  border-radius: 30px; /* Add rounded corners for better visual appearance */
}

.navbar-brand {
  margin-bottom: 20px;
}
.nav-item{
  
position: relative;
right: 7%;
transition: background-color 0.3s ease;
cursor: pointer; /* Change cursor on hover for better usability */
  
}
.active {
  background-color: #F5347F66; /* Change the background color as needed */
  border-radius: 30px; /* Add rounded corners for better visual appearance */
  
  position: relative;
  
  transition: background-color 0.3s ease; /* Add smooth transition for background color */
}
/*.sunicon {
  font-size: 23px;
}
.moonicon{
  font-size: 23px;
}
*/

.nav-link {
  color: black;
  margin-bottom: 10px;
  display: block;
}

.navicon {
  font-size: 25px;
}

.dropdownicon {
  font-size: 20px;
  font-weight: bolder;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ff69b4;
  border: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  min-width: 150px;
}

.dropdown li {
  padding: 8px;
  font-weight: bold;
}

.dropdown li:last-child {
  border-bottom: none;
}

.dropdown a {
  text-decoration: none;
  color: #333;
  display: block;
}
.logout-prompt{
  height: 18%;
  width: 23%;
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
  transition: opacity 0.3s ease; /* Add a transition for opacity */
  background-color: #EEF1EF;
}
.logout-prompt button{
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #800000;
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Add box-shadow to the transition */
  
}
.logout-prompt button:first-child {
  margin-right: 10px;
}
.logout-prompt button:hover {
  opacity: 0.8;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Add a box-shadow for the aura effect */
  background-color: #f11010;
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

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import 'bootstrap-icons/font/bootstrap-icons.css';

const router = useRouter();

const showDropdown = ref(false);
//const isDarkMode = ref(true);
const activeItem = ref('');
const showlogoutPrompt = ref(false);

const closePrompt = () => {
  showlogoutPrompt.value = false;
};

const confirmLogout = () => {
  // Perform logout actions here, e.g., clear user session, etc.
  // Redirect to the login page
  router.push('/');
};

const logout = () => {
  showlogoutPrompt.value = true;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

/*const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value;
};*/

const setActiveItem = (item) => {
  activeItem.value = item;
};
</script>

