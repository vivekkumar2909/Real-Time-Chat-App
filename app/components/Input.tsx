'use client'

import React from 'react'
import clsx from 'clsx'
import { FieldError,FieldValues,UseFormRegister } from 'react-hook-form'

interface InputProps{
    label : string
    id : string
    type? : string
    required? : string
    register : UseFormRegister<FieldValues>,
    error : FieldError,
    disabled? : boolean
}

export default function Input() {
  return (
    <div>Hello</div>
  )
}
