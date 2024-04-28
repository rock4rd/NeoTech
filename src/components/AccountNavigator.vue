<script setup>
import NavigationBar from './NavigationBar.vue'
</script>
<template>
   <NavigationBar />
    
    <div class="accountnavigatorcontainer">
        <div class="accountnavigatorheader">
            <h1 class="accountnavigatorhead">ACCOUNT NAVIGATOR</h1>
        </div>
       <div class="accountnavigatorcontainer">
     <table class="accountnavigatortable">
      <thead>
        <tr class="headerz">
        </tr>
    </thead>
    <div class="search-bar">
      <label for="nameSearch">Name Search:</label>
      <input type="text" id="nameSearch" name="nameSearch" v-model="nameSearch" placeholder="Enter name">
      <label for="idSearch">Id Search:</label>
      <input type="text" id="idSearch" name="idSearch" v-model="idSearch" placeholder="Enter ID">
      <button @click="search">Search</button>
    </div>
</table>
</div>
</div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        nameSearch: '',
        idSearch: '',
      }
    },
    methods: {
      search() {
        // Implement your search logic here
        console.log('Searching for:', this.nameSearch, this.idSearch);
        // You can emit an event here to notify the parent component about the search terms
        // this.$emit('search', this.nameSearch, this.idSearch);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  .search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-right: 10%;
    margin-left: 10%; 
  }
  
  .search-bar label {
    margin-right: 1rem;
  }
  
  .search-bar input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 1rem;
  }
  
.search-bar {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.search-bar label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.search-bar input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 1rem;
}

.search-bar button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
<!--   </script> -->