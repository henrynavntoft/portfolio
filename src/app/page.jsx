import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="">
      <article className="mx-auto px-6 py-10 max-w-5xl">
        <h2 className="mb-6">Henry Navntoft</h2>
        <h4 className="mb-6">
          Copenhagen based <span className="accent">Web Developer</span>{" "}
          student, aspiring to build{" "}
          <span className="accent">accessible and beautiful </span> digital
          solutions.
        </h4>
        <p className="mb-4">
          Since I was a child, I have always been greatly interested in
          computers and interfaces. After working a bit with social media
          marketing at the start of 2020, I quickly realized that I wanted
          something different—to build something.
        </p>
        <p className="mb-4">
          That is why I chose in 2022, to start studying Multimedia Design at
          Copenhagen School of Arts and Technology. This led me to discover that
          I had a great passion for Frontend Development.
        </p>
        <p className="mb-4">
          As my studies draw to a close in early 2024, I have decided to
          continue my educational journey. With a newfound goal in mind, I am
          now diving into the world of Web Development, aiming to become a more
          versatile and holistic developer.
        </p>
      </article>
      <article className="mx-auto p-6 max-w-5xl">
        <h3 className="mb-b">Projects</h3>
        <ProjectsSection />
      </article>
      {/* <article className="mx-auto p-6 max-w-5xl">
        <h3 className="mb-6">Contact</h3>
        <ContactSection />
      </article> */}
    </div>
  );
}
