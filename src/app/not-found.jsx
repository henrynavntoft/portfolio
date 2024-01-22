"use client";

import Link from "next/link";
import { Image } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";

export default function Custom404() {
  return (
    <>
      <section className="relative h-[80vh] w-full">
        <Spline
          className="absolute m-auto"
          scene="https://prod.spline.design/lM4M0gPUXs1TQR6B/scene.splinecode"
        />
        <div className="absolute m-auto h-full w-full flex flex-col items-center justify-center">
          <h1 className="">ERROR</h1>
          <h3 className="mb-4">404</h3>
          <div className="flex">
            <Image src="/arrow.go.svg" alt="arrow" className="dark:invert" />
            <Link className="animated-underline" href={"/"}>
              Go back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
