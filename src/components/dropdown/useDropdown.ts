import { ref, type Ref, onMounted, onUnmounted } from 'vue'

// Global state to track all dropdown instances
const dropdownInstances: Map<string, Ref<boolean>> = new Map()

// Global keyboard event listener
let keyboardListenerAdded = false

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    dropdownInstances.forEach((instance) => {
      instance.value = false
    })
  }
}

const addGlobalKeyboardListener = () => {
  if (!keyboardListenerAdded) {
    document.addEventListener('keydown', handleKeydown)
    keyboardListenerAdded = true
  }
}

const removeGlobalKeyboardListener = () => {
  if (keyboardListenerAdded && dropdownInstances.size === 0) {
    document.removeEventListener('keydown', handleKeydown)
    keyboardListenerAdded = false
  }
}

export const useDropdown = (id?: string) => {
  // Generate unique ID if not provided
  const dropdownId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`

  // Create reactive state for this dropdown
  const isOpen = ref(false)

  // Register this dropdown instance and add keyboard listener
  dropdownInstances.set(dropdownId, isOpen)
  addGlobalKeyboardListener()

  const closeAllDropdowns = () => {
    dropdownInstances.forEach((instance) => {
      instance.value = false
    })
  }

  const toggleDropdown = () => {
    if (!isOpen.value) {
      // Close all other dropdowns before opening this one
      closeAllDropdowns()
      isOpen.value = true
    } else {
      isOpen.value = false
    }
  }

  const closeDropdown = () => {
    isOpen.value = false
  }

  const openDropdown = () => {
    // Close all other dropdowns before opening this one
    closeAllDropdowns()
    isOpen.value = true
  }

  // Cleanup function to remove this dropdown from global state
  const cleanup = () => {
    dropdownInstances.delete(dropdownId)
    removeGlobalKeyboardListener()
  }

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
    openDropdown,
    closeAllDropdowns,
    cleanup
  }
}
