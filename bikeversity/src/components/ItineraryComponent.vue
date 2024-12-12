<template>
    <div>
      <h1>Itinerary </h1>
      <SpinnerComponent/>
    </div>

  </template>
  
  <script>
import SpinnerComponent from './SpinnerComponent.vue';

  export default {
      name: 'ItineraryComponent',
      components: {
        SpinnerComponent
      }
  }
  </script>
  
  <style>
  </style>