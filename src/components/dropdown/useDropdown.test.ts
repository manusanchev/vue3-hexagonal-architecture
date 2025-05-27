import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useDropdown } from './useDropdown.ts'

// Mock document for testing
const mockDocument = {
  addEventListener: vi.fn(),
  removeEventListener: vi.fn()
}

// Mock global document
Object.defineProperty(global, 'document', {
  value: mockDocument,
  writable: true
})

describe('useDropdown', () => {
  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks()
  })

  afterEach(() => {
    // Clean up after each test
    vi.clearAllMocks()
  })

  it('should create a dropdown with unique ID', () => {
    const dropdown1 = useDropdown('test-1')
    const dropdown2 = useDropdown('test-2')

    expect(dropdown1.isOpen.value).toBe(false)
    expect(dropdown2.isOpen.value).toBe(false)
  })

  it('should open dropdown when toggleDropdown is called', () => {
    const dropdown = useDropdown('test')

    dropdown.toggleDropdown()

    expect(dropdown.isOpen.value).toBe(true)
  })

  it('should close dropdown when closeDropdown is called', () => {
    const dropdown = useDropdown('test')

    dropdown.openDropdown()
    expect(dropdown.isOpen.value).toBe(true)

    dropdown.closeDropdown()
    expect(dropdown.isOpen.value).toBe(false)
  })

  it('should close all other dropdowns when one is opened', () => {
    const dropdown1 = useDropdown('test-1')
    const dropdown2 = useDropdown('test-2')
    const dropdown3 = useDropdown('test-3')

    // Open first dropdown
    dropdown1.openDropdown()
    expect(dropdown1.isOpen.value).toBe(true)
    expect(dropdown2.isOpen.value).toBe(false)
    expect(dropdown3.isOpen.value).toBe(false)

    // Open second dropdown - should close first
    dropdown2.openDropdown()
    expect(dropdown1.isOpen.value).toBe(false)
    expect(dropdown2.isOpen.value).toBe(true)
    expect(dropdown3.isOpen.value).toBe(false)

    // Open third dropdown - should close second
    dropdown3.openDropdown()
    expect(dropdown1.isOpen.value).toBe(false)
    expect(dropdown2.isOpen.value).toBe(false)
    expect(dropdown3.isOpen.value).toBe(true)
  })

  it('should close all dropdowns when closeAllDropdowns is called', () => {
    const dropdown1 = useDropdown('test-1')
    const dropdown2 = useDropdown('test-2')

    dropdown1.openDropdown()
    dropdown2.openDropdown()

    dropdown1.closeAllDropdowns()

    expect(dropdown1.isOpen.value).toBe(false)
    expect(dropdown2.isOpen.value).toBe(false)
  })

  it('should toggle dropdown state correctly', () => {
    const dropdown = useDropdown('test')

    // Initially closed
    expect(dropdown.isOpen.value).toBe(false)

    // First toggle - should open
    dropdown.toggleDropdown()
    expect(dropdown.isOpen.value).toBe(true)

    // Second toggle - should close
    dropdown.toggleDropdown()
    expect(dropdown.isOpen.value).toBe(false)
  })

  it('should cleanup dropdown instance when cleanup is called', () => {
    const dropdown1 = useDropdown('test-1')
    const dropdown2 = useDropdown('test-2')

    dropdown1.openDropdown()
    dropdown2.openDropdown()

    // Cleanup first dropdown
    dropdown1.cleanup()

    // Only second dropdown should remain open
    dropdown2.closeAllDropdowns()
    expect(dropdown2.isOpen.value).toBe(false)
  })
})
