import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/helper/supabaseClient'
import PasswordValidator from '../passwordValidator/passwordValidator'

// Define the form schema
const schema = yup.object().shape({
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirmar contraseña es requerido')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/
    , 'La contraseña debe tener al menos 6 caracteres y contener al menos una letra, un número y un caracter especial'),
  phone: yup.string().required('Número de teléfono es requerido').matches(/^\d+$/, 'Número de teléfono inválido')
})

export default function Register() {

  const [registerLoadingIndicator, setRegisterLoadingIndicator] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, control, setError, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    setRegisterLoadingIndicator(true)
    const { email, password } = data
    let { user, error } = await supabase.auth.signUp({
      email,
      password
    })
    console.log(user, error)
    if (error) {

      setRegisterLoadingIndicator(false)

      switch (error.name) {
        case 'EmailConflict':
          alert('Email already exists')
          break
        case 'InvalidCredentials':
          alert('Invalid credentials')
          break
        case 'InvalidEmail':
          setError('email', {
            type: 'manual',
            message: 'Correo electrónico inválido'
          })
          break
        case 'AuthWeakPasswordError':
          setError('password', {
            type: 'manual',
            message: 'Contraseña demasiado débil'
          })
          break
        default:
          alert('Signup failed: ' + error.message)
          break
      }

    } else {
      setRegisterLoadingIndicator(false)
      console.log("User signed up:", user)

      navigate('/confirmation')
    }
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col justify-center items-center ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center gap-2 text-primary">
            <p className="text-2xl font-bold text-foreground">futurus<span className='text-danger'>{" "}lex</span></p>
          </div>
          <p className="text-sm text-muted-foreground">Crea tu cuenta</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                {...register('email')}
                label="Correo electrónico"
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('phone')}
                id="phone"
                type="tel"
                label="Número de teléfono"
                errorMessage={errors.phone?.message}
                isInvalid={!!errors.phone}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('password')}
                id="password"
                type="password"
                label="Contraseña"
                errorMessage={errors.password?.message}
                isInvalid={!!errors.password}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('confirmPassword')}
                id="confirmPassword"
                type="password"
                label="Confirmar contraseña"
                errorMessage={errors.confirmPassword?.message}
                isInvalid={!!errors.confirmPassword}
              />
            </div>
            <PasswordValidator
            password={register('password')}
            />

            <Button color='primary' fullWidth type="submit" loading={registerLoadingIndicator}>Registrarse</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <div>
            ¿Ya tienes una cuenta?{" "}
            <a 
            onClick={() => navigate("/")}
            className="text-primary hover:underline">Iniciar sesión</a>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        © 2024 futurus. Todos los derechos reservados.
      </div>
    </div>
  )
}