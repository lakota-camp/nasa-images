import { Component } from "react";

// Must extend react.Component
class Carousel extends Component {
  state = {
    active: 0,
  };

  // If no props are passed into component
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // + in front of str converts str to number
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  // Must have a render function
  render() {
    // throw new Error("lol error");
    // Mutable
    const { active } = this.state;
    // Immutable
    const { images } = this.props;

    return (
      <>
        <div className="carousel">
          <img src={images[active]} alt="animal hero" />
          <div className="carousel-smaller">
            {images.map((photo, index) => (
              // eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
                onClick={this.handleIndexClick}
                data-index={index}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
