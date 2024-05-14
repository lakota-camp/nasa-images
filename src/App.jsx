import React from "react";
import { createRoot } from "react-dom/client";

// Pet component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// App component
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Petey",
      breed: "Boston Terrier & Pug",
    }),

    React.createElement(Pet, {
      animal: "Cat",
      name: "Phil",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Booker",
      breed: "Australian Shepherd",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Charlie",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Coconut",
      breed: "Parakeet",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Pineapple",
      breed: "Parakeet",
    }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
