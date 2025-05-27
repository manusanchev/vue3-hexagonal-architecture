import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import VInputWithLabel from './VInputWithLabel.vue'

const meta: Meta<typeof VInputWithLabel> = {
  title: 'Components/Input/WithLabel',
  component: VInputWithLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An input component with an integrated label for better form structure.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { VInputWithLabel },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <VInputWithLabel id="default-input" v-model="value" placeholder="Enter text...">
        Default Label
      </VInputWithLabel>
    `
  })
}

export const Email: Story = {
  render: () => ({
    components: { VInputWithLabel },
    setup() {
      const email = ref('')
      return { email }
    },
    template: `
      <VInputWithLabel id="email-input" v-model="email" type="email" placeholder="john@example.com">
        Email Address
      </VInputWithLabel>
    `
  })
}

export const Password: Story = {
  render: () => ({
    components: { VInputWithLabel },
    setup() {
      const password = ref('')
      return { password }
    },
    template: `
      <VInputWithLabel id="password-input" v-model="password" type="password" placeholder="Enter your password">
        Password
      </VInputWithLabel>
    `
  })
}

export const Required: Story = {
  render: () => ({
    components: { VInputWithLabel },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <VInputWithLabel id="required-input" v-model="value" required placeholder="This field is required">
        Required Field
      </VInputWithLabel>
    `
  })
}

export const FormExample: Story = {
  render: () => ({
    components: { VInputWithLabel },
    setup() {
      const firstName = ref('')
      const lastName = ref('')
      const email = ref('')
      const phone = ref('')
      return { firstName, lastName, email, phone }
    },
    template: `
      <form class="flex flex-col gap-4 w-80">
        <VInputWithLabel id="first-name" v-model="firstName" placeholder="John" required>
          First Name
        </VInputWithLabel>
        <VInputWithLabel id="last-name" v-model="lastName" placeholder="Doe" required>
          Last Name
        </VInputWithLabel>
        <VInputWithLabel id="email" v-model="email" type="email" placeholder="john@example.com" required>
          Email Address
        </VInputWithLabel>
        <VInputWithLabel id="phone" v-model="phone" type="tel" placeholder="+1 (555) 123-4567">
          Phone Number
        </VInputWithLabel>
      </form>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete form using VInputWithLabel components.'
      }
    }
  }
}
