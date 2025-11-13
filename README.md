# موقع شركة احترافي بالعربية

![App Preview](https://imgix.cosmicjs.com/19229730-c0e0-11f0-9757-a1b2350abfc3-photo-1460925895917-afdab827c52f-1763072914057.jpg?w=1200&h=300&fit=crop&auto=format,compress)

موقع ويب شامل وحديث مصمم خصيصًا للشركات العربية. يعرض الخدمات، أعضاء الفريق، شهادات العملاء، ودراسات الحالة بتصميم احترافي يدعم اللغة العربية بالكامل مع واجهة من اليمين إلى اليسار (RTL).

## ✨ Features

- 🌐 **دعم كامل للغة العربية** مع تصميم RTL محسّن
- 🎨 **تصميم حديث ومتجاوب** يعمل على جميع الأجهزة
- 🏢 **عرض شامل للخدمات** مع صفحات تفصيلية لكل خدمة
- 👥 **معرض أعضاء الفريق** مع روابط التواصل الاجتماعي
- ⭐ **شهادات العملاء** بتقييمات نجمية تفاعلية
- 📊 **دراسات حالة مفصلة** مع معارض الصور
- 🚀 **أداء عالي** مع Next.js 16 و React Server Components
- 📱 **تحسين الصور** باستخدام imgix
- 🎭 **تأثيرات حركية ناعمة** لتجربة مستخدم مميزة

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69165a43e7349beda291bdc8&clone_repository=69165f40e7349beda291be10)

## 📝 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies in Arabic"

### Code Generation Prompt

> "Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies in Arabic", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface in Arabic."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and delivery

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the bucket configured

### Installation

1. Clone the repository and install dependencies:

```bash
bun install
```

2. Set up your environment variables:

```bash
# .env.local
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Case Study

```typescript
const { object: caseStudy } = await cosmic.objects
  .findOne({
    type: 'case-studies',
    slug: params.slug
  })
  .depth(1)
```

### Fetching Team Members

```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application leverages your Cosmic bucket's content structure:

- **Services (services)** - Display company services with icons, descriptions, and pricing
- **Team Members (team-members)** - Showcase team with photos and social links
- **Testimonials (testimonials)** - Client testimonials with ratings and photos
- **Case Studies (case-studies)** - Detailed project case studies with image galleries

All content is fetched dynamically from your Cosmic bucket, making it easy to update without touching code.

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy with Vercel" button
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button
2. Connect your repository
3. Add environment variables in the Netlify dashboard
4. Deploy!

## 📖 Learn More

- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->