<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h2>Categories Table</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>{{ category.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

const categories = [
  { id: 1, name: "Allowance", description: "From Parents" },
  { id: 2, name: "Donation", description: "From Friends" },
];

</script>
