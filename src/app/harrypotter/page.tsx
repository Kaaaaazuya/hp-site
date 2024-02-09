'use client'

import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { Character } from '../types/Character'
import { urls } from '../constants/url'
import { fetcher } from '../lib/swr'

export default function Home() {
  const { data, error, isLoading } = useSWR<Character[]>(urls.charactors, fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div className={error}>Data acquisition failed.</div>
  if (data)
    return (
      <main className='max-w-full overflow-x-hidden px-12 py-6'>
        <h1 className='text-center text-5xl font-bold text-[#B69B62]'>Characters</h1>
        <Link href={'/'}>TOP</Link>
        <div className='mt-12'>
          {data.map((character) => (
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
          ))}
        </div>
      </main>
    )
}
