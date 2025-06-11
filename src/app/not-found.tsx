import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center">
      <h1 className="">ERROR</h1>
      <h3 className="mb-4">404</h3>
      <div className="flex items-center">
        <Image 
          src="/arrow.go.svg" 
          alt="arrow" 
          width={16} 
          height={16} 
          className="dark:invert mr-2" 
        />
        <Link className="animated-underline" href={"/"}>
          Go back
        </Link>
      </div>
    </section>
  );
}
