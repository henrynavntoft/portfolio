"use client";

import Link from 'next/link';
import { Menu, Moon, Sun, Monitor, ExternalLink, Check, Linkedin, Github } from 'lucide-react';
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

    const menuItems = [
        { name: t('nav.home'), path: "/" },
        {
            name: t('nav.resume'),
            path: "https://www.henrynavntoft.dk/Resume_Henry-Navntoft.pdf",
            external: true
        },
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
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex-shrink-0">
                        <div className="text-2xl font-bold text-foreground hover:opacity-90 transition-opacity">
                            HN
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        <LanguageSelector />
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="">
                                    <Menu strokeWidth={1} size={20} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuLabel className="text-xs text-muted-foreground">{t('nav.navigation')}</DropdownMenuLabel>
                                {menuItems.map((item, index) => (
                                    <DropdownMenuItem key={`${item.name}-${index}`} asChild>
                                        <Link 
                                            href={item.path} 
                                            className="cursor-pointer flex items-center gap-2"
                                            target={item.external ? "_blank" : ""}
                                            rel={item.external ? "noopener noreferrer" : ""}
                                        >
                                            {item.name}
                                            {item.external && <ExternalLink className="h-3 w-3" />}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}

                                <DropdownMenuSeparator />

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
