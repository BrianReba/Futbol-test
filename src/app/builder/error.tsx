'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
<div className='flex flex-col items-center justify-center h-full bg-gray-200'>
	<h2 className='text-4xl font-bold text-red-500 mb-4'>¡Algo salió mal!</h2>
	<Link href='/'>
		<button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Volver</button>
	</Link>
</div>
 )
}