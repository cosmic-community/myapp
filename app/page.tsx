import Link from 'next/link'
import { getServices, getFeaturedTestimonials, getCaseStudies } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import type { Service, Testimonial, CaseStudy } from '@/types'

export default async function HomePage() {
  const [services, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getFeaturedTestimonials(),
    getCaseStudies(),
  ]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              نحول أفكارك الرقمية إلى واقع
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              نقدم حلولاً تقنية متكاملة تساعدك على تحقيق أهدافك وتطوير أعمالك
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/services"
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
              >
                استكشف خدماتنا
              </Link>
              <Link 
                href="/case-studies"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors border-2 border-white/30"
              >
                شاهد أعمالنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+150</div>
              <div className="text-gray-600">مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+100</div>
              <div className="text-gray-600">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">نسبة الرضا</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
            <p className="text-xl text-gray-600">نقدم مجموعة شاملة من الخدمات التقنية</p>
          </div>
          
          {services.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {services.map((service: Service) => (
                  <ServiceCard key={service.id} service={service as Service} />
                ))}
              </div>
              <div className="text-center">
                <Link 
                  href="/services"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  عرض جميع الخدمات
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">لا توجد خدمات متاحة حالياً</p>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">دراسات الحالة</h2>
              <p className="text-xl text-gray-600">اطلع على بعض مشاريعنا الناجحة</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {caseStudies.slice(0, 2).map((caseStudy: CaseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} />
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/case-studies"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                عرض جميع دراسات الحالة
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
              <p className="text-xl text-gray-600">آراء عملائنا الكرام</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial: Testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial as Testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في تحقيق أهدافك الرقمية. تواصل معنا اليوم لمناقشة مشروعك
          </p>
          <Link 
            href="/team"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
          >
            تعرف على فريقنا
          </Link>
        </div>
      </section>
    </div>
  )
}