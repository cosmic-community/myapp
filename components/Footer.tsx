import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">شركتنا</h3>
            <p className="text-gray-400 mb-4">
              نقدم حلولاً تقنية متكاملة لمساعدة الأعمال على النمو والازدهار في العصر الرقمي
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  دراسات الحالة
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  الفريق
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>تطوير المواقع الإلكترونية</li>
              <li>تطوير تطبيقات الموبايل</li>
              <li>التسويق الرقمي</li>
              <li>تصميم UI/UX</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>البريد الإلكتروني: info@company.com</li>
              <li>الهاتف: +966 50 123 4567</li>
              <li>العنوان: الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} شركتنا. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}