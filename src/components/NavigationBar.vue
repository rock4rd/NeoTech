<!-- NavigationBar.vue -->
<template>
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/category">Category</router-link>
      <router-link to="/about">About</router-link>
    </nav> -->

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
      <!-- Container wrapper -->
      <div class="container-fluid">


        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="/">
            <img src="/logo.png" alt="">
          </a>
          <label for="navbar-brand" class="logoname">NEOTECH</label>
          <!-- Left links -->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/home"><b class="bi bi-house-door navicon"></b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/booking"> <b class="bi bi-bell navicon"></b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile"><b class="bi bi-person navicon"></b></a>
            </li>

            <li class="nav-link">
    <div class="dropdown" @click.stop>
        <button @click="toggleDropdown"><b class="bi bi-three-dots-vertical navicon"></b></button>
        <!-- Use v-if to conditionally render the dropdown based on a boolean data property -->
        <ul v-if="showDropdown" style="left: 0;">
            <!-- Dropdown content goes here -->
            <li @click="toggleMode">
          <a href="#">
            <b class="bi" :class="{ 'bi-sun': isDarkMode, 'bi-moon': !isDarkMode }"></b>
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </a>
        </li>
            <li><a href="/history"> <b class="bi bi-clock-history dropdownicon"></b> History</a></li>
            <li><a href="/"> <b class="bi bi-box-arrow-right dropdownicon"></b> Logout</a></li>
        </ul>
    </div>
</li>
            </ul>
            
         
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </template>

  <style>
  /* Custom styles for the navbar */
  .container-fluid {
    margin-top: -12px;
    height: 100px;
   background-color: #ff69b4;
   align-items: end;
   
  }
  .navicon{
    font-size: 25px;
  }
  .dropdownicon{
    font-size: 20px;
    font-weight: bolder;
  }
  .nav-link {
    position: relative;
    right: 100px;
    color: white;
    margin: 30px;
    background-color: transparent;
    list-style: none;
  }
  .navbar-brand{
  position: relative;
  bottom: 50px;
  right: 25px;
  transition: transform 0.3s ease-in-out;
 
}

.navbar-brand img:hover {
  transform: scale(1.1);
}
.logoname{
  font-weight: 20%;
  color: white;
  font-size: 20px;
}
        .nav-link button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 16px;
            color: white;
        }

        .dropdown {
  position: relative;
  display: inline-block;
  z-index: 1000 !important;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000 !important;
  background-color: #ff69b4;
  border: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap; /* Prevent line breaks */
  min-width: 150px; /* Set a minimum width */
}
        .dropdown li {
            padding: 8px;
            font-weight: bold;
            z-index: 1000 !important;
        }

        .dropdown li:last-child {
            border-bottom: none;
            z-index: 1000 !important;
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
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};

</script>