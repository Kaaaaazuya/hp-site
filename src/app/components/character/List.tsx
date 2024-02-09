import { Character } from '../../types/Character'
import { ListItem } from './ListItem'

type props = {
  charactors: Character[]
}

export const List = ({ charactors }: props) => {
  return (
    <>
      <div className='mt-12 flex-col gap-2'>
        {charactors.map((character) => (
          <ListItem character={character} key={character.id} />
        ))}
      </div>
    </>
  )
}
