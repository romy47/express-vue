<script setup lang="ts">
import { ref } from 'vue'
import * as boothService from '@/services/BoothService'
import { useBoothStore } from '@/stores/BoothStore'

const props = defineProps<{
  boothId: number
  header: string
}>()

const editedHeader = ref(props.header)
const store = useBoothStore()
// Toggle header edit mode
const isEditing = ref(false)

const toggleEdit = () => {
  isEditing.value = !isEditing.value
}

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  await boothService.updateBooth({
    boothId: props.boothId,
    header: editedHeader.value,
    isOpen: true,
  })
  store.fetchBooths()
  isEditing.value = false
}
</script>
<template>
  <div class="mt-6 w-full px-3">
    <div class="bg-green-700 text-white rounded-lg p-1 text-center">
      <div class="border-white border-4 rounded-lg p-4">
        <h2 class="text-4xl font-bold">{{ boothId }}</h2>
        <div class="flex justify-between mt-5">
          <div v-if="isEditing">
            <form @submit="handleSubmit">
              <input
                type="text"
                v-model="editedHeader"
                class="text-3xl p-2 border rounded mr-2"
                autofocus
              />
              <button type="submit" class="hidden"></button>
            </form>
          </div>
          <div v-else>
            <p class="text-3xl">{{ editedHeader }}</p>
          </div>
          <button @click="toggleEdit" class="bg-blue-500 text-white rounded p-3 h-fit">
            {{ isEditing ? 'Cancel' : 'Edit' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
