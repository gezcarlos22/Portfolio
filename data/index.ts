import { title } from "process";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "Service", link: "/service" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/AboutMe/banner.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Where my code and design ignite inspiration, and your coding journey can begin",
    description: "My blog:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: "1",
    title: "Mappeando",
    title2: "Mappeando",
    des: "Application that allows users to choose routes within a city and obtain exact directions to take the ride shared with other people.",
    category: "UX/UI Design",
    img: "/Projects/ux_ui/img_mappeando.jpg",
    iconLists: [
      "/HardSkills/figma.svg",
      "/HardSkills/photoshop.svg",
      "/HardSkills/adobe_i.svg",
    ],
    link: "https://www.behance.net/gallery/214774925/MAPPEANDO",
  },
  {
    id: "2",
    title: "Heartbook",
    title2: "Heartbook",
    des: "Heartbook is a mobile app I designed and developed for buying and selling new and used books.",
    img: "/Projects/ux_ui/img_heatbook.png",
    category: "UX/UI Design",
    iconLists: [
      "/HardSkills/figma.svg",
      "/HardSkills/photoshop.svg",
      "/HardSkills/adobe_i.svg",
    ],
    link: "https://www.behance.net/gallery/224370529/HeartBook-App",
  },
  {
    id: "3",
    title: "Calm Connect",
    title2: "Calm Connect",
    des: "CalmConnect is created to provide immediate attention and thus give them the therapeutic tools so they can achieve emotional well-being.",
    img: "/Projects/ux_ui/img_calmconnect.png",
    category: "UX/UI Design",
    iconLists: [
      "/HardSkills/figma.svg",
      "/HardSkills/photoshop.svg",
      "/HardSkills/adobe_i.svg",
    ],
    link: "https://www.behance.net/gallery/202495197/Calm-Connect",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "/Testimonials/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "/Testimonials/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "/Testimonials/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "/Testimonials/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "/Testimonials/profile.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Jr. ",
    desc: "During this program, I acquired fundamental skills in front-end and back-end development, including coding, database management, and application deployment.",
    className: "md:col-span-2",
    thumbnail: "/Experience/full-stack.png",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed a comprehensive mobile application for both iOS & Android platforms using React Native, ensuring a seamless and intuitive user experience across devices.",
    className: "md:col-span-2",
    thumbnail: "/Experience/ux-ui.png",
  },
  {
    id: 3,
    title: "Data Science & IA",
    desc: "My main focus would be on interpreting data and creating robust predictive models, extracting meaningful insights that drive strategic decisions.",
    className: "md:col-span-2",
    thumbnail: "/Experience/data-science.png",
  },
  {
    id: 4,
    title: "Advanced UX/UI Design",
    desc: "My process involves constantly refining the user experience and interface, designing flows and screens that ensure fluid and user-focused interactions, with a focus on creating interfaces for mobile apps.",
    className: "md:col-span-2",
    thumbnail: "/Experience/fullstack.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/SocialMedia/git.svg",
    name: "GitHub",
  },
  {
    id: 2,
    img: "/SocialMedia/behance.svg",
    name: "Behance",
  },
  {
    id: 3,
    img: "/SocialMedia/link.svg",
    name: "Linkedin",
  },
  {
    id: 4,
    img: "/SocialMedia/insta.svg",
    name: "Instagram",
  },
];

export const dataTestimonials = [
  {
    quote:
      "Hello everyone! I'm Gez Carlos, and it's a pleasure to share a little about myself. From my home in Córdoba, Argentina, I immerse myself in web and mobile app development. My professional career spans from design to data analysis.",
    name: "My Digital World",
    designation:
      '"Every line of code is a step toward creating something extraordinary"',
    src: "/AboutMe/perfil.jpg",
  },
  {
    quote:
      "Each project is an opportunity to merge functionality and aesthetics, creating inspiring digital experiences. I enjoy every stage, from conception to the realization of a robust and easy-to-use website or app.",
    name: "The Passion for Creating",
    designation:
      "\"Technology isn't just code, it's the extension of our ideas and the connection between people\"",
    src: "/AboutMe/perfil3.jpg",
  },
  {
    quote:
      "In a field as dynamic as programming, there's always something new to discover. This insatiable curiosity keeps me constantly evolving, always searching for the next tool or paradigm.",
    name: "Constant Learning",
    designation:
      '"In programming, learning never ends; every day is a new opportunity to grow"',
    src: "/AboutMe/compu.jpg",
  },
  {
    quote:
      "I deeply value my time away from work, especially when I'm spending time with friends or exercising. These moments are my way of recharging, my way of balancing my mind and body.",
    name: "Genuine Connections",
    designation: '"Balance is the key to creativity and productivity"',
    src: "/AboutMe/frends.jpg",
  },
  {
    quote:
      "If you're looking for someone passionate about web and mobile development, with a focus on design and data analysis, and who enjoys working in a team, don't hesitate to contact me! I'm ready to build something amazing together.",
    name: "Looking for New Challenges",
    designation:
      '"I\'m always ready for the next challenge, to transform ideas into digital reality"',
    src: "/AboutMe/wireframes.png",
  },
];

