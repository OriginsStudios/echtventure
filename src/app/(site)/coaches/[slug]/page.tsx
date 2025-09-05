// Dynamic route for /coaches/[slug]
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getCoachBySlug } from "@/constants/coaches";

export default function CoachSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const coach = getCoachBySlug(params.slug);
  if (!coach) return notFound();

  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 py-14">
      <article className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[280px,1fr] items-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <Image
              src={coach.image}
              alt={coach.name}
              fill
              className="object-cover object-center"
              sizes="280px"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {coach.name}
            </h1>
            <p className="text-neutral-700 mt-2">{coach.title}</p>

            <div className="mt-6">
              <Link href={`/contact?coach=${encodeURIComponent(coach.name)}`}>
                <Button className="bg-black text-white border-black hover:opacity-90">
                  Book a Consultation with {coach.name.split(" ")[0]}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bio */}
        <section className="mt-12 space-y-4">
          {coach.bio.map((para, i) => (
            <p key={i} className="text-neutral-800 leading-7">
              {para}
            </p>
          ))}
        </section>

        {/* Timeline */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Professional Experience</h2>
          <ol className="mt-4 relative border-s-2 border-neutral-200 ps-6">
            {coach.timeline
              .slice()
              .sort((a, b) => b.year - a.year)
              .map((t, idx) => (
                <li key={`${t.year}-${idx}`} className="mb-5 ms-2">
                  <div className="absolute -start-[7px] h-3 w-3 rounded-full bg-black mt-1.5"></div>
                  <p className="text-sm text-neutral-500">{t.year}</p>
                  <p className="font-medium">
                    {t.role}
                    {t.org ? (
                      <span className="text-neutral-600">, {t.org}</span>
                    ) : null}
                  </p>
                </li>
              ))}
          </ol>
        </section>

        {/* Credentials */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">
            Credentials & Certifications
          </h2>
          <ul className="mt-4 list-disc ps-6 space-y-2">
            {coach.credentials.map((c, i) => (
              <li key={i} className="text-neutral-800">
                {c.name}
                {c.issuer ? (
                  <span className="text-neutral-600">, {c.issuer}</span>
                ) : null}
                {c.year ? (
                  <span className="text-neutral-500"> ({c.year})</span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        {/* Specializations */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Areas of Specialization</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {coach.specializations.map((s, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-full border border-neutral-300 bg-white"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CTA bottom */}
        <div className="mt-12">
          <Link href={`/contact?coach=${encodeURIComponent(coach.name)}`}>
            <Button className="bg-black text-white border-black hover:opacity-90 w-full md:w-auto">
              Book a Consultation with {coach.name.split(" ")[0]}
            </Button>
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/coaches"
            className="text-sm text-neutral-600 hover:text-black"
          >
            ← Back to all coaches
          </Link>
        </div>
      </article>
    </main>
  );
}
