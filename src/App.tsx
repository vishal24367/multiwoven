import { Routes, Route } from "react-router-dom";
import { MAIN_PAGE_ROUTES, AUTH_ROUTES } from "./routes";
import Heading from "./components/Heading";
import MainLayout from "./views/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./views/PageNotFound";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {AUTH_ROUTES.map(({ url, component, name }) => (
          <Route path={url} element={component} key={name} />
        ))}

        <Route path="/" element={<MainLayout />}>
          {MAIN_PAGE_ROUTES.map(({ url, component, name }) => (
            <Route path={url} element={component} key={name} />
          ))}
        </Route>

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default App;
