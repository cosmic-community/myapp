import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import type { TeamMember } from '@/types'

export const metadata = {
  title: 'فريقنا - موقع الشركة',
  description: 'تعرف على أعضاء فريقنا المحترف',
}

export default async function TeamPage() {
  const team = await getTeamMembers();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">فريقنا</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تعرف على الخبراء الذين يعملون بجد لتحقيق أهدافك وتحويل رؤيتك إلى واقع
          </p>
        </div>

        {team.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member: TeamMember) => (
              <TeamMemberCard key={member.id} member={member as TeamMember} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">لا يوجد أعضاء فريق متاحين حالياً</p>
        )}
      </div>
    </div>
  )
}