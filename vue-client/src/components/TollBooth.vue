<script setup lang="ts">
defineProps<{
  boothId: number
  header: string
}>()
</script>
<template>
  <div class="mt-6 w-full px-3">
    <div class="bg-green-700 text-white rounded-lg p-1 text-center">
      <div class="border-white border-4 rounded-lg p-4">
        <h2 class="text-4xl font-bold">{{ boothId }}</h2>
        <p class="text-3xl mt-5">{{ header }}</p>
      </div>
    </div>
  </div>
</template>
