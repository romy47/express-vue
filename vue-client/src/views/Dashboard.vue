<script setup lang="ts">
import TollBooth from '@/components/TollBooth.vue'
</script>

<template>
  <div class="flex justify-between">
    <TollBooth :booth-count="1" :header="'Semi Trucks'"></TollBooth>
    <TollBooth :booth-count="2" :header="'Sedans and Suv'"></TollBooth>
    <TollBooth :booth-count="3" :header="'Sedans and Suv'"></TollBooth>
    <TollBooth :booth-count="4" :header="'Emergency Responders'"></TollBooth>
  </div>
</template>
