import type { Meta, StoryObj } from '@storybook/vue3-vite'
import VButton from './VButton.vue'

const meta: Meta<typeof VButton> = {
  title: 'Components/Button',
  component: VButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and loading states.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The visual style variant of the button'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state with spinner'
    }
  },
  args: {
    variant: 'primary',
    size: 'medium',
    loading: false
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" @click="args.onClick">Primary Button</VButton>'
  })
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  },
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" @click="args.onClick">Secondary Button</VButton>'
  })
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary'
  },
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" @click="args.onClick">Tertiary Button</VButton>'
  })
}

export const Small: Story = {
  args: {
    size: 'small'
  },
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" @click="args.onClick">Small Button</VButton>'
  })
}

export const Medium: Story = {
  args: {
    size: 'medium'
  },
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" @click="args.onClick">Medium Button</VButton>'
  })
}

export const Large: Story = {
  args: {
    size: 'large'
  },
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" @click="args.onClick">Large Button</VButton>'
  })
}

export const Loading: Story = {
  args: {
    loading: true
  },
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" @click="args.onClick">Loading Button</VButton>'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { VButton },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <VButton variant="primary">Primary</VButton>
          <VButton variant="secondary">Secondary</VButton>
          <VButton variant="tertiary">Tertiary</VButton>
        </div>
        <div class="flex gap-4 items-center">
          <VButton size="small">Small</VButton>
          <VButton size="medium">Medium</VButton>
          <VButton size="large">Large</VButton>
        </div>
        <div class="flex gap-4 items-center">
          <VButton loading>Loading</VButton>
          <VButton variant="secondary" loading>Loading Secondary</VButton>
          <VButton variant="tertiary" loading>Loading Tertiary</VButton>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all button variants, sizes, and states.'
      }
    }
  }
}
