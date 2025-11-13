import Link from 'next/link'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link 
      href={`/case-studies/${caseStudy.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {caseStudy.metadata.featured_image && (
        <div className="relative h-64 overflow-hidden">
          <img 
            src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={caseStudy.metadata.project_title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {caseStudy.metadata.project_type && (
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
              {caseStudy.metadata.project_type.value}
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {caseStudy.metadata.project_title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          العميل: {caseStudy.metadata.client_name}
        </p>
        
        <p className="text-gray-700 mb-4 line-clamp-3">
          {caseStudy.metadata.project_description}
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