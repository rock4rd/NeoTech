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
            <a href="/booking" class="nav-link">
              <b class="bi bi-bell navicon"></b> 
            </a>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/profile' }">
            <a href="/profile" class="nav-link">
              <b class="bi bi-person navicon"></b>
            </a>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/history' }">
            <a href="/history" class="nav-link">
              <b class="bi bi-archive navicon"></b> 
            </a>
          </li>
          <li @click="toggleMode" class="nav-item">
                  <a href="#" class="nav-link">
                    <b class="bi" :class="{ 'bi-sun sunicon': isDarkMode, 'bi-moon moonicon': !isDarkMode }"></b>
                   
                   
                  </a>
          </li>

              <li class="nav-item">
                <a href="/" class="nav-link"> 
                  <b class="bi bi-box-arrow-right dropdownicon"></b>
                </a>
              </li>

            </ul>
       
            </div>
         
      </div>
    
  </nav>

</template>

<style>
/* Custom styles for the sidebar */
.sidebar {
  height: 50%;
  width: 3%; /* Adjust the width as needed */
  position: relative;
  top: 300px;
  left: 5%;
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
.sunicon {
  font-size: 23px;
}
.moonicon{
  font-size: 23px;
}

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
</style>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  data() {
    return {
      showDropdown: false,
      isDarkMode: true,
      activeItem: '', // Track the active item
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    },
      setActiveItem(item) {
      this.activeItem = item;
    },
  },
  
};
</script>
```

