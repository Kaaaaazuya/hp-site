import { useCallback, useState } from 'react'

export const useModal = () => {
  const [show, setShow] = useState(false)

  const toggleModal = useCallback(() => {
    setShow((prev) => {
      return !prev
    })
  }, [setShow])

  const openModal = useCallback(() => {
    setShow(true)
  }, [setShow])

  const closeModal = useCallback(() => {
    setShow(false)
  }, [setShow])

  return { show, toggleModal, openModal, closeModal }
}
