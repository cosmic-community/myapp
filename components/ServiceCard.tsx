import Link from 'next/link'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link 
      href={`/services/${service.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {service.metadata.service_image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={`${service.metadata.service_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          {service.metadata.icon && (
            <div className="text-4xl">{service.metadata.icon}</div>
          )}
          {service.metadata.price && (
            <div className="text-secondary font-bold text-sm">
              {service.metadata.price}
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {service.metadata.service_name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.metadata.short_description}
        </p>
        
        <div className="flex items-center text-primary font-medium">
          <span className="ml-2">اقرأ المزيد</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}