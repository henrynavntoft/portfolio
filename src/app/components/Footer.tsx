"use client";

import { Github, Linkedin, Mail, Phone, Building2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/henry-lundberg-navntoft/",
      icon: Linkedin,
    },
    {
      name: "GitHub", 
      href: "https://github.com/henrynavntoft",
      icon: Github,
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "henrylnavntoft@gmail.com",
      href: "mailto:henrylnavntoft@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+45 51982345",
      href: "tel:+4551982345",
    },
    {
      icon: Building2,
      label: "CVR",
      value: "CVR: 41972386",
      href: null,
    },
  ];

  return (
    <footer className="border-t bg-background mt-10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground mb-3">Contact Information</h3>
            {contactInfo.map((contact) => (
              <div key={contact.label} className="flex items-center gap-2">
                <contact.icon className="h-4 w-4 text-primary" />
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">{contact.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-3 text-center">
            <h3 className="text-sm font-semibold text-foreground mb-3">Connect with me</h3>
            <div className="flex flex-col gap-2 items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Henry Navntoft
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 