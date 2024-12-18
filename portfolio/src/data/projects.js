export const projects = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    images: [
      {
        id: 1,
        url: "/projects/ecommerce-main.jpg",
        alt: "E-commerce Platform Dashboard",
        isMain: true
      },
      {
        id: 2,
        url: "/projects/ecommerce-products.jpg",
        alt: "Products Page",
        isMain: false
      },
      {
        id: 3,
        url: "/projects/ecommerce-cart.jpg",
        alt: "Shopping Cart",
        isMain: false
      },
      // Add more images...
    ],
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/yourusername/project",
    overview: "A comprehensive e-commerce platform built with modern technologies, focusing on real-time inventory management and seamless user experience.",
    challenge: "The main challenge was implementing real-time inventory tracking while handling high concurrent user transactions.",
    solution: "Implemented WebSocket connections for real-time updates and utilized Redis for caching frequently accessed data.",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Advanced search and filtering",
      "Admin dashboard with analytics",
      "Mobile-responsive design"
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "WebSocket",
      "Redis",
      "Stripe"
    ],
    results: "The platform achieved a 40% increase in sales conversion and reduced inventory discrepancies by 95%."
  },
  // Add more projects...
] 