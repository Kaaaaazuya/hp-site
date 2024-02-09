import { Character } from '@/app/types/Character'
import Image from 'next/image'

type props = {
  character: Character
}

export const ListItem = ({ character }: props) => {
  return (
    <div
      key={character.id}
      className='mb-12 flex rounded-lg border-black bg-[#E5E1E2] p-4'
    >
      <Image
        className='mr-5'
        src={character.image === '' ? '/noimage.svg' : character.image}
        alt={`${character.name}'s image`}
        width={50}
        height={60}
      />
      <div>
        <h2 className='mb-2 text-3xl font-bold'>{character.name}</h2>
        <p className='text-xl text-[#8C3342]'>
          {character.dateOfBirth ? character.dateOfBirth : 'unknown'}
        </p>
      </div>
    </div>
  )
}