export const hardSkills = [
  { id: 1, image: "/HardSkills/html-5.svg" },
  { id: 2, image: "/HardSkills/css.svg" },
  { id: 3, image: "/HardSkills/javascript.svg" },
  { id: 4, image: "/HardSkills/ts.svg" },
  { id: 5, image: "/HardSkills/c.svg" },
  { id: 6, image: "/HardSkills/java.svg" },
  { id: 7, image: "/HardSkills/python.svg" },
  { id: 8, image: "/HardSkills/angular.svg" },
  { id: 9, image: "/HardSkills/react.svg" },
  { id: 10, image: "/HardSkills/bootstrap.svg" },
  { id: 11, image: "/HardSkills/tail.svg" },
  { id: 12, image: "/HardSkills/mysql.svg" },
  { id: 13, image: "/HardSkills/nodejs.svg" },
  { id: 14, image: "/HardSkills/spring.svg" },
  { id: 15, image: "/HardSkills/selenium.svg" },
  { id: 16, image: "/HardSkills/doker.svg" },
  { id: 17, image: "/HardSkills/figma.svg" },
  { id: 18, image: "/HardSkills/aws.svg" },
];

export const softSkills = [
  {
    id: 1,
    title: "Effective Communication",
    desc: "My ability to express complex ideas clearly and concisely, both orally and in writing, is crucial. This allows me to collaborate effectively with multidisciplinary teams, understand client requirements, present my technical solutions, and translate design or data concepts into language comprehensible to everyone.",
    className: "md:col-span-2",
    thumbnail: "/SoftSkills/Comunication.png",
  },
  {
    id: 2,
    title: "Problem Solving",
    desc: "I have the ability to identify, analyze, and find creative and efficient solutions to challenges that arise. In my development, design, and data science work, I constantly face errors, changing requirements, or ambiguous data, and I am proactive in seeking solutions.",
    className: "md:col-span-2",
    thumbnail: "/SoftSkills/problemSolving.png",
  },
  {
    id: 3,
    title: "Adaptability & Continuous Learning",
    desc: "I possess a great willingness to adjust to new environments, technologies, methodologies, or project changes. I know that the technological field evolves rapidly, so my curiosity and my ability to learn new tools and concepts autonomously are essential to remain relevant and continuously improve.",
    className: "md:col-span-2",
    thumbnail: "/SoftSkills/learning.png",
  },
  {
    id: 4,
    title: "Collaboration and Teamwork",
    desc: "I have the aptitude to work effectively with others, sharing my knowledge, supporting my colleagues, and contributing to the collective success of the project. In development or design teams, synergy and my ability to build upon the ideas of others are vital to achieving superior results.",
    className: "md:col-span-2",
    thumbnail: "/SoftSkills/team.png",
  },
];

