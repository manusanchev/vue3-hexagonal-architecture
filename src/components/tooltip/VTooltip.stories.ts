import type { Meta, StoryObj } from '@storybook/vue3'
import VTooltip from './VTooltip.vue'
import VButton from '@/components/button/VButton.vue'

const meta: Meta<typeof VTooltip> = {
  title: 'Components/Tooltip',
  component: VTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that shows additional information on hover.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content to display in the tooltip'
    }
  },
  args: {
    text: 'This is a tooltip'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { VTooltip },
    setup() {
      return { args }
    },
    template: `
      <VTooltip v-bind="args">
        <span class="px-3 py-2 bg-neutral-100 rounded-lg cursor-pointer">
          Hover me
        </span>
      </VTooltip>
    `
  })
}

export const WithButton: Story = {
  args: {
    text: 'Click to perform action'
  },
  render: (args) => ({
    components: { VTooltip, VButton },
    setup() {
      return { args }
    },
    template: `
      <VTooltip v-bind="args">
        <VButton>Action Button</VButton>
      </VTooltip>
    `
  })
}

export const LongText: Story = {
  args: {
    text: 'This is a longer tooltip text that demonstrates how the tooltip handles more content'
  },
  render: (args) => ({
    components: { VTooltip },
    setup() {
      return { args }
    },
    template: `
      <VTooltip v-bind="args">
        <span class="px-3 py-2 bg-blue-100 rounded-lg cursor-pointer">
          Long tooltip
        </span>
      </VTooltip>
    `
  })
}

export const WithIcon: Story = {
  args: {
    text: 'Information about this feature'
  },
  render: (args) => ({
    components: { VTooltip },
    setup() {
      return { args }
    },
    template: `
      <VTooltip v-bind="args">
        <div class="w-6 h-6 bg-neutral-200 rounded-full flex items-center justify-center cursor-pointer">
          <span class="text-xs">?</span>
        </div>
      </VTooltip>
    `
  })
}

export const Multiple: Story = {
  render: () => ({
    components: { VTooltip, VButton },
    template: `
      <div class="flex gap-4 items-center">
        <VTooltip text="First tooltip">
          <VButton variant="primary">Primary</VButton>
        </VTooltip>

        <VTooltip text="Second tooltip">
          <VButton variant="secondary">Secondary</VButton>
        </VTooltip>

        <VTooltip text="Third tooltip">
          <VButton variant="tertiary">Tertiary</VButton>
        </VTooltip>

        <VTooltip text="Help information">
          <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer">
            <span class="text-xs text-blue-600">i</span>
          </div>
        </VTooltip>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Multiple tooltips demonstrating different use cases.'
      }
    }
  }
}
