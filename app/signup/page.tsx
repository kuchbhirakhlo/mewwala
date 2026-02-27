"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page
    router.replace("/login")
  }, [router])

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <p className="mt-4 text-blue-600">Redirecting to login...</p>
    </div>
  )
}
