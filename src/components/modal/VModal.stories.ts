import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import VModal from './VModal.vue'
import VModalHeader from './VModalHeader.vue'
import VModalContent from './VModalContent.vue'
import VModalFooter from './VModalFooter.vue'
import VModalClose from './VModalClose.vue'
import VButton from '@/components/button/VButton.vue'
import VInputWithLabel from '@/components/input/variants/VInputWithLabel.vue'
import { useModal } from './useModal.ts'
import { ModalTypes } from './ModalTypes.ts'

const meta: Meta<typeof VModal> = {
  title: 'Components/Modal',
  component: VModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component with backdrop and smooth animations. Use with useModal composable for programmatic control.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: { VModal, VModalHeader, VModalContent, VModalFooter, VModalClose, VButton },
    setup() {
      const { show, close } = useModal()

      const openModal = () => show(ModalTypes.BASIC_MODAL)
      const closeModal = () => close(ModalTypes.BASIC_MODAL)

      return { openModal, closeModal }
    },
    template: `
      <div>
        <VButton @click="openModal">Open Basic Modal</VButton>

        <VModal id="basic-modal">
          <VModalClose @click="closeModal" />
          <VModalHeader>
            Basic Modal
          </VModalHeader>
          <VModalContent>
            <p class="text-neutral-600">
              This is a basic modal with header, content, and footer sections.
            </p>
          </VModalContent>
          <VModalFooter>
            <VButton variant="tertiary" @click="closeModal">Cancel</VButton>
            <VButton @click="closeModal">Confirm</VButton>
          </VModalFooter>
        </VModal>
      </div>
    `
  })
}

export const WithForm: Story = {
  render: () => ({
    components: {
      VModal, VModalHeader, VModalContent, VModalFooter, VModalClose,
      VButton, VInputWithLabel
    },
    setup() {
      const { show, close } = useModal()
      const name = ref('')
      const email = ref('')

      const openModal = () => show(ModalTypes.FORM_MODAL)
      const closeModal = () => close(ModalTypes.FORM_MODAL)

      const handleSubmit = () => {
        alert(`Submitted: ${name.value}, ${email.value}`)
        closeModal()
      }

      return { openModal, closeModal, handleSubmit, name, email }
    },
    template: `
      <div>
        <VButton @click="openModal">Open Form Modal</VButton>

        <VModal id="form-modal">
          <VModalClose @click="closeModal" />
          <VModalHeader>
            User Information
          </VModalHeader>
          <form @submit.prevent="handleSubmit">
            <VModalContent class="space-y-4">
              <VInputWithLabel id="name" v-model="name" placeholder="John Doe" required>
                Full Name
              </VInputWithLabel>
              <VInputWithLabel id="email" v-model="email" type="email" placeholder="john@example.com" required>
                Email Address
              </VInputWithLabel>
            </VModalContent>
            <VModalFooter>
              <VButton type="button" variant="tertiary" @click="closeModal">Cancel</VButton>
              <VButton type="submit">Save User</VButton>
            </VModalFooter>
          </form>
        </VModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Modal with a form inside, demonstrating form submission handling.'
      }
    }
  }
}

export const Confirmation: Story = {
  render: () => ({
    components: { VModal, VModalHeader, VModalContent, VModalFooter, VModalClose, VButton },
    setup() {
      const { show, close } = useModal()

      const openModal = () => show(ModalTypes.CONFIRMATION_MODAL)
      const closeModal = () => close(ModalTypes.CONFIRMATION_MODAL)

      const handleConfirm = () => {
        alert('Action confirmed!')
        closeModal()
      }

      return { openModal, closeModal, handleConfirm }
    },
    template: `
      <div>
        <VButton variant="tertiary" @click="openModal">Delete Item</VButton>

        <VModal id="confirmation-modal">
          <VModalClose @click="closeModal" />
          <VModalHeader>
            Confirm Deletion
          </VModalHeader>
          <VModalContent>
            <p class="text-neutral-600">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </VModalContent>
          <VModalFooter>
            <VButton variant="tertiary" @click="closeModal">Cancel</VButton>
            <VButton variant="primary" @click="handleConfirm">Delete</VButton>
          </VModalFooter>
        </VModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Confirmation modal for destructive actions.'
      }
    }
  }
}

export const LargeContent: Story = {
  render: () => ({
    components: { VModal, VModalHeader, VModalContent, VModalFooter, VModalClose, VButton },
    setup() {
      const { show, close } = useModal()

      const openModal = () => show(ModalTypes.LARGE_MODAL)
      const closeModal = () => close(ModalTypes.LARGE_MODAL)

      return { openModal, closeModal }
    },
    template: `
      <div>
        <VButton @click="openModal">Open Large Modal</VButton>

        <VModal id="large-modal">
          <VModalClose @click="closeModal" />
          <VModalHeader>
            Terms and Conditions
          </VModalHeader>
          <VModalContent class="max-h-96 overflow-y-auto">
            <div class="space-y-4 text-sm text-neutral-600">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.</p>
              <p>Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
            </div>
          </VModalContent>
          <VModalFooter>
            <VButton variant="tertiary" @click="closeModal">Decline</VButton>
            <VButton @click="closeModal">Accept</VButton>
          </VModalFooter>
        </VModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Modal with scrollable content for large amounts of text.'
      }
    }
  }
}
