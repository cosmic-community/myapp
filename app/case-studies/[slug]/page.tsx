// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import Link from 'next/link'
import type { CaseStudy } from '@/types'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  
  return caseStudies.map((caseStudy: CaseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);
  
  if (!caseStudy) {
    return {
      title: 'دراسة الحالة غير موجودة',
    };
  }

  const caseStudyData = caseStudy as CaseStudy;
  
  return {
    title: `${caseStudyData.metadata.project_title} - موقع الشركة`,
    description: caseStudyData.metadata.project_description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const caseStudyData = caseStudy as CaseStudy;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة إلى دراسات الحالة
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudyData.metadata.project_title}</h1>
            <div className="flex flex-wrap gap-4 text-lg text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {caseStudyData.metadata.client_name}
              </div>
              {caseStudyData.metadata.project_type && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {caseStudyData.metadata.project_type.value}
                </div>
              )}
              {caseStudyData.metadata.completion_date && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(caseStudyData.metadata.completion_date).toLocaleDateString('ar-SA')}
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {caseStudyData.metadata.featured_image && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={`${caseStudyData.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={caseStudyData.metadata.project_title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Project Description */}
          <div className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">نظرة عامة على المشروع</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudyData.metadata.project_description}
            </p>
          </div>

          {/* Challenges */}
          {caseStudyData.metadata.challenges && (
            <div className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-red-900">التحديات</h2>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudyData.metadata.challenges }}
              />
            </div>
          )}

          {/* Solutions */}
          {caseStudyData.metadata.solutions && (
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">الحلول</h2>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudyData.metadata.solutions }}
              />
            </div>
          )}

          {/* Results */}
          {caseStudyData.metadata.results && (
            <div className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-green-900">النتائج</h2>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudyData.metadata.results }}
              />
            </div>
          )}

          {/* Gallery */}
          {caseStudyData.metadata.gallery && caseStudyData.metadata.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">معرض الصور</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudyData.metadata.gallery.map((image: { url: string; imgix_url: string }, index: number) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img 
                      src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                      alt={`${caseStudyData.metadata.project_title} - صورة ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center bg-primary text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">هل لديك مشروع مشابه؟</h2>
            <p className="text-lg mb-6">دعنا نساعدك على تحقيق نجاح مماثل لمشروعك</p>
            <Link 
              href="/services"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              استكشف خدماتنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}