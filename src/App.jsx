import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./components/Details";
import AdoptedPetContext from "./AdoptedPetContext";
import NasaImageDetails from "./components/NasaImageDetails";
import NasaImageList from "./components/NasaImageList";

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
  const adoptedPetHook = useState(null);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* Context to allow entire app to have access to global state adoptedPet */}
        <AdoptedPetContext.Provider value={adoptedPetHook}>
          <header>
            <Link to="/">Nasa Images</Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<NasaImageDetails />} />
            <Route path="/images" element={<NasaImageList />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
