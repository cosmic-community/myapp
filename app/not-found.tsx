import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">الصفحة غير موجودة</h2>
        <p className="text-xl text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
        <Link 
          href="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  )
}