import * as boothService from '@/services/BoothService'
import type { IBooth } from '@/types/booth'
import { defineStore } from 'pinia'

export const useBoothStore = defineStore('booth', {
  state: () => ({ booths: [] as IBooth[] }),
  getters: {
    allBooths: (state) => state.booths,
  },
  actions: {
    async fetchBooths() {
      try {
        const booths = await boothService.getAllBooths()
        this.booths = booths
      } catch (error) {
        console.error('Failed to fetch booths', error)
      }
    },
  },
})
