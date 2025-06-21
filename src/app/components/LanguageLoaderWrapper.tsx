"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import LanguageLoader from "./LanguageLoader";

export default function LanguageLoaderWrapper() {
  const { isLoading } = useLanguage();
  
  return <LanguageLoader isVisible={isLoading} />;
} 