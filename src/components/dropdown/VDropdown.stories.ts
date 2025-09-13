import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { MoreVertical, Edit, Trash2, Settings, User, LogOut } from 'lucide-vue-next'
import VDropdown from './VDropdown.vue'

const meta: Meta<typeof VDropdown> = {
  title: 'Components/Dropdown',
  component: VDropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown component that automatically closes other dropdowns when opened. Supports keyboard navigation with Escape key.'
      }
    }
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the dropdown instance'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => ({
    components: { VDropdown, MoreVertical, Edit, Trash2 },
    setup() {
      const handleEdit = () => alert('Edit clicked!')
      const handleDelete = () => alert('Delete clicked!')
      return { args, handleEdit, handleDelete }
    },
    template: `
      <VDropdown v-bind="args">
        <template #trigger>
          <button class="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
            <MoreVertical class="h-4 w-4" />
          </button>
        </template>
        <template #content="{ close }">
          <div class="w-40">
            <button
              @click="handleEdit(); close()"
              class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              <Edit class="h-4 w-4 mr-2" />
              Edit
            </button>
            <button
              @click="handleDelete(); close()"
              class="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <Trash2 class="h-4 w-4 mr-2" />
              Delete
            </button>
          </div>
        </template>
      </VDropdown>
    `
  })
}

export const UserMenu: Story = {
  render: (args) => ({
    components: { VDropdown, User, Settings, LogOut },
    setup() {
      const handleProfile = () => alert('Profile clicked!')
      const handleSettings = () => alert('Settings clicked!')
      const handleLogout = () => alert('Logout clicked!')
      return { args, handleProfile, handleSettings, handleLogout }
    },
    template: `
      <VDropdown v-bind="args">
        <template #trigger>
          <button class="flex items-center space-x-2 p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div class="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
              <User class="h-4 w-4" />
            </div>
            <span class="text-sm font-medium">John Doe</span>
          </button>
        </template>
        <template #content="{ close }">
          <div class="w-48">
            <div class="px-3 py-2 border-b border-neutral-100">
              <p class="text-sm font-medium text-neutral-900">John Doe</p>
              <p class="text-xs text-neutral-500">john@example.com</p>
            </div>
            <button
              @click="handleProfile(); close()"
              class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              <User class="h-4 w-4 mr-2" />
              Profile
            </button>
            <button
              @click="handleSettings(); close()"
              class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              <Settings class="h-4 w-4 mr-2" />
              Settings
            </button>
            <hr class="my-1" />
            <button
              @click="handleLogout(); close()"
              class="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut class="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </template>
      </VDropdown>
    `
  })
}

export const MultipleDropdowns: Story = {
  render: () => ({
    components: { VDropdown, MoreVertical, Edit, Trash2, Settings },
    setup() {
      const handleAction = (action: string, item: string) => {
        alert(`${action} clicked for ${item}!`)
      }
      return { handleAction }
    },
    template: `
      <div class="flex space-x-4">
        <VDropdown id="dropdown-1">
          <template #trigger>
            <button class="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
              Dropdown 1
            </button>
          </template>
          <template #content="{ close }">
            <div class="w-32">
              <button
                @click="handleAction('Edit', 'Item 1'); close()"
                class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <Edit class="h-4 w-4 mr-2" />
                Edit
              </button>
              <button
                @click="handleAction('Delete', 'Item 1'); close()"
                class="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 class="h-4 w-4 mr-2" />
                Delete
              </button>
            </div>
          </template>
        </VDropdown>

        <VDropdown id="dropdown-2">
          <template #trigger>
            <button class="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
              Dropdown 2
            </button>
          </template>
          <template #content="{ close }">
            <div class="w-32">
              <button
                @click="handleAction('Settings', 'Item 2'); close()"
                class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <Settings class="h-4 w-4 mr-2" />
                Settings
              </button>
              <button
                @click="handleAction('Delete', 'Item 2'); close()"
                class="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 class="h-4 w-4 mr-2" />
                Delete
              </button>
            </div>
          </template>
        </VDropdown>

        <VDropdown id="dropdown-3">
          <template #trigger>
            <button class="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
              Dropdown 3
            </button>
          </template>
          <template #content="{ close }">
            <div class="w-32">
              <button
                @click="handleAction('Edit', 'Item 3'); close()"
                class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <Edit class="h-4 w-4 mr-2" />
                Edit
              </button>
              <button
                @click="handleAction('Settings', 'Item 3'); close()"
                class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <Settings class="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </template>
        </VDropdown>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Multiple dropdowns demonstrating the auto-close behavior. When one dropdown is opened, all others automatically close. Try opening different dropdowns to see this behavior.'
      }
    }
  }
}
