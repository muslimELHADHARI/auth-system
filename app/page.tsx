import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Auth System</h1>
          <p className="mt-3 text-gray-600">A secure authentication system built with Next.js and Express</p>
        </div>
        <div className="flex flex-col space-y-4 mt-8">
          <Button asChild className="w-full">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
