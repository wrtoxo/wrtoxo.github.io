// File: src/pages/LoginPage.tsx (skeleton only)
import React from 'react';

export default function LoginPage() {
  return (
    <main className="min-h-dvh grid md:grid-cols-2 bg-white text-neutral-900">
      {/* LEFT: content column */}
      <section className="p-6 md:p-10 flex flex-col">
        {/* Brand */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-violet-600" aria-hidden />
            <span className="font-semibold">TheCubeFactory</span>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-sm">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-1 text-sm text-neutral-500">Please enter your details</p>

          {/* Form (no functionality) */}
          <form className="mt-6 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Email address</label>
              <input className="w-full rounded-md border px-3 py-2 outline-none" placeholder="you@example.com" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Password</label>
              <input className="w-full rounded-md border px-3 py-2 outline-none" placeholder="••••••••" />
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4 rounded border" />
                <span>Remember for 30 days</span>
              </label>
              <a href="#" className="text-sm text-violet-700 underline">Forgot password</a>
            </div>

            <button type="button" className="w-full rounded-md bg-violet-600 py-2 text-white font-medium">Sign in</button>

            <button type="button" className="w-full rounded-md border py-2 font-medium flex items-center justify-center gap-2">
              <span className="h-4 w-4 rounded-full border" aria-hidden />
              <span>Sign in with Google</span>
            </button>

            <p className="text-center text-sm text-neutral-600">
              Don’t have an account? <a href="#" className="underline text-violet-700">Sign up</a>
            </p>
          </form>
        </div>
      </section>

      {/* RIGHT: visual column (placeholder only) */}
      <section className="hidden md:block bg-violet-200" aria-hidden />
    </main>
  );
}
