import { Character } from '@/app/types/Character'
import Image from 'next/image'
import { Detail } from './Detail'
import { useModal } from '@/app/hooks/useModal'

type props = {
  character: Character
}

export const ListItem = ({ character }: props) => {
  const { show, openModal, closeModal } = useModal()

  return (
    <>
      <button
        key={character.id}
        className='flex gap-2 rounded-lg p-4'
        type='button'
        onClick={openModal}
      >
        <Image
          src={character.image === '' ? '/noimage.svg' : character.image}
          alt={`${character.name}'s image`}
          width={60}
          height={60}
        />
        <div>
          <h2 className='mb-2 text-3xl font-bold text-[#8C3342]'>{character.name}</h2>
          <p className='text-xl text-[#8C3342]'>
            {character.dateOfBirth ? character.dateOfBirth : 'unknown'}
          </p>
        </div>
      </button>
      {show && <Detail close={closeModal} character={character} />}
    </>
  )
}
