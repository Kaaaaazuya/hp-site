import { useModal } from './useModal'
import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks'

describe('useModal hook', () => {
  it('should initialize as false', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.show).toBe(false)
  })

  it('should toggle modal visibility', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.toggleModal()
    })
    expect(result.current.show).toBe(true)

    act(() => {
      result.current.toggleModal()
    })
    expect(result.current.show).toBe(false)
  })

  it('should open modal', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.openModal()
    })
    expect(result.current.show).toBe(true)
  })

  it('should close modal', () => {
    const { result } = renderHook(() => useModal())

    // First, open the modal to ensure it's in the open state
    act(() => {
      result.current.openModal()
    })
    expect(result.current.show).toBe(true)

    // Then, close it
    act(() => {
      result.current.closeModal()
    })
    expect(result.current.show).toBe(false)
  })
})
