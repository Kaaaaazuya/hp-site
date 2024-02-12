import { useOnClickOutside } from '@/app/hooks/useClickOutside'
import { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'

type props = {
  close: () => void
  children: ReactNode
}

export const Modal = ({ children, close }: props) => {
  const contentRef = useRef<HTMLDivElement>(null)
  useOnClickOutside({ ref: contentRef, handler: close })

  return createPortal(
    <div className='fixed left-0 top-0 z-10 flex size-full items-center justify-center bg-black opacity-90'>
      <div
        className='z-20 flex-col gap-4 border-r-4 border-gray-500 bg-white opacity-100'
        ref={contentRef}
        tabIndex={0}
      >
        <div className='flex h-16 justify-end border-b-gray-500 p-4'>
          <button type='button' className=' border-gray-300 ' onClick={close}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}
