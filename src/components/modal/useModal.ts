import type { ModalTypes } from '@/components/modal/ModalTypes.ts'

export const useModal = () => {
  const show = (id: ModalTypes) => {
    const element = document.getElementById(id) as HTMLDialogElement
    if (!element) return
    element.showModal()
  }

  const close = (id: ModalTypes) => {
    const element = document.getElementById(id) as HTMLDialogElement
    if (!element) return
    element.close()
  }
  return {
    show,
    close
  }
}
