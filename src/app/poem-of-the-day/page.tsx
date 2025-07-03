'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; // For client-side fetching
import { motion } from 'framer-motion';

interface Poem {
  id: string;
  created_at: string;
  content: string;
  style: string;
}

export default function PoemOfTheDayPage() {
  const [poem, setPoem] = useState<Poem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPoem() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('poems')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single(); // Fetch only the latest poem

      if (error) {
        console.error('Error fetching poem:', error);
        setError('Failed to load poem. Please try again later.');
      } else {
        setPoem(data);
      }
      setLoading(false);
    }

    fetchPoem();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
        <p className="text-xl text-muted-foreground">Loading today&apos;s poem...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!poem) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
        <p className="text-xl text-muted-foreground">No poem available for today yet. Check back later!</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
      <motion.div
        className="w-full max-w-2xl bg-muted/30 p-8 rounded-2xl border border-border/50 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">Poem of the Day</h1>
        <pre className="text-lg whitespace-pre-wrap font-serif text-foreground leading-relaxed">
          {poem.content}
        </pre>
        <p className="text-xs text-muted-foreground mt-4">
          Generated on: {new Date(poem.created_at).toLocaleDateString()}
        </p>
      </motion.div>
    </div>
  );
} 