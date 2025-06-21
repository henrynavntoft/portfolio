"use client";

import { Github, Linkedin, Mail, Phone, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

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
      label: t('footer.email'),
      value: "henrylnavntoft@gmail.com",
      href: "mailto:henrylnavntoft@gmail.com",
    },
    {
      icon: Phone,
      label: t('footer.phone'),
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
    <footer className="border-t bg-background pt-5 lg:pt-10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground mb-3">{t('footer.contactInfo')}</h3>
            {contactInfo.map((contact) => (
              <div key={contact.label} className="flex items-center gap-2">
                <contact.icon className="h-4 w-4 text-primary" />
                {contact.href ? (
                  <Link
                    href={contact.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {contact.value}
                  </Link>
                ) : (
                  <span className="text-sm text-muted-foreground">{contact.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground mb-3">{t('footer.connectWith')}</h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Henry Navntoft
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              {t('footer.allRightsReserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 