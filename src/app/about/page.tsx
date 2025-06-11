export default function About() {
  return (
    <div className="pt-20">
      <article className="mx-auto px-6 py-10 max-w-4xl">
        <h1 className="mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <h3 className="mb-6">Henry Navntoft</h3>
          <h4 className="mb-8 text-xl font-medium">
            <span className="accent">Full Stack Developer</span>{" "}
            and <span className="accent">Small Business Owner</span>, specializing in building{" "}
            <span className="accent">accessible and beautiful</span> digital solutions.
          </h4>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Since I was a child, I have always been greatly interested in
              computers and interfaces. After working a bit with social media
              marketing at the start of 2020, I quickly realized that I wanted
              something different - to build something.
            </p>
            
            <p>
              In 2022, I started studying Multimedia Design at
              Copenhagen School of Arts and Technology, which led me to discover that
              I had a great passion for Frontend Development. After completing my studies,
              I continued my educational journey into Web Development to become a more
              versatile and holistic developer, and learned that I had an almost greater passion for problem solving and building logic.
            </p>
            
            <p>
              Today, I work as a Full Stack Developer and run my own tiny development agency,
              where I specialize in creating web solutions with WordPress, Shopify and custom coded solutions for businesses.
            </p>
            
          </div>
        </div>
      </article>
    </div>
  );
} 