"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const paragraphKeys = [
  "about.p1",
  "about.p2",
  "about.p3",
  "about.p4",
  "about.p5",
  "about.p6",
  "about.p7",
  "about.p8",
] as const;

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-28 mx-auto max-w-5xl px-6 py-10 lg:py-20">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-foreground">{t("about.title")}</h2>
      </motion.div>

      <div className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
        {paragraphKeys.map((key) => (
          <p key={key}>{t(key)}</p>
        ))}
        <p>
          {t("about.p9a")}{" "}
          <Link href="/#projects" className="text-foreground underline underline-offset-4 hover:text-primary">
            {t("about.projectsLink")}
          </Link>{" "}
          {t("about.p9b")}{" "}
          <Link href="/#contact" className="text-foreground underline underline-offset-4 hover:text-primary">
            {t("about.contactLink")}
          </Link>
          {t("about.p9c")}
        </p>
      </div>
    </section>
  );
}
