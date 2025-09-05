// /coaches
import Image from "next/image";
import Link from "next/link";
import { coaches } from "@/constants/coaches";

export default function CoachesPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 py-14">
      <section className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Coaches
          </h1>
          <p className="text-neutral-600 mt-3 max-w-2xl">
            Meet the people behind ECHTVENTURE—experienced coaches dedicated to
            leadership development, personal mastery, and impactful teams.
          </p>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <li key={coach.slug} className="group">
              <Link
                href={`/coaches/${coach.slug}`}
                className="block rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition"
              >
                <div className="relative aspect-[4/5] bg-neutral-100">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{coach.name}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{coach.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
