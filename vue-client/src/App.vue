<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import { onMounted } from 'vue'
import { useBoothStore } from './stores/BoothStore'

const store = useBoothStore()

const fetchBooths = async () => {
  await store.fetchBooths()
}

onMounted(() => {
  fetchBooths()
})
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped></style>
