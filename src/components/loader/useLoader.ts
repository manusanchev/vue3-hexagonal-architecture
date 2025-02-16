import { ref } from 'vue'

export const useLoader = () => {
  const isLoading = ref(false)

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  return {
    startLoading,
    stopLoading,
    isLoading
  }
}
