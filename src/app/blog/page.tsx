import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Henry Navntoft - Web Development Tips & Insights",
  description: "Read about web development, WordPress tips, Shopify guides, and digital marketing insights from Henry Navntoft, a Copenhagen-based Full Stack Developer.",
  keywords: [
    "Web Development Blog",
    "WordPress Tips",
    "Shopify Guides", 
    "SEO Tips",
    "Danish Web Developer Blog",
    "Copenhagen Developer Blog",
    "Small Business Web Tips"
  ],
  alternates: {
    canonical: 'https://henrynavntoft.dk/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Web Development Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tips, tutorials, and insights about web development, WordPress, Shopify, 
          and growing your business online. Written by Henry Navntoft.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="p-8 bg-muted/30 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
            <p className="text-muted-foreground mb-6">
              I&apos;m preparing valuable content about web development, WordPress optimization, 
              Shopify best practices, and small business digital strategies.
            </p>
            <p className="text-sm text-muted-foreground">
              Subscribe to my newsletter or follow me on LinkedIn to be notified when new articles are published.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold mb-2">WordPress Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Performance tips, security best practices, and plugin recommendations
              </p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold mb-2">Shopify Success</h3>
              <p className="text-sm text-muted-foreground">
                E-commerce strategies, conversion optimization, and custom development
              </p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold mb-2">Small Business Digital</h3>
              <p className="text-sm text-muted-foreground">
                Digital marketing, SEO tips, and web presence strategies for Danish businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 