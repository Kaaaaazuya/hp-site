import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type props = {
  close: () => void
  children: ReactNode
}

export const Modal = ({ children, close }: props) => {
  return createPortal(
    <div className='fixed left-0 top-0 z-10 flex size-full items-center justify-center bg-black opacity-80'>
      <div className='z-20 flex-col gap-4 border-r-4 border-gray-500 bg-white'>
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
