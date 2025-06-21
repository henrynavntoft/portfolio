export const translations = {
  en: {
    // Hero section
    hero: {
      title: "HENRY NAVNTOFT",
      subtitle: "Full Stack Developer & Small Business Owner",
      description: "Building awesome digital solutions - Graduated at Copenhagen School of Arts and Technology in the summer of 2025.",
      specialization: "From marketing to problem-solving - Specializing in WordPress, Shopify and custom web solutions."
    },
    // Navigation
    nav: {
      home: "Home",
      projects: "Projects",
      resume: "Resume",
      navigation: "Navigation",
      theme: "Theme",
      social: "Social",
      light: "Light",
      dark: "Dark",
      system: "System"
    },
    // Contact section
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to start your next project? Let's discuss how I can help bring your ideas to life.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "What's this about?",
      messagePlaceholder: "Tell me about your project...",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Message Sent!",
      successMessage: "Thanks for reaching out. I'll get back to you as soon as possible."
    },
    // Skills section
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with to create exceptional digital experiences."
    },
    // Projects section
    projects: {
      title: "Projects",
      subtitle: "A showcase of my recent work and creative solutions.",
      viewProject: "View Project",
      descriptions: {
        chicura: "A Danish e-commerce store specializing in posters, frames, and home decor accessories. Built with Shopify and custom integrations.",
        human: "A film production company based in Denmark. Built with Next.js and Tailwind CSS.",
        toptronic: "A Danish electronics company specializing in EMI Shielding, Thermal Products, and Microwave Products. Built with WordPress and custom solutions.",
        rose: "An industrial fastener solutions provider based in Denmark. Built with WordPress and Elementor."
      }
    },
    // Footer section
    footer: {
      contactInfo: "Contact Information",
      connectWith: "Connect with me",
      allRightsReserved: "All rights reserved.",
      email: "Email",
      phone: "Phone"
    }
  },
  da: {
    // Hero section
    hero: {
      title: "HENRY NAVNTOFT",
      subtitle: "Full Stack Udvikler & Selvstændig",
      description: "Bygger fantastiske digitale løsninger - Dimitteret fra Københavns Erhvervsakademi sommeren 2025.",
      specialization: "Fra marketing til problemløsning - Specialiseret i WordPress, Shopify og skræddersyede webløsninger."
    },
    // Navigation
    nav: {
      home: "Hjem",
      projects: "Projekter",
      resume: "CV",
      navigation: "Navigation",
      theme: "Tema",
      social: "Sociale medier",
      light: "Lys",
      dark: "Mørk",
      system: "System"
    },
    // Contact section
    contact: {
      title: "Kontakt",
      subtitle: "Klar til at starte dit næste projekt? Lad os diskutere, hvordan jeg kan hjælpe med at realisere dine idéer.",
      name: "Navn",
      email: "E-mail",
      subject: "Emne",
      message: "Besked",
      namePlaceholder: "Dit navn",
      emailPlaceholder: "din@email.dk",
      subjectPlaceholder: "Hvad handler det om?",
      messagePlaceholder: "Fortæl mig om dit projekt...",
      sendButton: "Send Besked",
      sending: "Sender...",
      success: "Besked Sendt!",
      successMessage: "Tak fordi du tog kontakt. Jeg vender tilbage så hurtigt som muligt."
    },
    // Skills section
    skills: {
      title: "Færdigheder",
      subtitle: "Teknologier og værktøjer jeg bruger til at skabe exceptionelle digitale oplevelser."
    },
    // Projects section
    projects: {
      title: "Projekter",
      subtitle: "Et showcase af mit seneste arbejde og kreative løsninger.",
      viewProject: "Se Projekt",
      descriptions: {
        chicura: "En dansk e-handelsbutik specialiseret i plakater, rammer og boligindretning. Bygget med Shopify og skræddersyede integrationer.",
        human: "Et filmproduktionsselskab baseret i Danmark. Bygget med Next.js og Tailwind CSS.",
        toptronic: "En dansk elektronikvirksomhed specialiseret i EMI Shielding, Termiske Produkter og Mikrobølgeprodukter. Bygget med WordPress og skræddersyede løsninger.",
        rose: "En leverandør af industrielle fastgørelsesløsninger baseret i Danmark. Bygget med WordPress og Elementor."
      }
    },
    // Footer section
    footer: {
      contactInfo: "Kontakt",
      connectWith: "Socials",
      allRightsReserved: "Alle rettigheder forbeholdes.",
      email: "E-mail",
      phone: "Telefon"
    }
  }
};

export type Language = 'en' | 'da';
export type TranslationKey = keyof typeof translations.en; 