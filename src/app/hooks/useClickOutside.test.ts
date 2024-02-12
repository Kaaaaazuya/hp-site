import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useOnClickOutside } from './useClickOutside'

describe('useOnClickOutside', () => {
  it('要素の外部をクリックしたときにコールバック関数が実行されること', () => {
    const handler = vi.fn()
    const ref = { current: document.createElement('div') }

    renderHook(() => useOnClickOutside({ ref, handler }))

    // 外部要素を模倣するイベントを作成
    const event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
    })

    // イベントを発火
    document.dispatchEvent(event)

    // handlerが呼び出されたことを確認
    expect(handler).toHaveBeenCalled()
  })
})
