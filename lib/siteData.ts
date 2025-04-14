import HeroAvatar from '@/public/images/hero-avatar.jpg';
import ClientLogo from '@/public/images/client-logo.jpg';
import BlogImg from '@/public/images/blog-img.jpg'
import BlogImg2x from '@/public/images/blog-img@2x.jpg'
import BlogImgWide from '@/public/images/blog-img-wide.jpg'
import PortfolioImg1 from '@/public/images/portfolio-1.jpg';
import PortfolioImgWide from '@/public/images/portfolio-img-wide-example.jpg';
import shiftApp from '@/public/images/shift-app-normal.jpg';
import shiftAppWide from '@/public/images/shift-app-wide.jpg';
import shiftApp2x from '@/public/images/shift-app-2x.jpg';
import marcelaRodrigues from '@/public/images/marcelaRodrigues.jpg';

export const headerData = {
    logo: 'IM',
    navlinks: [
        {
            url: '/#about',
            title: 'About',
        },
        {
            url: '/#services',
            title: 'Services',
        },
        {
            url: '/#portfolio',
            title: 'Portfolio',
        },
        {
            url: '/#awards',
            title: 'Awards',
        },
        {
            url: '/#testimonial',
            title: 'Testimonial',
        },
        // {
        //     url: '/#blog',
        //     title: 'Blog',
        // },
        {
            url: '/#contact',
            title: 'Contact',
        },
    ],
};

export const aboutData = {
    mainData: {
        name: "Italo Magno",
        heroAvatar: HeroAvatar,
        /* `I'm Ítalo, a passionate software engineer and entrepreneur currently based in Ireland, with over four years of professional experience in full-stack and front-end development. My journey began not only with a fascination for technology but also with a desire to create meaningful digital experiences that connect people, solve real-world problems, and elevate brands.

🇧🇷 From Brazil to the World
Originally from Brazil, I earned recognition early in my career for both my technical aptitude and personal discipline. During my time in the Brazilian Air Force, I was honored with the title of Most Disciplined in my squad and graduated as the top physics student in my university class. These experiences taught me the value of precision, perseverance, and purpose—qualities that continue to define my approach to software development today.

After building internal systems to optimize operations within the Air Force—including a custom shift and scheduling management platform—I realized my potential to deliver digital tools that genuinely improve people’s lives. This realization marked the beginning of a deeper commitment to software development and entrepreneurship.

👨‍💻 My Career as a Developer
As a developer, I specialize in JavaScript, TypeScript, React, Node.js, and modern web technologies. My work is grounded in solid UI/UX principles, accessibility best practices, and scalable architecture. I’ve worked across the entire stack, from building beautiful, performant front-end interfaces to crafting RESTful APIs and deploying cloud-based applications.

I am particularly passionate about front-end performance, clean architecture, and intuitive user experiences. Whether I’m coding a landing page, building a CMS for a client, or optimizing an existing site, I bring a strong sense of ownership and attention to detail to every line of code.

💡 Launching My New Venture: Website Builders
In 2025, I decided to take the next step in my career and launched a website-building agency dedicated to helping individuals and businesses build powerful, beautiful, and results-driven websites.

The vision is simple: empower people through modern digital presence.

Our core offerings include:

🚀 Fast, scalable websites using React and Next.js

🎯 Custom landing pages optimized for conversions

🧠 AI-powered blog content creation

🔧 All-in-one solutions for online presence—from design to deployment

With a strong focus on personalization, performance, and long-term results, we aim to be more than just developers—we want to be strategic partners in your online success.

🌍 Life in Ireland and Growth Abroad
Living in Ireland has expanded my worldview and given me new perspectives on working in multicultural, global environments. While I continue to grow my business, I remain committed to continuous learning, ethical development, and building genuine relationships with clients and collaborators.

🔧 Tech Stack & Tools I Love
Languages: JavaScript, TypeScript, HTML, CSS/SCSS, SQL

Frameworks & Libraries: React, Next.js, Node.js, Express, Tailwind CSS

Tools: Git, VS Code, Postman, Vercel, Firebase

Other Skills: SEO fundamentals, web performance optimization, AI-powered automation, project management

📚 Philosophy & Personal Mission
I believe that technology is most impactful when it’s accessible, purposeful, and human-centered. I see every project as an opportunity to bring ideas to life, to empower someone to tell their story, or to help a business reach the next level.

I strive to work with curiosity, courage, and a commitment to excellence.

“Build with intention. Deliver with impact.”

📬 Let’s Connect
If you’re looking for someone to build your website, improve your online presence, or even brainstorm ideas for your brand—I’d love to connect. Whether you're a small business owner, startup founder, or someone with a vision, I’m here to help you bring it to life on the web.

✨ Final Touches
Would you like this biography to include:

Portfolio or website link?

Client testimonials?

A call-to-action for contacting you?

Let me know if you'd like it in Portuguese as well, or if you want it to be a little more informal for social media or a personal blog.`, */
        biography: `Passionate software engineer and entrepreneur from Brazil, now based in Ireland, with 4+ years of experience crafting high-performance web solutions. I blend technical expertise (JavaScript, React, Node.js) with a disciplined mindset—honed during my time in the Brazilian Air Force—to build scalable, user-centric digital experiences.`,
        projectsDone: "104",
        yearsOfExperience: "4",
        worldwideClients: "15+",
    },
    skills: [
        {
            name: '💻 Web Development',
        },
        {
            name: '🎨 UI & UX Design',
        },
       /*  {
            name: 'Marketing',
        }, */
        {
            name: '📈 SEO',
        },
        {
            name: '📋 Management',
        },
    ],
    connect: [
       /*  {
            url: '#',
            bootstrapIcon: 'bi bi-facebook',
        },
        {
            url: '#',
            bootstrapIcon: 'bi bi-twitter-x',
        }, */
        {
            url: 'https:instagram.com/italomagno_',
            bootstrapIcon: 'bi bi-instagram',
        },
    ]
};

