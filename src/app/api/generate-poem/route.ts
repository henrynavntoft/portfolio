import { NextResponse } from 'next/server';
import {GoogleGenAI} from '@google/genai';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for server-side use
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    // Initialize Google Generative AI
    const genAI = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY!
    });

    // Define your poem style/prompt (you can make this more dynamic later)
    const poemStyle = "a melancholic, profound poem in English, inspired by the style: Vi lever som om vi har glemt, at vi skal dø, og vi dør som om vi har glemt, at vi har levet. Døden er ikke et punktum men et komma i en uendelig sætning vi aldrig hørte slutningen af. Vi skynder os gennem dagene, som om vi er på vej et sted hen, men vi er allerede fremme.";
    const prompt = `Generate a poem in the following style and language: "${poemStyle}".`;

    // Generate content from the AI model
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-pro",
      contents: [{ text: prompt }]
    });
    const poemContent = result.text;

    // Store poem in Supabase
    const { data, error } = await supabase.from('poems').insert([
      { content: poemContent, style: poemStyle }
    ]);

    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(error.message);
    }

    console.log('Poem generated and stored successfully.');
    return NextResponse.json({ success: true, poem: poemContent }, { status: 200 });

  } catch (error) {
    console.error('Error generating or storing poem:', error);
    return NextResponse.json({ error: 'Failed to generate poem' }, { status: 500 });
  }
}
