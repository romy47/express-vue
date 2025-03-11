<script setup lang="ts">
import TollBooth from '@/components/TollBooth.vue'
import { useBoothStore } from '@/stores/BoothStore'
const store = useBoothStore()
</script>

<template>
  <div class="flex justify-between">
    <TollBooth
      :booth-id="booth.boothId"
      :header="booth.header"
      v-for="booth in store.allBooths"
    ></TollBooth>
  </div>
</template>
