'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Utensils, Sofa, Bubbles } from 'lucide-react';

export default function BirthdaySurprise() {
  const [mounted, setMounted] = useState(false);

  const gifts = [
    {
      title: "New Sofa Pillows",
      description: "I looked for pillows in stores the last few days, but couldn't find any. So we can look together for some new ones!",
      icon: Sofa
    },
    {
      title: "Dinner - Voucher",
      description: "We'll have dinner at a restaurant of your choice. You just pick the date. ",
      icon: Utensils
    },
    {
      title: "SPA Trip - Voucher",
      description: "We'll go to the spa together (This gift is sponsored by my parents). You just pick the date. Let's look for a nice place together!",
      icon: Bubbles
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#eae9e7] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Hide header and footer for this page */}
      <style jsx global>{`
        header, footer { display: none !important; }
      `}</style>
      
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#78933d] mb-6"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#201e1f] mb-4">
            Happy Birthday, Toni!
          </h1>
          
          <p className="text-lg md:text-xl text-[#201e1f]/80 max-w-3xl mx-auto">
            I couldn't find any pillows for the sofa, but I made these vouchers instead. <br />
            So, let's go shopping for pillows, have a nice dinner and go to the spa!
          </p>
        </motion.div>

        {/* Bento Box Gifts Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-[#201e1f]/10 hover:shadow-md transition-shadow"
            >
                             <div className="text-center">
                 <motion.div 
                   className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#78933d] mb-6"
                   whileHover={{ 
                     scale: 1.1, 
                     rotate: 5,
                     boxShadow: "0 10px 25px rgba(120, 147, 61, 0.3)"
                   }}
                   animate={{ 
                     y: [0, -5, 0],
                     rotate: [0, 2, -2, 0]
                   }}
                   transition={{ 
                     y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                     rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                   }}
                 >
                   {(() => {
                     const IconComponent = gift.icon;
                     return (
                       <motion.div
                         animate={{ 
                           scale: [1, 1.1, 1],
                           rotate: [0, 5, -5, 0]
                         }}
                         transition={{ 
                           duration: 2, 
                           repeat: Infinity, 
                           ease: "easeInOut",
                           delay: index * 0.5
                         }}
                       >
                         <IconComponent className="w-8 h-8 text-white" />
                       </motion.div>
                     );
                   })()}
                 </motion.div>
                
                <h2 className="text-2xl font-bold text-[#201e1f] mb-3">
                  {gift.title}
                </h2>
                
                <p className="text-[#201e1f]/70 mb-4">
                  {gift.description}
                </p>
            
              </div>
            </motion.div>
          ))}
        </div>

    

        {/* Subtle floating elements */}
        {mounted && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-[#78933d]/15"
                initial={{
                  x: `${(i * 16.66) % 100}%`,
                  y: "100vh",
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  y: "-10vh",
                  opacity: [0, 0.2, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180]
                }}
                transition={{
                  duration: 6 + (i * 0.5),
                  repeat: Infinity,
                  delay: i * 1.2
                }}
              >
                <Heart className="w-3 h-3" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