export const servicesData = {
    mainData: {
        title: "Services",
        title2: "What I",
        title2Span: "Do",
    },
    services: [
        {
            number: '01',
            bootstrapIcon: 'bi bi-code-slash',
            title: 'Custom Web Development',
            description: 'High-performance websites and web apps built with React, Next.js, and Node.js. From sleek landing pages to complex SaaS platforms—I deliver scalable solutions tailored to your business goals.',
        },
        {
            number: '02',
            bootstrapIcon: 'bi bi-lightning-charge',
            title: 'SEO-Optimized Websites',
            description: 'Fast, Google-friendly sites designed to rank. Includes technical SEO audits, content structuring, and performance optimization to boost your organic traffic and conversions.',
        },
        {
            number: '03',
            bootstrapIcon: 'bi bi-robot',
            title: 'AI-Powered Solutions',
            description: 'Integrate AI tools like automated content generation, chatbots, and data analysis into your workflow—making your business smarter and more efficient.',
        }
    ]
};

export const clientsData = {
    clients: [
        {
            url: '#',
            logo: ClientLogo,
        },
        {
            url: '#',
            logo: ClientLogo,
        },
        {
            url: '#',
            logo: ClientLogo,
        },
        {
            url: '#',
            logo: ClientLogo,
        },
        {
            url: '#',
            logo: ClientLogo,
        },
        {
            url: '#',
            logo: ClientLogo,
        },
    ]
};

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Recent",
        title2Span: "Works",
        description: "A showcase of my latest projects, highlighting my skills and experience in web development."
  },
    projects: [
        {
            title: 'Social Media Assistant',
            slug: 'social-media-assistant',
            description: 'This project serves as a showcase of my ability to take existing projects and adapt them by implementing unique features and applying my personal style. For this particular project, I introduced a Google Translate feature, enabling users to seamlessly switch between languages for improved accessibility. Additionally, I integrated a custom training model specifically designed to assist in generating high-quality content for social media platforms. This implementation highlights my expertise in combining functionality with user-centric design, offering practical solutions for real-world applications.',
            keywords: 'chatgpt, social media, real-world, user-centric, high-quality, custom training model, google translate, chatgpt, social media, real-world, user-centric, high-quality, custom training model, google translate',
            categories: [
                { name: 'AI', },
                { name: 'Social Media' },
                { name: 'App' },
             /*    { name: 'Beauty Saloon' },
                { name: 'Restaurants' }, */

            ],
            services: [
                { name: 'AI' },
                { name: 'Social Media' },
            ],
            client: 'Myself',
            duration: '20 Hours',
            projectLink: {
                title: 'chatbot-trial.vercel.app',
                url: 'chatbot-trial.vercel.app'
            },
            content: `
            <p class="text-white/70">
  This project is a smart chatbot assistant designed to be easily integrated into any website. It helps improve user engagement by answering questions, guiding visitors through the site, and providing support 24/7. Built with modern web technologies, it's customizable, fast, and responsive.
</p>

<h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Chatbot Assistant for Websites</h5>

<p class="text-white/70">
  The chatbot is built using JavaScript and integrates with APIs to deliver dynamic answers based on user input. It includes features such as context awareness, multi-language support, and customizable UI to match any site’s design. Ideal for businesses looking to automate customer service or guide users efficiently. The code is available on 
  <a href="https://github.com/italomagno/chatbot-trial" class="underline text-white">GitHub</a>, and contributions are welcome.
</p>   
            `,
            mainImage: PortfolioImg1,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg1,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg1,
                url: 'https://www.youtube.com/'
            },
            trending: true
        },
        {
            title: 'Shifts App',
            slug: 'shifts-app',
            description: 'A dynamic shift management system built for the Brazilian Air Force to streamline operational scheduling. Inspired by cinema seat selection, it enables users to view and book available shift slots with ease and precision.',
            keywords: 'shift management, schedule app, Google Sheets, Chakra UI, Next.js',
            categories: [
              { name: 'Shifts' },
              { name: 'Business' },
              { name: 'App' },
            ],
            services: [
              { name: 'Web App Development' },
              { name: 'Google Sheets Integration' },
            ],
            client: 'Brazilian Airforce',
            duration: '60 Hours',
            projectLink: {
              title: 'www.shifts.oxedev.com.br',
              url: 'https://shifts.oxedev.com.br'
            },
            content: `
              <p class="text-white/70">This project was born from a real operational need. My colleagues at the Brazilian Air Force were struggling with shift scheduling, so I decided to create an intuitive tool to solve this problem. The interface is similar to choosing seats at the movies: each slot can be selected only once, and updates in real-time for all users.</p>
              <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Built with Purpose</h5>
              <p class="text-white/70">Using Chakra UI and Next.js, I crafted a responsive and user-friendly front end. For the backend, I implemented a custom database layer with Google Sheets and Google APIs to allow easy data handling and ensure everyone in the team could access the latest schedule from anywhere.</p>
              <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Key Features</h5>
              <p class="text-white/70">✔️ Dynamic shift visualization and selection<br/>✔️ Real-time availability updates<br/>✔️ Easy integration with Google Sheets<br/>✔️ Fully responsive UI with Chakra UI</p>
            `,
            mainImage: shiftApp,
            wideImage: shiftAppWide,
            imagesLightbox: {
                image: shiftApp2x,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: shiftApp2x,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: true
        },
        /* {
            title: 'Project Title 3',
            slug: 'project-title-3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg1,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg1,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg1,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: true
        },
        {
            title: 'Project Title 4',
            slug: 'project-title-4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg1,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg1,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg1,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: true
        },
        {
            title: 'Project Title 5',
            slug: 'project-title-5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg1,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg1,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg1,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: false
        },
        {
            title: 'Project Title 6',
            slug: 'project-title-6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg1,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg1,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg1,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: false
        }, */
    ]
};

