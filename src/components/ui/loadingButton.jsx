import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function LoadingButton({isLoading=false,children}) {
  return (
    <Button disabled={isLoading} className="w-full">
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}
