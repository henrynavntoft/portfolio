"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
} 