import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

    return <>There was a error with this page</>;
  }