export const heroProyects = [
  {
    title: "Mappeando",
    link: "https://www.behance.net/gallery/214774925/MAPPEANDO",
    thumbnail: "/Projects/ux_ui/img_mappeando.jpg",
  },
  {
    title: "Heartbook",
    link: "https://www.behance.net/gallery/224370529/HeartBook-App",
    thumbnail: "/Projects/ux_ui/img_heatbook.png",
  },
  {
    title: "Calm Connect",
    link: "https://www.behance.net/gallery/202495197/Calm-Connect",
    thumbnail: "/Projects/ux_ui/img_calmconnect.png",
  },
  {
    title: "System Calm Connect",
    link: "https://www.behance.net/gallery/214779655/Calm-Connect-Desing-System-Atomic-Desing",
    thumbnail: "/Projects/ux_ui/img_desing_system.png",
  },
  {
    title: "Currency Converter",
    link: "https://github.com/gezcarlos22/ConversorMoneda",
    thumbnail: "/Projects/back_end/currency_converter.jpg",
  },
  {
    title: "Gutendex Literature",
    link: "https://github.com/gezcarlos22/Literatura",
    thumbnail: "/Projects/back_end/gutendex.jpg",
  },
  {
    title: "Basic Calculator",
    link: "https://github.com/gezcarlos22/Calculadora",
    thumbnail: "/Projects/front_end/calculadora.png",
  },
  {
    title: "Numero Secreto",
    link: "https://github.com/gezcarlos22/Numero_Secreto",
    thumbnail: "/Projects/front_end/numero_secreto.png",
  },
  {
    title: "Amigo Secreto",
    link: "https://github.com/gezcarlos22/Amigo_Secreto",
    thumbnail: "/Projects/front_end/amigo_secreto.png",
  },
  {
    title: "Heartbook App",
    link: "https://github.com/gezcarlos22/HeartBook_App",
    thumbnail: "/Projects/app_mobile/heatbook.png",
  },
  {
    title: "Personal Card",
    link: "https://github.com/gezcarlos22/Targeta_Personal",
    thumbnail: "/Projects/app_mobile/tarjeta_personal.png",
  },
  // Proyectos repetidos para completar (si es necesario)
  {
    title: "Personal Card",
    link: "https://github.com/gezcarlos22/Targeta_Personal",
    thumbnail: "/Projects/app_mobile/tarjeta_personal.png",
  },
  {
    title: "Currency Converter",
    link: "https://github.com/gezcarlos22/ConversorMoneda",
    thumbnail: "/Projects/back_end/currency_converter.jpg",
  },
  {
    title: "Calm Connect",
    link: "https://www.behance.net/gallery/202495197/Calm-Connect",
    thumbnail: "/Projects/ux_ui/img_calmconnect.png",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "UX/UI: The Dynamic Duo Behind Your Digital Experience?",
    date: "March 21, 2024",
    category: "UX/UI Design",
    description:
      "These two terms, often used interchangeably, are actually the dynamic duo that determines whether your interaction with a digital product will be smooth and pleasant, or a frustrating nightmare.",
    img: "/Blogs/1/img_ux_ui.jpg",
    contentText:
      '<div class="justify-between py-4"><h2 class="md:tracking-wider my-4 text-sm md:text-lg lg:text-3xl font-bold">UX/UI: The Dynamic Duo Behind Your Digital Experience?</h2><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">Have you ever wondered why some apps are a pleasure to use, while others make you want to throw them out the window? The answer most likely lies in <strong>UX/UI Design</strong>. These two terms, often used interchangeably, are actually the dynamic duo that determines whether your interaction with a digital product will be smooth and pleasant, or a frustrating nightmare.</p><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">But what exactly do UX and UI mean? Let\'s break it down!</p><h2 class="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider">UX: User Experience</h2><div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between"><div><p class="text-sm md:text-base lg:text-lg my-4 tracking-wider">Imagine you\'re building a house. <strong>UX</strong> would be the architect who ensures the house is functional, safe, and comfortable to live in. They don\'t just think about how many rooms there are, but how the space flows, whether the lighting is adequate, if the kitchen is practical for cooking, and if the inhabitants will feel comfortable in it.</p><p class="text-sm md:text-base lg:text-lg my-4 tracking-wider">In the digital world, UX focuses on <strong>how the user feels when interacting with a product</strong>. It covers the entire user journey, from discovering the product to using it regularly. Some key questions a UX designer asks are:</p></div><div class="mx-auto mt-8 w-full max-w-md md:mt-0 lg:max-w-full flex items-center"><div class="overflow-hidden rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 p-6 flex flex-col justify-between items-center"><div class="relative"><img class="w-full h-full object-cover rounded-2xl" src="/Blogs/1/img_ux.jpg" alt="UX Design Example"/></div></div></div></div><ul class="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5"><li><strong>Is it easy to use?</strong> Can the user find what they\'re looking for effortlessly?</li><li><strong>Is it useful?</strong> Does it solve a problem or meet a user need?</li><li><strong>Is it desirable?</strong> Does the user find it attractive and want to use it?</li><li><strong>Is it accessible?</strong> Can it be used by people with different abilities?</li></ul><p class="text-sm md:text-base lg:text-lg my-4 tracking-wider">UX design isn\'t just about the screen, but about research, data analysis, prototyping, and testing to understand user needs and behaviors. It\'s a strategic discipline that seeks to create solutions that truly solve problems and add value.</p></div><hr class="w-full my-4 border-gray-300 border-t-2"/><h2 class="md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl font-bold">UI: User Interface</h2><div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between"><div><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">Returning to our house analogy, <strong>UI</strong> would be the interior designer. Once the architect has defined the structure and functionality, the interior designer takes care of aesthetics: wall colors, furniture selection, decorative lighting, object arrangement. Everything that makes the house visually appealing and easy to use daily.</p><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">In the digital realm, UI focuses on the <strong>appearance and interactivity of a product\'s interface</strong>. Think of buttons, icons, typography, colors, animations, and the arrangement of all elements on the screen. Good UI design aims to:</p></div><div class="mx-auto mt-8 w-full max-w-md md:mt-0 lg:max-w-full flex items-center"><div class="overflow-hidden rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 p-6 flex flex-col justify-between items-center"><div class="relative"><img class="w-full h-full object-cover rounded-2xl" src="/Blogs/1/img_ui.png" alt="UI Design Example"/></div></div></div></div><ul class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg list-disc list-inside"><li><strong>Be visually appealing:</strong> Make the product look professional and modern.</li><li><strong>Be intuitive:</strong> Users should know what to do just by looking at the elements.</li><li><strong>Be consistent:</strong> Elements should behave predictably throughout the product.</li><li><strong>Guide the user:</strong> Visual elements should direct users through key actions.</li></ul><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">While UX focuses on functionality and usability, UI focuses on aesthetics and interactivity. They are two sides of the same coin that, when working in harmony, create exceptional digital products.</p><hr class="w-full my-4 border-gray-300 border-t-2"/><h3 class="md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl font-bold">Why are UX and UI so important?</h3><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">In an increasingly saturated digital market, the difference between a product\'s success and failure often lies in its UX/UI design.</p><ul class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg list-disc list-inside"><li><strong>Improve user satisfaction:</strong> An easy and pleasant product generates happy and loyal users.</li><li><strong>Increase retention:</strong> If users enjoy the experience, they\'re more likely to return.</li><li><strong>Boost conversions:</strong> Good design can guide users toward the desired action, whether a purchase, registration, or subscription.</li><li><strong>Build a strong brand:</strong> A well-designed interface and smooth experience reinforce a brand\'s professional image and quality.</li><li><strong>Reduce long-term costs:</strong> Identifying and fixing usability issues in early development stages is much cheaper than doing so after launch.</li></ul><hr class="w-full my-4 border-gray-300 border-t-2"/><h3 class="md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl font-bold">The Perfect Synergy: UX + UI</h3><div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between"><div><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">In summary, <strong>UX is the what and why</strong> (what problem it solves and why it\'s important to the user), while <strong>UI is the how</strong> (how it looks and how the user interacts with it). A product can have beautiful UI but terrible UX (imagine a car with impressive design but incomprehensible controls). Or it can have fantastic UX but outdated UI (like very functional software with an interface that looks like it\'s from the 90s).</p><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">The true power emerges when UX and UI work hand in hand. A well-thought-out design supported by an attractive and easy-to-use interface is what turns a digital product into a gem. It\'s the key to creating experiences that are not only functional but also memorable and delightful for the user.</p><p class="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">Next time you use your favorite app, take a moment to appreciate the work behind its UX/UI design. It\'s the invisible magic that makes your digital life a little easier and more pleasant.</p></div><div class="mx-auto mt-8 w-full max-w-md md:mt-0 lg:max-w-full flex items-center"><div class="overflow-hidden rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 p-6 flex flex-col justify-between items-center"><div class="relative"><img class="w-full h-full object-cover rounded-2xl" src="/Blogs/1/img_ux_ui2.webp" alt="UX/UI Design Example"/></div></div></div></div>',
  },
  {
    id: "2",
    title: "Tailwind CSS vs Bootstrap: Which One to Choose in 2024?",
    date: "April 04, 2025",
    category: "CSS Frameworks",
    description:
      "The battle between Tailwind CSS (utility framework) and Bootstrap (component framework) divides frontend developers. Which one is better for your next project? We deeply analyze both approaches.",
    img: "/Blogs/2/img_blog2.jpg",

    contentText: `<div className="w-full max-w-7xl sm:px-10 px-5"> <div className="justify-between py-4"> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> 1. What are Tailwind and Bootstrap? </h2> <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between"> <div> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4"> 🔹 Tailwind CSS </h3> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> A <strong>CSS utility</strong> framework that lets you build custom designs directly in the markup: </p> <div className="bg-gray-100 p-4 rounded-lg my-4"> <code className="text-sm text-black"> &lt;button class=&quot;bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-all&quot;&gt; <br /> &nbsp;&nbsp;Tailwind Button <br /> &lt;/button&gt; </code> </div> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> <strong>Key features:</strong> </p> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5"> <li> <strong>&quot;Utility-first&quot;</strong> approach (atomic classes) </li> <li>0 pre-built components</li> <li>Highly configurable</li> <li>Only ~10KB in production</li> </ul> </div> <div> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4"> 🔹 Bootstrap </h3> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> A <strong>predefined component</strong> framework with included JavaScript: </p> <div className="bg-gray-100 p-4 rounded-lg my-4"> <code className="text-sm text-black"> &lt;button class=&quot;btn btn-primary&quot;&gt; <br /> &nbsp;&nbsp;Bootstrap Button <br /> &lt;/button&gt; </code> </div> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> <strong>Key features:</strong> </p> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5"> <li>+20 ready components (navbar, cards, modals)</li> <li>Classic grid system (12 columns)</li> <li>Includes JavaScript for interactive components</li> <li>~50KB (CSS + JS)</li> </ul> </div> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> 2. Technical Comparison </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-blue-600"> ⭐ Tailwind Advantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> <strong>Unique design:</strong> Creates completely original interfaces </li> <li> <strong>Lighter:</strong> Only includes what you use </li> <li> <strong>Better performance:</strong> No unnecessary CSS </li> <li> <strong>Total customization:</strong> Configure your design system </li> </ul> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-red-600"> ⚠ Disadvantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> <strong>Verbose HTML:</strong> Many classes in the markup </li> <li> <strong>Learning curve:</strong> Must learn utility classes </li> <li> <strong>Requires configuration:</strong> Needs PostCSS </li> </ul> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-blue-600"> ⭐ Bootstrap Advantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> <strong>Quick implementation:</strong> Ready-to-use components </li> <li> <strong>Complete documentation:</strong> Easy to learn </li> <li> <strong>Visual consistency:</strong> Coherent design </li> <li> <strong>Included JavaScript:</strong> Interactive components without extra code </li> </ul> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-red-600"> ⚠ Disadvantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> <strong>Generic design:</strong> All sites look similar </li> <li> <strong>Unnecessary CSS:</strong> Lots of unused code </li> <li> <strong>Less flexible:</strong> Difficult customization </li> </ul> </div> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> 3. When to Use Each? </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div className="bg-blue-50 p-6 rounded-lg"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-black"> ✅ Use Tailwind when... </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> You want <strong>unique</strong> and customized designs </li> <li> You work in <strong>large teams</strong> that need consistency </li> <li> You prioritize <strong>performance</strong> and bundle size </li> <li> You're building your own <strong>design system</strong> </li> </ul> </div> <div className="bg-green-50 p-6 rounded-lg"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-black"> ✅ Use Bootstrap when... </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> You need <strong>speed</strong> in development </li> <li> You work on <strong>small projects</strong> or MVPs </li> <li> You don't have a <strong>designer</strong> on the team </li> <li> You want <strong>interactive components</strong> without writing JS </li> </ul> </div> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> 4. Practical Example: Comparing Both Approaches </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4"> 🔹 With Tailwind CSS </h3> <div className="bg-gray-100 p-4 rounded-lg my-4"> <code className="text-sm text-black"> &lt;div class=&quot;max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl&quot;&gt; <br /> &nbsp;&nbsp;&lt;h2 class=&quot;text-xl font-bold text-gray-800 mb-4&quot;&gt;Card Title&lt;/h2&gt; <br /> &nbsp;&nbsp;&lt;p class=&quot;text-gray-600 mb-4&quot;&gt;This is a card built with Tailwind CSS.&lt;/p&gt; <br /> &nbsp;&nbsp;&lt;button class=&quot;bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-all&quot;&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;Click Me <br /> &nbsp;&nbsp;&lt;/button&gt; <br /> &lt;/div&gt; </code> </div> </div> <div> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4"> 🔹 With Bootstrap </h3> <div className="bg-gray-100 p-4 rounded-lg my-4"> <code className="text-sm text-black"> &lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt; <br /> &nbsp;&nbsp;&lt;div class=&quot;card-body&quot;&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 class=&quot;card-title&quot;&gt;Card Title&lt;/h5&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class=&quot;card-text&quot;&gt;This is a card built with Bootstrap.&lt;/p&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Click Me&lt;/a&gt; <br /> &nbsp;&nbsp;&lt;/div&gt; <br /> &lt;/div&gt; </code> </div> </div> </div> <div className="bg-yellow-50 p-4 rounded-lg my-6"> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider text-black"> <strong>🔎 Observations:</strong> </p> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> Tailwind requires <strong>more HTML classes</strong> but enables <strong>unique designs</strong> </li> <li> Bootstrap uses <strong>less markup</strong> but designs are <strong>more generic</strong> </li> </ul> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> 5. Conclusion: Which One to Choose? </h2> <div className="overflow-x-auto"> <table className="min-w-full bg-white rounded-lg overflow-hidden my-6"> <thead className="bg-gray-100"> <tr> <th className="py-3 px-4 text-left font-bold text-black"> Criterion </th> <th className="py-3 px-4 text-left font-bold text-black"> Tailwind CSS ⚡ </th> <th className="py-3 px-4 text-left font-bold text-black"> Bootstrap 🅱️ </th> </tr> </thead> <tbody> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black">Customization</td> <td className="py-3 px-4 text-green-600">✔️ Total</td> <td className="py-3 px-4 text-red-600">❌ Limited</td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black"> Development speed </td> <td className="py-3 px-4 text-black"> Medium (once learned) </td> <td className="py-3 px-4 text-green-600">✔️ Very fast</td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black">Bundle size</td> <td className="py-3 px-4 text-green-600">✔️ ~10KB</td> <td className="py-3 px-4 text-red-600">❌ ~50KB</td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black"> Included components </td> <td className="py-3 px-4 text-red-600">❌ None</td> <td className="py-3 px-4 text-green-600"> ✔️ +20 components </td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black"> JavaScript included </td> <td className="py-3 px-4 text-red-600">❌ No</td> <td className="py-3 px-4 text-green-600">✔️ Yes</td> </tr> <tr> <td className="py-3 px-4 text-black">Visual appearance</td> <td className="py-3 px-4 text-green-600">✔️ Unique</td> <td className="py-3 px-4 text-red-600">❌ Generic</td> </tr> </tbody> </table> </div> <div className="bg-blue-50 p-6 rounded-lg my-6"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-black"> 📌 Final recommendation: </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> <strong>Choose Tailwind</strong> for projects requiring <strong>unique design, maximum customization and performance </strong> </li> <li> <strong>Choose Bootstrap</strong> for <strong> quick MVPs, prototypes or when you need ready components </strong> </li> </ul> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider text-black"> 💡 <strong>Alternative:</strong> Consider using Bootstrap just for the grid system and Tailwind for components. </p> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <div className="text-center py-6"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4"> 📢 Do you prefer Tailwind or Bootstrap? Leave it in the comments! </h3> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> 🔗<strong> If you liked this analysis, share it with other developers. </strong>🚀 </p> </div> </div> </div>`,
  },
  {
    id: "3",
    title: "SQL vs NoSQL: Which to Choose for Your Project?",
    date: "May 12, 2025",
    category: "DATABASE",
    description:
      "In the world of software development, one of the most critical decisions is choosing between SQL (relational) and NoSQL (non-relational) databases. This choice can make the difference between a scalable and efficient system, or one full of limitations.",
    img: "/Blogs/3/img_blog3.jpg",

    contentText: `<div className="w-full max-w-7xl sm:px-10 px-5"> <div className="justify-between py-4"> <h2 className="md:tracking-wider my-4 text-sm md:text-lg lg:text-3xl font-bold"> SQL vs NoSQL: Which to Choose for Your Project? </h2> <p className="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg"> In the world of software development, one of the most critical decisions is choosing between <strong>SQL</strong> (relational) and <strong>NoSQL</strong> (non-relational) databases. This choice can make the difference between a scalable and efficient system, or one full of limitations. </p> <p className="md:tracking-wider my-4 text-sm md:text-lg lg:text-lg"> But what makes them different? When should you use each one? Let's analyze it in depth. </p> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> SQL: Relational Databases </h2> <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between"> <div> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> <strong>SQL</strong> (Structured Query Language) databases are like perfectly organized libraries. Data is stored in tables with defined relationships, similar to interconnected spreadsheets. </p> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> Popular examples include MySQL, PostgreSQL, Oracle, and SQL Server. Some key features are: </p> </div> <div className="mx-auto mt-8 w-full max-w-md md:mt-0 lg:max-w-full flex items-center"> <div className="overflow-hidden rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 p-6 flex flex-col justify-between items-center"> <div className="relative"> <img className="w-full h-full object-cover rounded-2xl" src="/Blogs/3/img_sql.png" alt="SQL database example" /> </div> </div> </div> </div> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5"> <li><strong>Rigid structure:</strong> Well-defined schema with tables, columns, and relationships</li> <li><strong>ACID:</strong> Guarantees Atomicity, Consistency, Isolation, and Durability</li> <li><strong>Complex queries:</strong> Powerful SQL language for advanced operations</li> <li><strong>Referential integrity:</strong> Well-defined relationships between tables</li> </ul> <div className="bg-gray-100 p-4 rounded-lg my-4"> <code className="text-sm text-black"> -- SQL query example<br/> SELECT u.name, o.total<br/> FROM users u<br/> JOIN orders o ON u.id = o.user_id<br/> WHERE o.created_at > '2023-01-01'<br/> ORDER BY o.total DESC; </code> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> NoSQL: Non-Relational Databases </h2> <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between"> <div> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> <strong>NoSQL</strong> databases are like flexible closets where you can store information in different ways. They don't follow the relational table model and are more flexible regarding data structure. </p> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> Examples include MongoDB, Cassandra, Redis, and DynamoDB. Their main features are: </p> </div> <div className="mx-auto mt-8 w-full max-w-md md:mt-0 lg:max-w-full flex items-center"> <div className="overflow-hidden rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 p-6 flex flex-col justify-between items-center"> <div className="relative"> <img className="w-full h-full object-cover rounded-2xl" src="/Blogs/3/img_nosql.png" alt="NoSQL database example" /> </div> </div> </div> </div> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5"> <li><strong>Flexibility:</strong> No fixed schema, adaptable to changes</li> <li><strong>Horizontal scalability:</strong> Easy distribution across multiple servers</li> <li><strong>Performance:</strong> Optimized for specific operations</li> <li><strong>Variety of models:</strong> Documents, key-value, graphs, wide-column</li> </ul> <div className="bg-gray-100 p-4 rounded-lg my-4"> <code className="text-sm text-black"> // MongoDB document example<br/> &#123;<br/> &nbsp;&nbsp;_id: "user123",<br/> &nbsp;&nbsp;name: "Ana Pérez",<br/> &nbsp;&nbsp;email: "ana@example.com",<br/> &nbsp;&nbsp;orders: [<br/> &nbsp;&nbsp;&nbsp;&nbsp;&#123;id: "ord1", total: 100, date: "2023-05-15"&#125;,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&#123;id: "ord2", total: 200, date: "2023-06-20"&#125;<br/> &nbsp;&nbsp;]<br/> &#125; </code> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> Technical Comparison </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-blue-600"> ⭐ SQL Advantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li><strong>Consistency:</strong> Data is always valid and consistent</li> <li><strong>Complex queries:</strong> JOINs, subqueries, aggregations</li> <li><strong>Maturity:</strong> Technology proven for decades</li> <li><strong>Standardization:</strong> Well-defined SQL language</li> </ul> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-red-600"> ⚠ Disadvantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li><strong>Vertical scalability:</strong> Growth limitations</li> <li><strong>Rigidity:</strong> Schema changes can be costly</li> <li><strong>Performance:</strong> Can be slow with large volumes</li> </ul> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-blue-600"> ⭐ NoSQL Advantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li><strong>Scalability:</strong> Easy distribution across clusters</li> <li><strong>Flexibility:</strong> Adaptable to frequent changes</li> <li><strong>Performance:</strong> Optimized for specific operations</li> <li><strong>Variety:</strong> Different models for different needs</li> </ul> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-red-600"> ⚠ Disadvantages </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li><strong>Eventual consistency:</strong> Doesn't always guarantee ACID</li> <li><strong>Limited queries:</strong> No complex JOINs</li> <li><strong>Maturity:</strong> Less standardization between products</li> </ul> </div> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> When to Use Each? </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div className="bg-blue-50 p-6 rounded-lg"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-black"> ✅ Use SQL when... </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li>Your data is <strong>structured</strong> and stable</li> <li>You need <strong>complex transactions</strong> (e.g., banking systems)</li> <li>You require <strong>ad-hoc queries</strong> with multiple relationships</li> <li><strong>Data integrity</strong> is critical</li> </ul> </div> <div className="bg-green-50 p-6 rounded-lg"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-black"> ✅ Use NoSQL when... </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li>Your data is <strong>semi-structured or unstructured</strong></li> <li>You need to <strong>scale horizontally</strong> (e.g., massive web applications)</li> <li>You have <strong>high-performance requirements</strong> for read/write operations</li> <li>Your data schema <strong>changes frequently</strong></li> </ul> </div> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> Typical Use Cases </h2> <div className="overflow-x-auto"> <table className="min-w-full bg-white rounded-lg overflow-hidden my-6"> <thead className="bg-gray-100"> <tr> <th className="py-3 px-4 text-left font-bold text-black"> Application Type </th> <th className="py-3 px-4 text-left font-bold text-black"> Recommendation </th> <th className="py-3 px-4 text-left font-bold text-black"> Reason </th> </tr> </thead> <tbody> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black">Accounting/financial system</td> <td className="py-3 px-4 text-green-600">SQL</td> <td className="py-3 px-4 text-black">Need for ACID transactions and strict consistency</td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black">Social network</td> <td className="py-3 px-4 text-green-600">NoSQL</td> <td className="py-3 px-4 text-black">Horizontal scalability and semi-structured data</td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black">ERP/CRM</td> <td className="py-3 px-4 text-green-600">SQL</td> <td className="py-3 px-4 text-black">Complex relationships between entities</td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black">IoT application</td> <td className="py-3 px-4 text-green-600">NoSQL</td> <td className="py-3 px-4 text-black">High data volume and schema flexibility</td> </tr> <tr className="border-b border-gray-200"> <td className="py-3 px-4 text-black">E-commerce</td> <td className="py-3 px-4 text-black">Both (hybrid)</td> <td className="py-3 px-4 text-black">SQL for transactions, NoSQL for catalog/products</td> </tr> </tbody> </table> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8 tracking-wider"> Conclusion: Which to Choose? </h2> <div className="bg-blue-50 p-6 rounded-lg my-6"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4 text-black"> 📌 Final recommendation: </h3> <ul className="list-disc list-inside text-sm md:text-base lg:text-lg my-4 tracking-wider pl-5 text-black"> <li> <strong>Choose SQL</strong> when you need <strong>strong consistency, complex transactions, and a well-defined schema</strong> </li> <li> <strong>Choose NoSQL</strong> when you prioritize <strong>scalability, flexibility, and high performance with large data volumes</strong> </li> <li> <strong>Consider a hybrid approach</strong> for complex applications that require the best of both worlds </li> </ul> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider text-black"> 💡 <strong>There's no one-size-fits-all solution:</strong> The best option depends on your specific requirements, data volume, access patterns, and growth needs. </p> </div> <hr className="w-full my-4 border-gray-300 border-t-2"></hr> <div className="text-center py-6"> <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-4"> 📢 Do you prefer SQL or NoSQL for your projects? Share your experience! </h3> <p className="text-sm md:text-base lg:text-lg my-4 tracking-wider"> 🔗 <strong>If you found this comparison useful, share it with other developers.</strong> 🚀 </p> </div> </div> </div>`,
  },
];

