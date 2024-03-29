'use client';
import Input from '@/app/components/Input';
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type Variant = "LOGIN" | "REGISTER"

export default function AuthForm() {

    const [variant ,setVariant] = useState<Variant>('LOGIN');
    const [isLoading , setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>{
      if(variant === 'LOGIN'){
        setVariant('REGISTER');

      }else{
        setVariant('LOGIN');
      }
    },[variant])

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FieldValues>({
      defaultValues :{
        name:"",
        email:"",
        password:""
      }
    })

    const onsubmit : SubmitHandler<FieldValues>=(data)=>{
      setIsLoading(true);
      console.log(data);
      if(variant === 'LOGIN'){
        //Axios NextAuth SignIn
      }
      if(variant === 'REGISTER')
      {
        //Next Resister
      }
    }

    const socialAction = (action: string)=>{
      setIsLoading(true);;
    } 

  return (
    <div className=' mt-8 sm:max-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className=' space-y-6' onSubmit={handleSubmit(onsubmit)}>
          <Input/>
        </form>
      </div>
    </div>
  )
}
