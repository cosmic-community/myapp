import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import type { Service } from '@/types'

export const metadata = {
  title: 'خدماتنا - موقع الشركة',
  description: 'اطلع على جميع الخدمات التي نقدمها',
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية المتخصصة لمساعدة أعمالك على النمو والازدهار
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service as Service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">لا توجد خدمات متاحة حالياً</p>
        )}
      </div>
    </div>
  )
}