/*Service Data*/
export const serviceData = [
  {
    id: "1",
    title: "Web ",
    title2: "Development",
    description:
      "I create responsive, fast, and intuitive websites using the latest technologies and modern frameworks. My development approach focuses on performance, accessibility, and clean code architecture.",
    icon: "/Service/web_development.png",
    imageUrl: "/Service/img_web_development.jpg",
    content: [
      {
        title: "Responsive Design",
        description:
          "Mobile-optimized websites that adapt perfectly to any device screen size and orientation.",
      },
      {
        title: "Performance Focus",
        description:
          "Lightning-fast load times with optimized code, images, and modern caching techniques.",
      },
      {
        title: "Clean Architecture",
        description:
          "Modular, maintainable code structure following industry best practices and patterns.",
      },
      {
        title: "SEO Ready",
        description:
          "Built with search engine optimization fundamentals implemented from the ground up.",
      },
    ],
    contentText: ``,
  },
  {
    id: "2",
    title: "Mobile App ",
    title2: "Development",
    description:
      "I develop high-quality cross-platform mobile applications using frameworks like React Native and Flutter, ensuring a seamless user experience across both iOS and Android devices with native-like performance.",
    icon: "/Service/mobile.png",
    imageUrl: "/Service/img_mobile_app.jpg",
    content: [
      {
        title: "Cross-Platform",
        description:
          "Single codebase that runs flawlessly on both iOS and Android platforms.",
      },
      {
        title: "Native Performance",
        description:
          "Hardware-accelerated experiences that feel truly native on each platform.",
      },
      {
        title: "Offline Capabilities",
        description:
          "Apps that work seamlessly even without internet connectivity.",
      },
      {
        title: "Store Compliance",
        description:
          "Guaranteed approval meeting all App Store and Play Store guidelines.",
      },
    ],
    contentText: ``,
  },
  {
    id: "3",
    title: "UI/UX ",
    title2: "Design",
    description:
      "I design intuitive, visually appealing user interfaces with a focus on usability and engagement. My process includes user research, wireframing, prototyping, and testing to create optimal digital experiences",
    icon: "/Service/ux_ui.png",
    imageUrl: "/Service/img_ux_ui.jpg",
    content: [
      {
        title: "User Research",
        description:
          "Data-driven insights into user behaviors, needs, and pain points.",
      },
      {
        title: "Interactive Prototypes",
        description:
          "Clickable prototypes that bring design concepts to life early.",
      },
      {
        title: "Visual Excellence",
        description: "Pixel-perfect designs with attention to every detail.",
      },
      {
        title: "Usability Testing",
        description: "Real user feedback to validate and refine designs.",
      },
    ],
    contentText: ``,
  },
  {
    id: "4",
    title: "SEO ",
    title2: "Optimization",
    description:
      "I implement comprehensive SEO strategies including technical optimization, content improvement, and link building to enhance search engine rankings, increase organic traffic, and boost online visibility.",
    icon: "/Service/seo.png",
    imageUrl: "/Service/img_seo.jpg",
    content: [
      {
        title: "Technical SEO",
        description:
          "Site structure optimization for maximum search engine crawlability.",
      },
      {
        title: "Keyword Strategy",
        description:
          "Targeting the right search terms with optimal content placement.",
      },
      {
        title: "Content Optimization",
        description:
          "Enhancing existing content to rank higher in search results.",
      },
      {
        title: "Authority Building",
        description: "Earning quality backlinks to boost domain credibility.",
      },
    ],
    contentText: ``,
  },
];

