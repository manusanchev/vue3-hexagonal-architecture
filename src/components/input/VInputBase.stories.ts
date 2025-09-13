import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import VInputBase from './VInputBase.vue'

const meta: Meta<typeof VInputBase> = {
  title: 'Components/Input/Base',
  component: VInputBase,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A base input component with clean styling and focus states. Accepts all standard HTML input attributes.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { VInputBase },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<VInputBase v-model="value" placeholder="Enter text..." />'
  })
}

export const WithPlaceholder: Story = {
  render: () => ({
    components: { VInputBase },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<VInputBase v-model="value" placeholder="Enter your email address" />'
  })
}

export const Email: Story = {
  render: () => ({
    components: { VInputBase },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<VInputBase v-model="value" type="email" placeholder="john@example.com" />'
  })
}

export const Password: Story = {
  render: () => ({
    components: { VInputBase },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<VInputBase v-model="value" type="password" placeholder="Enter your password" />'
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { VInputBase },
    setup() {
      const value = ref('Disabled value')
      return { value }
    },
    template: '<VInputBase v-model="value" disabled placeholder="This input is disabled" />'
  })
}

export const Required: Story = {
  render: () => ({
    components: { VInputBase },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<VInputBase v-model="value" required placeholder="This field is required" />'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { VInputBase },
    setup() {
      const textValue = ref('')
      const emailValue = ref('')
      const passwordValue = ref('')
      const disabledValue = ref('Disabled')
      return { textValue, emailValue, passwordValue, disabledValue }
    },
    template: `
      <div class="flex flex-col gap-4 w-80">
        <VInputBase v-model="textValue" placeholder="Text input" />
        <VInputBase v-model="emailValue" type="email" placeholder="Email input" />
        <VInputBase v-model="passwordValue" type="password" placeholder="Password input" />
        <VInputBase v-model="disabledValue" disabled placeholder="Disabled input" />
        <VInputBase placeholder="Required input" required />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all input variants and states.'
      }
    }
  }
}
