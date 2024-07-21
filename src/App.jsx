import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import ImageDetails from "./components/ImageDetails/ImageDetails";
import Header from "./components/Header/Header";
import "./styles/main.scss";
import Gallery from "./pages/Gallery";

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
        <Header />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<ImageDetails />} />
          <Route path="/images" element={<Gallery />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
