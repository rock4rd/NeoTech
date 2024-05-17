<template>
  <div class="popup">
    <div class="popup-content">
      <h3>Schedule Details</h3>
      <p>Day: {{ day }}</p>
      <p>Time In: {{ time }}</p>
      <p>Time Out: {{ timeout }}</p>
      <p>Participant: {{ participant }}</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    timeout: {
      type: String,
      required: true,
    },
    participant: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