export const blogData = {
    mainData: {
        title: "Journal",
        title2: "Blog",
        title2Span: "Posts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    posts: [
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Jan 12',
            postedBy: 'admin',
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: BlogImg,
            wideImage: BlogImgWide,
            imagesLightbox: {
                image: BlogImg2x,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: BlogImg2x,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: 'Tag1' },
                { name: 'Tag2' },
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Jan 12',
            postedBy: 'admin',
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: BlogImg,
            wideImage: BlogImgWide,
            imagesLightbox: {
                image: BlogImg2x,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: BlogImg2x,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: 'Tag1' },
                { name: 'Tag2' },
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Jan 12',
            postedBy: 'admin',
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: BlogImg,
            wideImage: BlogImgWide,
            imagesLightbox: {
                image: BlogImg2x,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: BlogImg2x,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: 'Tag1' },
                { name: 'Tag2' },
            ]
        },
    ],
};

export const awardsData = {
    mainData: {
        title: "Achievements",
        title2: "Awa",
        title2Span: "rds",
    },
    awards: [
        {
            title: 'Fast Past Program Selectee',
            date: '2024',
            description: 'Chosen among top-performing students at Mate Academy for accelerated career development, recognizing exceptional technical skills and leadership potential in software engineering.',
        },
        {
            title: 'Air Force Innovation Award',
            date: '2021',
            description: 'Honored for developing an operational efficiency system that improved shift management for 200+ personnel.',
        },
        {
            title: 'Most Disciplined Sargent',
            date: '2019',
            description: 'Awarded by the Brazilian Air Force for exceptional discipline and leadership during military training.',
        },
        {
            title: 'Top Physics Graduate',
            date: '2016',
            description: 'Recognized as the highest-scoring physics student in my university class, demonstrating analytical excellence and problem-solving skills.',
        },
    ]
};


export const testimonialData = {
    testimonial: [
        {
            name: 'Marcela Rodrigues',
            avatar: marcelaRodrigues,
            jobTitle: 'Cleaner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        },
      /*   {
            name: 'Alexander Warren',
            avatar: TestimonialAvatar,
            jobTitle: 'CTO - Company',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        }, */
    ]
};

export const contactData = {
    mainData: {
        title: "Contact",
        title2: "Let's",
        title2Span: "Talk",
        phone: "+353 083 412 6494",
        email: "italomagno10@gmail.com",
    }
};

export const mapData = {
    mainData: {
        lat: 53.362631,
        lng: -6.201827,
    },
};

export const footerData = {
    copyWriteText: 'Italo Magno, All Rights Reserved.',
};
