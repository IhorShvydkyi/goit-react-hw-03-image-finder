import { Component } from "react";

export default class ImageGallery extends Component {
  state = {
    imageQuery: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      fetch(
        `https://pixabay.com/api/?key=24190163-4fef3af5a8c9fb39e43dd5d2d&q=${this.props.query}&image_type=photo}`
      )
        .then((res) => res.json())
        .then((imageQuery) => this.setState({ imageQuery }));
    }
  }

  render() {
    return (
      <>
        {this.state.imageQuery && (
          <ul className="gallery">{this.props.query}</ul>
        )}
      </>
    );
  }
}
