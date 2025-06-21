"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
  });
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(savedConsent);
      setConsent(parsed);
      // Initialize analytics if previously consented
      if (parsed.analytics) {
        initializeAnalytics();
      }
    }
  }, []);

  const initializeAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const saveConsent = (newConsent: typeof consent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    setConsent(newConsent);
    
    if (newConsent.analytics) {
      initializeAnalytics();
    } else {
      // Disable analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
    }
    
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true });
  };

  const acceptNecessaryOnly = () => {
    saveConsent({ necessary: true, analytics: false });
  };

  const handleSettingsSave = () => {
    saveConsent(consent);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowBanner(false)}
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-background border border-border rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
          {!showSettings ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t('cookies.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('cookies.message')}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  {t('cookies.customize')}
                </Button>
                <Button
                  onClick={acceptNecessaryOnly}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  {t('cookies.acceptNecessary')}
                </Button>
                <Button
                  onClick={acceptAll}
                  size="sm"
                  className="text-xs"
                  variant="outline"
                >
                  <Check className="h-3 w-3 mr-1" />
                  {t('cookies.acceptAll')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  {t('cookies.customize')}
                </h3>
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="ghost"
                  size="sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">Necessary Cookies</div>
                    <div className="text-xs text-muted-foreground">
                      {t('cookies.necessary')}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Always Active</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">Analytics Cookies</div>
                    <div className="text-xs text-muted-foreground">
                      {t('cookies.analytics')}
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <Input
                      type="checkbox"
                      className="sr-only peer"
                      checked={consent.analytics}
                      onChange={(e) => setConsent(prev => ({ ...prev, analytics: e.target.checked }))}
                      aria-label="Toggle analytics cookies"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button
                  onClick={handleSettingsSave}
                  size="sm"
                  className="text-xs"
                  variant="outline"
                >
                  {t('cookies.save')}
                </Button>
              </div>
            </div>
          )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
} 