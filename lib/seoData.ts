interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://localhost:3000';

export const seoData: PageSEO = {
    home: {
      title: 'Oxedev - Custom Websites for Small Businesses and Entrepreneurs',
      description: 'I create fast, scalable, and professional websites for businesses that want to grow online. Custom designs using React and Next.js to fit your brand and goals.',
      keywords: ['website development', 'freelance developer', 'custom websites', 'web designer', 'next.js', 'react', 'freelancer brazil', 'oxedev'],
      canonicalUrl: siteUrl,
    },
    contact: {
      title: 'Contact | Oxedev - Let’s Build Your Website',
      description: 'Get in touch to start your website project. I work with businesses of all sizes to deliver custom, high-performing websites.',
      keywords: ['contact web developer', 'hire website developer', 'custom website quote', 'oxedev contact'],
      canonicalUrl: `${siteUrl}/contact`,
    },
    about: {
      title: 'About | Oxedev - Professional Website Development',
      description: 'I’m Ítalo, a software engineer helping entrepreneurs and small businesses go digital. Learn more about my mission and skills.',
      keywords: ['about developer', 'oxedev about', 'freelancer brazil', 'website developer profile'],
      canonicalUrl: `${siteUrl}/about`,
    },
    portfolio: {
      title: 'Portfolio | Oxedev - My Recent Website Projects',
      description: 'Explore professional websites I’ve built for clients. From appointment booking systems to landing pages, see what I can build for you.',
      keywords: ['website portfolio', 'freelance projects', 'next.js portfolio', 'website examples'],
      canonicalUrl: `${siteUrl}/portfolio`,
    },
    services: {
      title: 'Services | Oxedev - Website Creation, SEO & Landing Pages',
      description: 'I offer custom website development using React/Next.js, landing page creation, blog automation, and SEO optimization.',
      keywords: ['website services', 'landing page development', 'seo for websites', 'react next.js services'],
      canonicalUrl: `${siteUrl}/services`,
    },
  };
  

export const getPortfolioProjectSEO = (id: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Portfolio | Mone`,
    description: excerpt,
    keywords: ['portfolio', 'project', title.toLowerCase()],
    canonicalUrl: `${siteUrl}/portfolio/${id}`,
});

export const getBlogPostSEO = (slug: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Blog | Mone`,
    description: excerpt,
    keywords: ['blog', 'article', ...title.toLowerCase().split(' ')],
    canonicalUrl: `${siteUrl}/blog/${slug}`,
});