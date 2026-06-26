

// src/app/(site)/coaches/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getCoachBySlug } from "../../../../constants/coaches";

export default async function CoachSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coach = getCoachBySlug(slug);

  if (!coach) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 py-14 bg-five-lines">
      <article className="max-w-5xl mx-auto bg-five-lines">
        {/* Header - Image + Name + Title */}
        <div className="pt-12 grid gap-8 md:grid-cols-[280px,1fr] items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <Image
              src={coach.image}
              alt={coach.name}
              fill
              className="
                object-contain 
                object-center 
                bg-five-lines
                transition-transform duration-300 
                hover:scale-105
              "
              sizes="280px"
              priority
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {coach.name}
            </h1>
            <p className="text-neutral-700 font-montserrat mt-2 text-lg md:text-xl">
              {coach.title}
            </p>

            {/* Book Consultation Button */}
            <div className="mt-6">
              {coach.email ? (
                <a
                  href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
                    coach.email
                  )}&su=${encodeURIComponent(
                    `Consultation Request with ${coach.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-transparent text-black border border-black hover:!bg-transparent hover:!text-black text-sm px-6 py-2.5 uppercase font-medium tracking-wide">
                    BOOK A CONSULTATION WITH {coach.name.split(" ")[0]}
                  </Button>
                </a>
              ) : (
                <Link href={`/contact?coach=${encodeURIComponent(coach.name)}`}>
                  <Button className="bg-transparent text-black border border-black hover:!bg-transparent hover:!text-black text-sm px-6 py-2.5 uppercase font-medium tracking-wide">
                    BOOK A CONSULTATION WITH {coach.name.split(" ")[0]}
                  </Button>
                </Link>
              )}
            </div>

            {/* Social Media Contact */}
            {coach.social && (
              <div className="mt-8 flex flex-col items-center md:items-start gap-4">
                <p className="text-neutral-600 font-medium">Connect with Keith:</p>
                <div className="flex gap-6">
                  {coach.social.instagram && (
                    <a
                      href={coach.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.579.227.227 2.579.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 4.473 2.507 6.825 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.473-.155 6.825-2.507 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.155-4.473-2.507-6.825-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                      </svg>
                    </a>
                  )}

                  {coach.social.facebook && (
                    <a
                      href={coach.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
                      </svg>
                    </a>
                  )}

                  {coach.social.linkedin && (
                    <a
                      href={coach.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.966v5.696h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.597 1.997 3.597 4.597v6.451z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <section className="mt-14 space-y-5">
          {coach.bio.map((paragraph: string, index: number) => (
            <p
              key={index}
              className="text-neutral-800 leading-relaxed font-montserrat text-base md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Qualifications */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Qualifications</h2>
          <ul className="space-y-3 font-montserrat text-neutral-800">
            {coach.credentials
              .sort((a: { year: number }, b: { year: number }) => a.year - b.year)
              .map(
                (
                  cred: { year: number; name: string; issuer?: string },
                  index: number
                ) => (
                  <li key={index} className="flex items-baseline gap-3">
                    <span className="font-medium min-w-[4.5rem] text-neutral-600">
                      {cred.year}
                    </span>
                    <div>
                      <span className="font-medium">{cred.name}</span>
                      {cred.issuer && (
                        <span className="text-neutral-600">, {cred.issuer}</span>
                      )}
                    </div>
                  </li>
                )
              )}
          </ul>
        </section>
      </article>
    </main>
  );
}