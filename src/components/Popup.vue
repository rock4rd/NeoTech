<template>
    <div class="popup">
      <div class="popup-content">
        <h3>Popup Content</h3>
        <p>Time In: {{ timein }}</p>
        <p>Time Out: {{ day }}</p>
        <p>participant: {{ participant }}</p>
        <p>timeout: {{ timeout }}</p>
        <!-- Add more content as needed -->
        <button @click="closePopup">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      time: String,
      day: String,
      participant: String,
      timeout: String,
    },
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style>
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
  