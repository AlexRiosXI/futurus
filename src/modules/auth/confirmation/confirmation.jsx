import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/helper/supabaseClient'
import { ToastContainer, toast } from 'react-toastify'

// Define the form schema
const schema = yup.object().shape({
  confirmationCode: yup.string().length(6, 'El código debe tener 6 caracteres').required('Código de confirmación es requerido')
})

export default function ConfirmationCode() {

  const navigate = useNavigate()

  const resendConfirmationLink = async () => {
    const res = await supabase.auth.resend({
        type: "signup",
        email: "alexriosxi@gmail.com"
    })
    console.log(res)
    if(res.error){
        switch (res.error.code) {
            case "over_email_send_rate_limit":
                toast.error("Demasiados intentos")
                break
            case "invalid_email":
                toast.error("Correo inválido")
                break
            case "email_not_found":
                toast.error("Correo no encontrado")
                break
            default:
                toast.error("Error al enviar el correo")
                break
        }
            
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
          <h1
          className='text-xl  text-center' 
          >Revisa tu correo electrónico</h1>
          
        </CardHeader>
        <CardContent className="space-y-4">
          <p
          className='text-center text-foreground-500'
          >Haz click en el enlace que te enviamos para confirmar tu cuenta</p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <div>
            ¿No recibiste el código?{" "}
            <a 
            onClick={resendConfirmationLink} // handle resending the code
            className="text-primary hover:underline">Reenviar Link</a>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        © 2024 futurus. Todos los derechos reservados.
      </div>
    </div>
  )
}