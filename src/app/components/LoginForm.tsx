"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else if (data.user) {
      router.replace("/admin"); // Redirect to admin dashboard on success
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6 max-w-sm mx-auto bg-muted/30 p-8 rounded-2xl border border-border/50">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="bg-background"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="bg-background"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full" variant="outline" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
} 