import { type Ref, ref } from 'vue'

interface ToastOptions {
  id?: string
  title: string
}

const toasts: Ref<ToastOptions[]> = ref([])
const TIMEOUT = 4000;

export const useToast = () => {

  const toast = (toastOptions: ToastOptions) => {
    const toastOptionsWithId = { ...toastOptions, id: genId() }
    toasts.value.push(toastOptionsWithId)
    setTimeout(() => {
      toasts.value = toasts.value.filter((toast) => toast.id !== toastOptionsWithId.id)
    }, TIMEOUT)
  }

  return {
    toasts,
    toast,
  }
}


const genId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
