import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    query: "",
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
        {/* <ToastContainer /> */}
      </>
    );
  }
}
