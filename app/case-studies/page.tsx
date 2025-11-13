import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import type { CaseStudy } from '@/types'

export const metadata = {
  title: 'دراسات الحالة - موقع الشركة',
  description: 'اطلع على مشاريعنا الناجحة ودراسات الحالة',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">دراسات الحالة</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اطلع على بعض المشاريع الناجحة التي أنجزناها لعملائنا وكيف ساعدناهم على تحقيق أهدافهم
          </p>
        </div>

        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">لا توجد دراسات حالة متاحة حالياً</p>
        )}
      </div>
    </div>
  )
}