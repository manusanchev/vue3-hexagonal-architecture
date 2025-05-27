import type { Meta, StoryObj } from '@storybook/vue3'
import VTable from './VTable.vue'
import VTableHeader from './VTableHeader.vue'
import VTableRow from './VTableRow.vue'
import VTableCell from './VTableCell.vue'

const meta: Meta<typeof VTable> = {
  title: 'Components/Table',
  component: VTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A table component system with header, rows, and cells for displaying tabular data.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: { VTable, VTableHeader, VTableRow, VTableCell },
    template: `
      <VTable>
        <VTableHeader>
          <VTableCell>Name</VTableCell>
          <VTableCell>Email</VTableCell>
          <VTableCell>Role</VTableCell>
          <VTableCell>Status</VTableCell>
          <VTableCell>Actions</VTableCell>
        </VTableHeader>
        <VTableRow>
          <VTableCell>John Doe</VTableCell>
          <VTableCell>john@example.com</VTableCell>
          <VTableCell>Admin</VTableCell>
          <VTableCell>Active</VTableCell>
          <VTableCell>Edit</VTableCell>
        </VTableRow>
        <VTableRow>
          <VTableCell>Jane Smith</VTableCell>
          <VTableCell>jane@example.com</VTableCell>
          <VTableCell>User</VTableCell>
          <VTableCell>Active</VTableCell>
          <VTableCell>Edit</VTableCell>
        </VTableRow>
        <VTableRow>
          <VTableCell>Bob Johnson</VTableCell>
          <VTableCell>bob@example.com</VTableCell>
          <VTableCell>User</VTableCell>
          <VTableCell>Inactive</VTableCell>
          <VTableCell>Edit</VTableCell>
        </VTableRow>
      </VTable>
    `
  })
}

export const WithEmployeeData: Story = {
  render: () => ({
    components: { VTable, VTableHeader, VTableRow, VTableCell },
    setup() {
      const employees = [
        { name: 'Alice Cooper', phone: '+1 (555) 123-4567', username: 'alice.cooper', website: 'alice.dev' },
        { name: 'Bob Wilson', phone: '+1 (555) 234-5678', username: 'bob.wilson', website: 'bobwilson.com' },
        { name: 'Carol Davis', phone: '+1 (555) 345-6789', username: 'carol.davis', website: 'caroldavis.net' },
        { name: 'David Brown', phone: '+1 (555) 456-7890', username: 'david.brown', website: 'davidbrown.org' }
      ]
      return { employees }
    },
    template: `
      <VTable>
        <VTableHeader>
          <VTableCell>Name</VTableCell>
          <VTableCell>Phone</VTableCell>
          <VTableCell>Username</VTableCell>
          <VTableCell>Website</VTableCell>
          <VTableCell>Actions</VTableCell>
        </VTableHeader>
        <VTableRow v-for="employee in employees" :key="employee.username">
          <VTableCell>{{ employee.name }}</VTableCell>
          <VTableCell>{{ employee.phone }}</VTableCell>
          <VTableCell>{{ employee.username }}</VTableCell>
          <VTableCell>{{ employee.website }}</VTableCell>
          <VTableCell>
            <button class="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </VTableCell>
        </VTableRow>
      </VTable>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Table with employee data demonstrating dynamic content rendering.'
      }
    }
  }
}

export const Empty: Story = {
  render: () => ({
    components: { VTable, VTableHeader, VTableCell },
    template: `
      <VTable>
        <VTableHeader>
          <VTableCell>Name</VTableCell>
          <VTableCell>Email</VTableCell>
          <VTableCell>Role</VTableCell>
          <VTableCell>Status</VTableCell>
          <VTableCell>Actions</VTableCell>
        </VTableHeader>
        <div class="flex justify-center py-8 text-neutral-500">
          No data available
        </div>
      </VTable>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Empty table state with no data.'
      }
    }
  }
}
