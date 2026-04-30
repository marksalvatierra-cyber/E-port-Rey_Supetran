import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="text-7xl font-bold gradient-primary bg-clip-text text-transparent">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-5 py-2.5 rounded-lg gradient-primary text-white text-sm font-semibold shadow-elegant hover:opacity-95 transition"
      >
        Back to Title Page
      </Link>
    </div>
  );
}
