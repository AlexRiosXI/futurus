import React, { useEffect, useState } from 'react'


import { Mail, Phone, MapPin, Briefcase, Calendar, Edit } from 'lucide-react'
import { Button, Tab, Tabs } from '@nextui-org/react'
import { Avatar, Card, CardBody, CardHeader, Chip } from '@nextui-org/react'
import Users from './users/users'
import OrganizationContextProvider from './organizationContex/organizationContext'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Organization() {
    const [option, setOption] = useState("")

    const OrganizationDetails = () => {
        const navigate = useNavigate()
        const redirectOption = (option) => {
            console.log("Se esta redirigiendo a la opcion", option)
            setOption(option)
            navigate(option)
        }
        

        return (
            <div className=" mx-auto">
            <Card className="w-full mx-auto">
              <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
                <Avatar/>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold">Firma Abogados S.A</h1>
         
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                    <Chip  size='sm'>Derecho Laboral</Chip>
                    <Chip  size='sm'>Derecho Fiscal</Chip>
                    <Chip  size='sm'>Derecho Mercantíl</Chip>
                  </div>
                </div>
                <Button className="ml-auto" 
                
                >
                  <Edit className="mr-2 h-4 w-4" /> Editar Perfil
                </Button>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                 
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+34 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Chihuauha, México</span>
                    </div>
                 
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Miembro desde Enero 2020</span>
                    </div>
                  </div>
               
                </div>
                <Tabs
                  
                  selectedKey={option}
                  onSelectionChange={(value) => redirectOption(value)}
                className='mt-6'
                >
                  <Tab
                  title="Usuarios"
                  key={"users"}
                  />
                   <Tab
                   key={"subscription"}
                  title="Suscripción"
                  />
                
                </Tabs>

                <Outlet/>
        
               
              </CardBody>
            </Card>
          </div>
        )
    }
  return (
    <OrganizationContextProvider>
        <OrganizationDetails/>
    </OrganizationContextProvider>
  )
}