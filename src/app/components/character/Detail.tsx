import { Character } from '@/app/types/Character'
import { Modal } from '../ui/Modal'
import Image from 'next/image'

type Props = {
  character: Character
  close: () => void
}

export const Detail = ({ character, close }: Props) => {
  return (
    <Modal close={close}>
      <div className='flex gap-4' style={{ width: '75vw' }}>
        <Image
          src={character.image === '' ? '/noimage.svg' : character.image}
          alt={`${character.name}'s image`}
          width={500}
          height={500}
        />
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>{character.name}</h2>
          {character.alternate_names.length > 0 && (
            <p>別名: {character.alternate_names.join(', ')}</p>
          )}
          <p>種族: {character.species}</p>
          <p>性別: {character.gender}</p>
          <p>寮: {character.house}</p>
          <p>生年月日: {character.dateOfBirth ? character.dateOfBirth : '不明'}</p>
          <p>魔法使い: {character.wizard ? 'はい' : 'いいえ'}</p>
          <p>血統: {character.ancestry}</p>
          <p>目の色: {character.eyeColour}</p>
          <p>髪の色: {character.hairColour}</p>
          <p>
            杖: {character.wand.wood}、{character.wand.core}、
            {character.wand.length ? `${character.wand.length}インチ` : '不明'}
          </p>
          <p>守護霊: {character.patronus}</p>
          <p>ホグワーツの生徒: {character.hogwartsStudent ? 'はい' : 'いいえ'}</p>
          <p>ホグワーツの職員: {character.hogwartsStaff ? 'はい' : 'いいえ'}</p>
          <p>俳優: {character.actor}</p>
          <p>生存: {character.alive ? 'はい' : 'いいえ'}</p>
        </div>
      </div>
    </Modal>
  )
}
