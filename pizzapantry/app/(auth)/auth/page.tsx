'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import React from 'react'
export default function AuthPage() {
  const [isSignUP, setIsSignUp] = useState(true);
  const toggleForm = () => {setIsSignUp
  return (

    <div className='min-h-screen bg-gradient-to-br from-red-50/30 via-orange-50/20 to-yellow-50/30 dark:from-red-950/10 dark:via-orange-950/10 dark:to-yellow-950/10'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>

  )
}
}
