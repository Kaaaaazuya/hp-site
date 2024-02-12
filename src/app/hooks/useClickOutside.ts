import { RefObject, useEffect } from 'react'

type props = {
  /**
   * 外部要素をクリックされたことを検知したい要素
   */
  ref: RefObject<HTMLElement>
  /**
   * 外部要素をクリックされたときのコールバック
   */
  handler: () => void
}

export const useOnClickOutside = ({ ref, handler }: props) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
