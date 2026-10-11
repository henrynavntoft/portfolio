"use client";

import Link from 'next/link';
import { Menu, Moon, Sun, Monitor, Check, Linkedin, Github } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const { t } = useLanguage();

    const pageLinks = [
        { name: t("nav.about"), path: "/#about" },
        { name: t("nav.skills"), path: "/#skills" },
        { name: t("nav.projects"), path: "/#projects" },
        { name: t("nav.contact"), path: "/#contact" },
        { name: t("nav.resume"), path: "/Resume_Henry-Navntoft.pdf" },
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            path: "https://www.linkedin.com/in/henry-lundberg-navntoft/",
            icon: Linkedin
        },
        {
            name: "GitHub", 
            path: "https://github.com/henrynavntoft",
            icon: Github
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link href="/" className="flex-shrink-0">
                        <div className="text-2xl font-bold text-foreground hover:opacity-90 transition-opacity">
                            HN
                        </div>
                    </Link>
                    <nav aria-label={t("nav.navigation")} className="order-last flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:order-none sm:w-auto sm:flex-1">
                        {pageLinks.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                {...(item.path.endsWith(".pdf")
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="ml-auto flex items-center gap-4">
                        <LanguageSelector />
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="">
                                    <Menu strokeWidth={1} size={20} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuLabel className="text-xs text-muted-foreground">{t('nav.theme')}</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer flex items-center gap-2">
                                    <Sun className="h-4 w-4" />
                                    <span>{t('nav.light')}</span>
                                    {theme === "light" && <span className="ml-auto text-primary"><Check className="h-4 w-4" /></span>}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer flex items-center gap-2">
                                    <Moon className="h-4 w-4" />
                                    <span>{t('nav.dark')}</span>
                                    {theme === "dark" && <span className="ml-auto text-primary"><Check className="h-4 w-4" /></span>}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer flex items-center gap-2">
                                    <Monitor className="h-4 w-4" />
                                    <span>{t('nav.system')}</span>
                                    {theme === "system" && <span className="ml-auto text-primary"><Check className="h-4 w-4" /></span>}
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuLabel className="text-xs text-muted-foreground">{t('nav.social')}</DropdownMenuLabel>
                                {socialLinks.map((social, index) => (
                                    <DropdownMenuItem key={`${social.name}-${index}`} asChild>
                                        <Link 
                                            href={social.path} 
                                            className="cursor-pointer flex items-center gap-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <social.icon className="h-4 w-4" />
                                            {social.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}
