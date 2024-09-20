import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/helper/supabaseClient'
import { toast } from 'react-toastify'


// Define the form schema
const schema = yup.object().shape({
  first_name: yup.string().required('Nombre es requerido'),
  second_name: yup.string(),
  first_surname: yup.string().required('Primer apellido es requerido'),
  second_surname: yup.string(),
  rfc: yup.string().required('RFC es requerido').matches(/[A-Z]{4}[0-9]{6}[A-Z0-9]{3}/, 'RFC inválido'),
  preferred_name: yup.string().required('Nombre preferido es requerido')
})

export default function NewProfile() {

  const [loading, setLoading] = useState(false)
  const [rfcValue, setRfcValue] = useState('')
  const navigate = useNavigate()
  const { register, handleSubmit, watch, setValue, setError, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (payload) => {
    console.log(payload)
    setLoading(true)
    const { data, error } = await supabase
      .from('user_profiles')
      .insert([
        {
          first_name: payload.first_name,
          second_name: payload.second_name,
          first_surname: payload.first_surname,
          second_surname: payload.second_surname,
          rfc: payload.rfc,
          preferred_name: payload.preferred_name
        }
      ])
    
    if (error) {
      setLoading(false)
      if(error.code === "23505"){
        toast.error("Ya existe un perfil con ese RFC",
        {
            position: "top-center",
        })
      }
    } else {
      setLoading(false)
      console.log("Profile created:", data)
      navigate('/index')
    }
  }

  // Handler to transform the RFC input to uppercase
  const handleRFCChange = (e) => {
    const upperCasedRFC = e.target.value.toUpperCase()
    setRfcValue(upperCasedRFC)
    setValue('rfc', upperCasedRFC)
  }

  const firstName = watch('first_name')
  const secondName = watch('second_name')

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col justify-center items-center ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center gap-2 text-primary">
            <p className="text-2xl font-bold text-foreground">Crear Perfil</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                {...register('first_name')}
                label="Nombre"
                id="first_name"
                type="text"
                placeholder="Nombre"
                errorMessage={errors.first_name?.message}
                isInvalid={!!errors.first_name}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('second_name')}
                label="Segundo nombre"
                id="second_name"
                type="text"
                placeholder="Segundo nombre"
                errorMessage={errors.second_name?.message}
                isInvalid={!!errors.second_name}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('first_surname')}
                label="Primer apellido"
                id="first_surname"
                type="text"
                placeholder="Primer apellido"
                errorMessage={errors.first_surname?.message}
                isInvalid={!!errors.first_surname}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('second_surname')}
                label="Segundo apellido"
                id="second_surname"
                type="text"
                placeholder="Segundo apellido"
                errorMessage={errors.second_surname?.message}
                isInvalid={!!errors.second_surname}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('rfc')}
                label="RFC"
                id="rfc"
                type="text"
                placeholder="RFC"
                value={rfcValue}
                onChange={handleRFCChange}
                maxLength={13}
                errorMessage={errors.rfc?.message}
                isInvalid={!!errors.rfc}
              />
            </div>
            <div className="space-y-2">
              <Select
                {...register('preferred_name')}
                label="Nombre preferido"
                
                placeholder="Seleccione un nombre"
                errorMessage={errors.preferred_name?.message}
                isInvalid={!!errors.preferred_name}
              >
                <SelectItem key={1} value={1}>
                  {firstName || firstName}
                </SelectItem>
                {secondName && <SelectItem key={2} value={2}>
                  {secondName || secondName}
                </SelectItem>}
              </Select>
            </div>
            <Button color='primary' fullWidth type="submit" isLoading={loading}>Crear Perfil</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <div>
            <a onClick={() => navigate("/profiles")} className="text-primary hover:underline">Ver perfiles</a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}