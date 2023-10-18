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
      <div>
        <div>
          <h2>Add Category</h2>
          <form @submit.prevent="addCategory">
            <div class="form-group">
              <label for="addName">Name:</label>
              <input v-model="newCategory.name" id="addName" class="form-control" />
            </div>
            <div class="form-group">
              <label for="addDescription">Description:</label>
              <input v-model="newCategory.description" id="addDescription" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  { id: 1, name: "Allowance", description: "From Parents" },
  { id: 2, name: "Donation", description: "From Friends" },
]);

const newCategory = ref({ name: "", description: "" });

const addCategory = () => {
  if (newCategory.value.name && newCategory.value.description) {
    const newId = categories.value.length > 0 ? Math.max(...categories.value.map((c) => c.id)) + 1 : 1;
    categories.value.push({ id: newId, ...newCategory.value });
    newCategory.value = { name: "", description: "" };
  }
}
</script>
