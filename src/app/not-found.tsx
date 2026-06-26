import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen text-black flex items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight">404</h1>
        <p className="text-base">This page could not be found.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
