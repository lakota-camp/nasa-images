import { useState } from "react";

const CarouselFunction = (props) => {
  const { images = "http://pets-images.dev-apis.com/pets/none.jpg", title } =
    props;

  const [active, setActive] = useState(0);

  const handleIndexClick = (e) => {
    setActive(e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <h3>{title}</h3>
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={handleIndexClick}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselFunction;
