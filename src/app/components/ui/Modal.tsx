import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type props = {
  show: boolean
  close: () => void
  children: ReactNode
}

export const Modal = ({ children, show, close }: props) => {
  if (!show) return
  return createPortal(
    <div className='fixed left-0 top-0 flex size-full items-center justify-center bg-black '>
      <div className='z-10 flex-col gap-4 border-r-4 border-gray-500 bg-white'>
        <div className='flex h-32 border-b-gray-500'>
          <button type='button' className=' border-gray-300' onClick={close}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}
