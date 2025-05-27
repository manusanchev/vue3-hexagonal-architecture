import type { Meta, StoryObj } from '@storybook/vue3'
import VToast from './VToast.vue'
import VButton from '@/components/button/VButton.vue'
import { useToast } from './useToast.ts'

const meta: Meta<typeof VToast> = {
  title: 'Components/Toast',
  component: VToast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A toast notification system for displaying temporary messages to users.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { VToast, VButton },
    setup() {
      const { toast } = useToast()

      const showToast = () => {
        toast({ title: 'This is a toast notification!' })
      }

      return { showToast }
    },
    template: `
      <div class="p-8">
        <VButton @click="showToast">Show Toast</VButton>
        <VToast />
      </div>
    `
  })
}

export const MultipleToasts: Story = {
  render: () => ({
    components: { VToast, VButton },
    setup() {
      const { toast } = useToast()

      const showSuccessToast = () => {
        toast({ title: 'Success! Operation completed.' })
      }

      const showInfoToast = () => {
        toast({ title: 'Information: Please check your email.' })
      }

      const showWarningToast = () => {
        toast({ title: 'Warning: This action cannot be undone.' })
      }

      const showErrorToast = () => {
        toast({ title: 'Error: Something went wrong.' })
      }

      return { showSuccessToast, showInfoToast, showWarningToast, showErrorToast }
    },
    template: `
      <div class="p-8">
        <div class="flex gap-4 flex-wrap">
          <VButton @click="showSuccessToast" variant="primary">Success Toast</VButton>
          <VButton @click="showInfoToast" variant="secondary">Info Toast</VButton>
          <VButton @click="showWarningToast" variant="tertiary">Warning Toast</VButton>
          <VButton @click="showErrorToast" variant="primary">Error Toast</VButton>
        </div>
        <VToast />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Multiple toast notifications demonstrating different message types.'
      }
    }
  }
}

export const RapidFire: Story = {
  render: () => ({
    components: { VToast, VButton },
    setup() {
      const { toast } = useToast()

      const showMultipleToasts = () => {
        toast({ title: 'First notification' })
        setTimeout(() => toast({ title: 'Second notification' }), 500)
        setTimeout(() => toast({ title: 'Third notification' }), 1000)
        setTimeout(() => toast({ title: 'Fourth notification' }), 1500)
      }

      return { showMultipleToasts }
    },
    template: `
      <div class="p-8">
        <VButton @click="showMultipleToasts">Show Multiple Toasts</VButton>
        <VToast />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Rapid-fire toast notifications to demonstrate stacking behavior.'
      }
    }
  }
}

export const LongMessage: Story = {
  render: () => ({
    components: { VToast, VButton },
    setup() {
      const { toast } = useToast()

      const showLongToast = () => {
        toast({
          title: 'This is a very long toast notification message that demonstrates how the toast component handles longer content and text wrapping.'
        })
      }

      return { showLongToast }
    },
    template: `
      <div class="p-8">
        <VButton @click="showLongToast">Show Long Toast</VButton>
        <VToast />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Toast notification with a longer message to test text wrapping.'
      }
    }
  }
}
