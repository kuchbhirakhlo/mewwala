"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { LanguageToggle } from "@/components/language-toggle"
import {
  auth,
  db,
  GoogleAuthProvider,
  doc,
  safeSignInWithPopup,
  safeSetDoc,
  safeGetDoc,
  safeOnAuthStateChanged,
  serverTimestamp,
} from "@/lib/firebase"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Check for existing authentication on component mount
  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = safeOnAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User already logged in, redirecting to dashboard")
        // Save session data
        sessionStorage.setItem("userSession", JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          loginTime: new Date().toISOString(),
        }))
        router.push("/dashboard")
        return
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      // Add these scopes for better user profile access
      provider.addScope('profile');
      provider.addScope('email');
      
      // Set custom parameters for Google Sign-In experience
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      
      // Use popup instead of redirect for better error handling
        const result = await safeSignInWithPopup(auth, provider);
      
      if (!result || !result.user) {
        throw new Error('Failed to sign in with Google');
      }
      
      // Check if the user document already exists in businesses collection
      const userDoc = await safeGetDoc(doc(db, 'businesses', result.user.uid));
        
      // If user doesn't exist, create a new user document
      if (!userDoc.exists()) {
        const userData = {
          businessName: result.user.displayName || 'My Business',
          businessType: 'other',
          email: result.user.email,
          photoURL: result.user.photoURL,
          createdAt: serverTimestamp(),
        };
        
        await safeSetDoc(doc(db, 'businesses', result.user.uid), userData);
      }
      
      // Save session data
      sessionStorage.setItem("userSession", JSON.stringify({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        loginTime: new Date().toISOString(),
      }));

      toast({
        title: "Success!",
        description: "Successfully signed in with Google!",
      });
      router.push('/dashboard');
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast({
        title: "Error",
        description: "Failed to sign in with Google. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-purple-50 flex flex-col items-center justify-center p-4">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 text-lg font-bold text-blue-600"
      >
          <Image 
              src="/logo.png" 
              alt="MenuWala Logo" 
              width={80} 
              height={80} 
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto rounded-2xl"
            />
      </Link>
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <LanguageToggle />
      </div>
      <Card className="w-full max-w-md border-blue-200 shadow-lg bg-white">
        <CardHeader className="space-y-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg">
          <CardTitle className="text-2xl text-white">Welcome to MenuWala</CardTitle>
          <CardDescription className="text-blue-100">Sign in to manage your business online</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <Button
            variant="outline"
            className="w-full border-blue-200 hover:bg-blue-50 hover:border-blue-300 relative h-12"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            )}
            {isLoading ? "Signing in..." : "Sign in with Google"}
          </Button>
          
          <div className="text-center text-sm text-blue-600 pt-2">
            <p>Create your free business website in minutes</p>
          </div>
        </CardContent>
        <CardFooter className="bg-blue-50 p-4 rounded-b-lg justify-center">
          <Link
            href="/"
            className="text-blue-600 font-medium underline underline-offset-4 hover:text-blue-800 text-sm"
          >
            ← Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
