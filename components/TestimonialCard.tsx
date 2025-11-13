import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (ratingKey: string) => {
    const rating = parseInt(ratingKey);
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating;
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      );
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        {testimonial.metadata.client_photo && (
          <img 
            src={`${testimonial.metadata.client_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.client_name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="font-bold text-lg">{testimonial.metadata.client_name}</h3>
          {testimonial.metadata.position && (
            <p className="text-gray-600 text-sm">{testimonial.metadata.position}</p>
          )}
          {testimonial.metadata.company && (
            <p className="text-primary text-sm font-medium">{testimonial.metadata.company}</p>
          )}
        </div>
      </div>
      
      {testimonial.metadata.rating && (
        <div className="flex text-yellow-400 mb-4">
          {renderStars(testimonial.metadata.rating.key)}
        </div>
      )}
      
      <p className="text-gray-700 leading-relaxed">
        "{testimonial.metadata.testimonial_text}"
      </p>
    </div>
  )
}