import { defineStore } from 'pinia'

export const useEvent = defineStore('event', {
  state: () => ({
    stages: [],
    currentlyPlaying: {
      cosmicmeadow: null,
      circuitgrounds: null,
      kineticfield: null,
      basspod: null,
      neongarden: null,
      wasteland: null,
      quantumvalley: null,
      stereobloom: null
    }
  }),

  actions: {
    setStages (payload) {
      this.stages = payload
    },

    setCurrentlyPlaying (payload) {
      this.currentlyPlaying[payload.stage] = payload.data?.artist || undefined
    }
  }
})
