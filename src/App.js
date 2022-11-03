import routes from "./routes";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const routeContent = useRoutes(routes);
  return (
    <>
      <HelmetProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="App">{routeContent}</div>
        </ErrorBoundary>
      </HelmetProvider>
    </>
  );
}

export default App;
