export const state = () => ({
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
})

export const mutations = {
  setCurrentlyPlaying (state, payload) {
    state.currentlyPlaying[payload.stage] = payload.data?.artist || undefined
  }
}
