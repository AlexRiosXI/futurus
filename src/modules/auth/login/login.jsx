import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Cookies from 'js-cookie'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/helper/supabaseClient'
import { ToastContainer } from 'react-toastify'

// Define the form schema
const schema = yup.object().shape({
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida')
})

export default function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (params) => {
    console.log(params)
    let res = await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.password
    })
    console.log(res)
    let { data, error } = res
    if (error) {
      console.log(error.code)
      console.log(error.status)
      switch (error.code) {
        case 'invalid_password':
          setError('password', { message: 'Contraseña inválida' })
          break
        case 'invalid_email':
          setError('email', { message: 'Correo electrónico inválido' })
          break
        case 'user_not_confirmed':
          setError('email', { message: 'Correo electrónico no confirmado' })
          break
        case "invalid_credentials":
          setError('email', { message: 'Credenciales inválidas' })
          break
        case "email_not_confirmed":
          navigate("/confirmation")
          break
        default:
          setError('email', { message: 'Error al ingresar' })
          break
      }
    } else {
      Cookies.set('authToken', data.session.access_token, { expires: 7 }) // store the token for 7 days
      navigate('/index')
    }
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col justify-center items-center ">
      <ToastContainer />
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center gap-2 text-primary">
            <p className="text-2xl font-bold text-foreground">futurus<span className='text-danger'>{" "}lex</span></p>
          </div>
          <p className="text-sm text-muted-foreground">Ingresa a tu cuenta para continuar</p>
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
                {...register('password')}
                id="password"
                type="password"
                label="Contraseña"
                errorMessage={errors.password?.message}
                isInvalid={!!errors.password}
                
              />
              
            </div>
            <Button color='primary' fullWidth type="submit">Iniciar sesión</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <a href="#" className="hover:underline">¿Olvidaste tu contraseña?</a>
          <div>
            ¿No tienes una cuenta?{" "}
            <a 
            onClick={()=>navigate("/register")}
            className="text-primary hover:underline">Regístrate</a>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        © 2024 futurus. Todos los derechos reservados.
      </div>
    </div>
  )
}