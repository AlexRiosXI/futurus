'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@nextui-org/react'
import { LucideFileQuestion } from 'lucide-react'
import Sculpture from "../../../assets/images/sculpture.png"
import FuturusLogo from '../../../assets/logos/isotype_futurus'
import { useNavigate } from 'react-router-dom'




export default function NotFound() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center gap-1"
      >
        <FuturusLogo className="w-20 h-20" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild
          onClick={()=>navigate('/index')}
          >
            
              Volver al inicio
            
          </Button>
          
        </motion.div>
      </motion.div>
      <motion.div
      initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        
      >
      <img
      className='absolute bottom-0 right-0 w-1/2 max-w-[500px]'
      src={Sculpture} alt="sculpture" />
      </motion.div>
    </div>
  )
}