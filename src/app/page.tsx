function MyComponent() {
  return (
    <div>
      <h1 className="font-bowlby text-5xl uppercase">
        This is a Bowlby One Headline
      </h1>
      <h2 className="font-crimson text-3xl">
        This is an elegant Crimson Text sub-headline
      </h2>
      <p className="font-roboto text-base">
        And this is the body text using Roboto Condensed. It's great for
        paragraphs and UI elements that need to be clear and concise.
      </p>
    </div>
  );
}
export default function HomePage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to the Home Page!</h2>
      <p className="text-lg">
        This is the main content area for the application's landing page. The
        header and footer are part of the root layout.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Get Started
      </button>
      <MyComponent />
    </div>
  );
}
