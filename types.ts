// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    short_description: string;
    detailed_description?: string;
    icon?: string;
    service_image?: {
      url: string;
      imgix_url: string;
    };
    price?: string;
    features?: string[];
  };
}

// Team Member type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    position: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    social_links?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      behance?: string;
      dribbble?: string;
      stackoverflow?: string;
    };
  };
}

// Testimonial type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    position?: string;
    company?: string;
    testimonial_text: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: {
      key: string;
      value: string;
    };
    featured?: boolean;
  };
}

// Case Study type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title: string;
    client_name: string;
    project_type?: {
      key: string;
      value: string;
    };
    project_description: string;
    challenges?: string;
    solutions?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    completion_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

export interface CosmicSingleResponse<T> {
  object: T;
}