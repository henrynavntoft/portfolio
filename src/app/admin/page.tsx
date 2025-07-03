"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.replace("/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.replace("/login");
      } else {
        setUser(session.user);
      }
    });
    return () => listener?.subscription.unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
      setLoading(false);
    } else {
      router.replace("/login");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-2xl bg-muted/30 p-8 rounded-2xl border border-border/50">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome, <span className="font-semibold">{user.user_metadata?.name || user.email}</span>!</p>
        <div className="mt-4 p-4 border rounded-lg bg-secondary/20">
          <h2 className="text-lg font-bold mb-2">Admin Information</h2>
          <p><strong>User ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more admin-specific data here, e.g., fetched from a protected database table */}
          <p className="mt-2 text-sm text-muted-foreground">This section is only visible to logged-in administrators.</p>
        </div>
        <Button onClick={handleLogout} className="mt-6" variant="destructive" disabled={loading}>
          {loading ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </div>
  );
} 