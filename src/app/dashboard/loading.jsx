import { Skeleton } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-full'>
      <Skeleton height={300} variant="rounded"/>
      <Skeleton height={300} variant="rounded"/>
    </div>
  )
}
