import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Home from "./pages/Home";
import NasaImageDetails from "./components/ImageDetails/NasaImageDetails";
import Header from "./components/Header/Header";
import "./styles/main.scss";

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
          <Route path="/details/:id" element={<NasaImageDetails />} />
          <Route path="/images" element={<ImageGallery />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
