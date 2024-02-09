'use client'

import useSWR from 'swr'
import { Character } from '../types/Character'
import { urls } from '../constants/url'
import { fetcher } from '../lib/swr'
import { Title } from '../components/character/Title'
import { List } from '../components/character/List'

export default function Home() {
  const { data, error, isLoading } = useSWR<Character[]>(urls.charactors, fetcher)

  if (isLoading) return <div className='max-h-full max-w-full bg-black'>Loading...</div>
  if (error) return <div className={error}>Data acquisition failed.</div>
  if (data)
    return (
      <main className='max-w-full overflow-x-hidden bg-black px-12 py-6'>
        <Title />
        <List charactors={data} />
      </main>
    )
}
