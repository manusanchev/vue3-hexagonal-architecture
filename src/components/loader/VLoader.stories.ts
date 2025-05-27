import type { Meta, StoryObj } from '@storybook/vue3'
import VLoader from './VLoader.vue'

const meta: Meta<typeof VLoader> = {
  title: 'Components/Loader',
  component: VLoader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A simple loading spinner component with smooth animation.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { VLoader },
    template: '<VLoader />'
  })
}

export const InButton: Story = {
  render: () => ({
    components: { VLoader },
    template: `
      <button class="relative bg-neutral-900 text-white px-4 py-2 rounded-lg">
        <VLoader class="absolute inset-0" />
        <span class="opacity-0">Loading Button</span>
      </button>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example of loader used inside a button component.'
      }
    }
  }
}

export const InCard: Story = {
  render: () => ({
    components: { VLoader },
    template: `
      <div class="w-64 h-32 border border-neutral-200 rounded-lg bg-white">
        <VLoader />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example of loader used in a card or container.'
      }
    }
  }
}

export const FullPage: Story = {
  render: () => ({
    components: { VLoader },
    template: `
      <div class="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center">
        <VLoader />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example of loader used as a full-page overlay.'
      }
    }
  }
}

export const Multiple: Story = {
  render: () => ({
    components: { VLoader },
    template: `
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <VLoader />
          <p class="mt-2 text-sm text-neutral-600">Loading...</p>
        </div>
        <div class="text-center">
          <VLoader />
          <p class="mt-2 text-sm text-neutral-600">Processing...</p>
        </div>
        <div class="text-center">
          <VLoader />
          <p class="mt-2 text-sm text-neutral-600">Saving...</p>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Multiple loaders with different contexts.'
      }
    }
  }
}
