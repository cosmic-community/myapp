// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getService, getServices } from '@/lib/cosmic'
import Link from 'next/link'
import type { Service } from '@/types'

export async function generateStaticParams() {
  const services = await getServices();
  
  return services.map((service: Service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);
  
  if (!service) {
    return {
      title: 'الخدمة غير موجودة',
    };
  }

  const serviceData = service as Service;
  
  return {
    title: `${serviceData.metadata.service_name} - موقع الشركة`,
    description: serviceData.metadata.short_description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const serviceData = service as Service;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/services"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة إلى الخدمات
          </Link>

          {/* Service Header */}
          <div className="text-center mb-12">
            {serviceData.metadata.icon && (
              <div className="text-6xl mb-4">{serviceData.metadata.icon}</div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceData.metadata.service_name}</h1>
            <p className="text-xl text-gray-600">{serviceData.metadata.short_description}</p>
            {serviceData.metadata.price && (
              <div className="mt-6 inline-block bg-secondary/10 text-secondary px-6 py-3 rounded-lg text-lg font-bold">
                {serviceData.metadata.price}
              </div>
            )}
          </div>

          {/* Service Image */}
          {serviceData.metadata.service_image && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={`${serviceData.metadata.service_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={serviceData.metadata.service_name}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Detailed Description */}
          {serviceData.metadata.detailed_description && (
            <div className="mb-12 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">تفاصيل الخدمة</h2>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: serviceData.metadata.detailed_description }}
              />
            </div>
          )}

          {/* Features */}
          {serviceData.metadata.features && serviceData.metadata.features.length > 0 && (
            <div className="bg-gradient-to-br from-primary/5 to-primary-light/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">مميزات الخدمة</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceData.metadata.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-accent ml-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center bg-primary text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">هل تريد معرفة المزيد؟</h2>
            <p className="text-lg mb-6">تواصل معنا اليوم لمناقشة احتياجاتك وكيف يمكننا مساعدتك</p>
            <Link 
              href="/team"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              تواصل مع فريقنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}