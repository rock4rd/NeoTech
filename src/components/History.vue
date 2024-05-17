<template>
  <div>
    <NavigationBar />
    <div class="hiscontainer">
      <div class="hisheader">
        <h1>HISTORY</h1>
      </div>
      <div class="sched-wrapper">
        <table class="history-table">
          <thead>
            <tr class="headerhistory">
              <th @click="toggleSort('Date')">Date</th> <!-- Added click event -->
              <th>Full Name</th>
              <th>Purpose</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in historyDataSorted" :key="item.HistoryID" class="historyitems">
              <td>{{ item.Date }}</td>
              <td>{{ item.FullName }}</td>
              <td>{{ item.Purpose }}</td>
              <td>{{ item.AdminFullName }}</td>
              <td :class="{'accepted': item.Action === 'Accepted', 'declined': item.Action === 'Declined'}">
                {{ item.Action }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from './NavigationBar.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const historyData = ref([]);

const sortConfig = ref({
  key: 'Date',
  ascending: true
});

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/bookings/history');
    historyData.value = response.data;
    console.log("Fetched history data:", response.data);
  } catch (error) {
    console.error('Error fetching history:', error);
  }
});

const historyDataSorted = computed(() => {
  const data = [...historyData.value];
  const key = sortConfig.value.key;
  const ascending = sortConfig.value.ascending;

  return data.sort((a, b) => {
    const comparison = a[key].localeCompare(b[key]);

    return ascending ? comparison : -comparison;
  });
});

const toggleSort = (key) => {
  if (sortConfig.value.key === key) {
    sortConfig.value.ascending = !sortConfig.value.ascending;
  } else {
    sortConfig.value.key = key;
    sortConfig.value.ascending = true;
  }
};
</script>

<style>
.hiscontainer {
  position: fixed;
  top: 0;
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

.hisheader {
  color: var(--Light, #F5347F);
  position: relative;
  top: 50px;
  left: 8%;
  font-family: Suez One;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.headerhistory th {
  font-size: 20px;
}
.historyitems td{
  position: relative;
  padding: 20px;
  top: 20px;
  
}

.sched-wrapper {
  aspect-ratio: 1.32;
  position: relative;
  top: 10%;
  left: 13%;
  height: 75%;
  width: 80%;
  border-radius: 34.56px 34.56px 0px 0px;
  border: 1px solid var(--Light, #F5347F);
  background: rgba(255, 255, 255, 0.41);
  box-shadow: 15px 15px 10px 0px #F5347F;
}

.history-table {
  position: relative;
  top: 13%;
  left: 3%;
  width: 95%;
  border-collapse: separate;
  border-spacing: 5px 1rem;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  padding: 5px 10px;
  display: flex;
  align-items: center;
}

.history-table th,
.history-table td {
  border: none;
  padding: 8px;
  text-align: left;
  font-weight: bold; /* Bold letters */
}

.history-table th {
  background-color: transparent; /* No background for table header */
}

.accepted {
  color: green;
}

.declined {
  color: red;
}
</style>