export const projects2 = [
  {
    desing: [
      {
        id: "1",
        title: "Mappeando",
        title2: "Mappeando",
        des: "Application that allows users to choose routes within a city and obtain exact directions to take the ride shared with other people.",
        category: "UX/UI Design",
        img: "/Projects/ux_ui/img_mappeando.jpg",
        iconLists: [
          "/HardSkills/figma.svg",
          "/HardSkills/photoshop.svg",
          "/HardSkills/adobe_i.svg",
        ],
        link: "https://www.behance.net/gallery/214774925/MAPPEANDO",
      },
      {
        id: "2",
        title: "Heartbook",
        title2: "Heartbook",
        des: "Heartbook is a mobile app I designed and developed for buying and selling new and used books.",
        img: "/Projects/ux_ui/img_heatbook.png",
        category: "UX/UI Design",
        iconLists: [
          "/HardSkills/figma.svg",
          "/HardSkills/photoshop.svg",
          "/HardSkills/adobe_i.svg",
        ],
        link: "https://www.behance.net/gallery/224370529/HeartBook-App",
      },
      {
        id: "3",
        title: "Calm Connect",
        title2: "Calm Connect",
        des: "CalmConnect is created to provide immediate attention and thus give them the therapeutic tools so they can achieve emotional well-being.",
        img: "/Projects/ux_ui/img_calmconnect.png",
        category: "UX/UI Design",
        iconLists: [
          "/HardSkills/figma.svg",
          "/HardSkills/photoshop.svg",
          "/HardSkills/adobe_i.svg",
        ],
        link: "https://www.behance.net/gallery/202495197/Calm-Connect",
      },
      {
        id: "4",
        title: "System Calm Connect",
        title2: "System Calm Connect",
        des: "CalmConnect's Design System is a set of visual components and guidelines that ensure consistency throughout the application.",
        img: "/Projects/ux_ui/img_desing_system.png",
        category: "UX/UI Design",
        iconLists: [
          "/HardSkills/figma.svg",
          "/HardSkills/photoshop.svg",
          "/HardSkills/adobe_i.svg",
        ],
        link: "https://www.behance.net/gallery/214779655/Calm-Connect-Desing-System-Atomic-Desing",
      },
    ],

    backEnd: [
      {
        id: "1",
        title: "Currency Converter",
        title2: "Currency Converter",
        des: "Currency Converter is a back-end application that allows users to convert between different currencies using real-time exchange rates.",
        category: "Back End",
        img: "/Projects/back_end/currency_converter.jpg",
        iconLists: [
          "/HardSkills/java.svg",
          "/HardSkills/oracle.svg",
          "/HardSkills/intellij.svg",
        ],
        link: "https://github.com/gezcarlos22/ConversorMoneda",
      },
      {
        id: "2",
        title: "Gutendex Literature",
        title2: "Gutendex Literature",
        des: "Gutendex Literature is a back-end application that allows users to search for books from the Gutenberg project using the Gutendex API.",
        img: "/Projects/back_end/gutendex.jpg",
        category: "Back End",
        iconLists: [
          "/HardSkills/java.svg",
          "/HardSkills/spring.svg",
          "/HardSkills/postgresql.svg",
          "/HardSkills/intellij.svg",
        ],
        link: "https://github.com/gezcarlos22/Literatura",
      },
    ],

    frontEnd: [
      {
        id: "1",
        title: "Basic Calculator",
        title2: "Basic Calculator",
        des: "Discover this handy math tool I developed to test my web programming knowledge. It's a functional calculator you can try right in your browser.",
        category: "Front End",
        img: "/Projects/front_end/calculadora.png",
        iconLists: [
          "/HardSkills/html-5.svg",
          "/HardSkills/css.svg",
          "/HardSkills/javascript.svg",
          "/HardSkills/visual_studio_code.svg",
        ],
        link: "https://github.com/gezcarlos22/Calculadora",
      },
      {
        id: "2",
        title: "Numero Secreto",
        title2: "Numero Secreto",
        des: "El objetivo del juego es adivinar un número aleatorio generado por la computadora dentro de un número limitado de intentos.",
        category: "Front End",
        img: "/Projects/front_end/numero_secreto.png",
        iconLists: [
          "/HardSkills/html-5.svg",
          "/HardSkills/css.svg",
          "/HardSkills/javascript.svg",
          "/HardSkills/visual_studio_code.svg",
        ],
        link: "https://github.com/gezcarlos22/Numero_Secreto",
      },
      {
        id: "3",
        title: "Amigo Secreto",
        title2: "Amigo Secreto",
        des: "Los usuarios pueden ingresar una lista de nombres y la aplicación se encargará de asignar aleatoriamente un amigo secreto a cada persona.",
        img: "/Projects/front_end/amigo_secreto.png",
        category: "Front End",
        iconLists: [
          "/HardSkills/html-5.svg",
          "/HardSkills/css.svg",
          "/HardSkills/javascript.svg",
          "/HardSkills/visual_studio_code.svg",
        ],
        link: "https://github.com/gezcarlos22/Amigo_Secreto",
      },
    ],
    appMobile: [
      {
        id: "1",
        title: "Heartbook",
        title2: "Heartbook",
        des: "Heartbook is a mobile app I designed and developed for buying and selling new and used books.",
        img: "/Projects/app_mobile/heatbook.png",
        category: "APP Mobile",
        iconLists: [
          "/HardSkills/react.svg",
          "/HardSkills/ts.svg",
          "/HardSkills/visual_studio_code.svg",
        ],
        link: "https://github.com/gezcarlos22/HeartBook_App",
      },
      {
        id: "2",
        title: "Personal Card",
        title2: "Personal Card",
        des: "A personal card app that allows me to share my personal information in digital format.",
        img: "/Projects/app_mobile/tarjeta_personal.png",
        category: "APP Mobile",
        iconLists: [
          "/HardSkills/react.svg",
          "/HardSkills/ts.svg",
          "/HardSkills/visual_studio_code.svg",
        ],
        link: "https://github.com/gezcarlos22/Targeta_Personal",
      },
    ],
  },
];
