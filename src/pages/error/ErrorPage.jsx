import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>
        {error?.statusText || error?.message || 
         "An unexpected error occurred. Please try again later."}
      </p>
      <a href="/">Go Home</a>
    </div>
  );
}
