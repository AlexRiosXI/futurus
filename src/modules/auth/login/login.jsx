import React from 'react'


import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard } from 'lucide-react'
import { LoadingButton } from '../../../components/ui/loadingButton'
import { Button, Input } from '@nextui-org/react'

export default function Login() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col justify-center items-center ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center gap-2 text-primary">
            
            <p className="text-2xl font-bold text-foreground">futurus
            <span
            className='text-danger'
            >{" "}lex</span>
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Ingresa a tu cuenta para continuar
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            
            
            <Input
            label="Correo electrónico"
            id="email" type="email" placeholder="tu@ejemplo.com" required />
          </div>
          <div className="space-y-2">
            
            <Input
           label="Contraseña"
            id="password" type="password" required />
          </div>
      
          <Button
          color='primary'
          fullWidth
          type="submit">
            Iniciar sesión
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <a href="#" className="hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
          <div>
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-primary hover:underline">
              Regístrate
            </a>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        © 2023 ERP Pro. Todos los derechos reservados.
      </div>
    </div>
  )
}