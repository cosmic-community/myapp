'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">خطأ</h1>
        <h2 className="text-3xl font-bold mb-4">حدث خطأ غير متوقع</h2>
        <p className="text-xl text-gray-600 mb-8">نعتذر عن الإزعاج، يرجى المحاولة مرة أخرى</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
          >
            إعادة المحاولة
          </button>
          <Link 
            href="/"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}