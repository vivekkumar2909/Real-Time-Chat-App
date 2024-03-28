'use client';
import React, { useState } from 'react'

type Variant = "LOGIN" | "REGISTER"

export default function AuthForm() {

    const [variant ,setVariant] = useState<Variant>('LOGIN');
    const [isLoading , setIsLoading] = useState(false);

  return (
    <div>AuthForm</div>
  )
}
