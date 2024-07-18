import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NasaImageList from "./components/NasaImageList";
import Home from "./pages/Home";
import NasaImageDetails from "./components/NasaImageDetails";

// Cache time in milliseconds
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Once fetch, do not re-fetch
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// App component
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* Header */}
        <header>
          <Link to="/">Home</Link>
          <Link to="/images">Nasa Images</Link>
        </header>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<NasaImageDetails />} />
          <Route path="/images" element={<NasaImageList />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
