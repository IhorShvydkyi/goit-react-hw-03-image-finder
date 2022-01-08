import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import Searchbar from "./components/Searchbar/Searchbar";
import api from "./components/Services/Api";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    searchInfo: "",
    data: [],
    status: "idle",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchInfo } = this.state;

    if (prevState.searchInfo !== searchInfo) {
      this.setState({ status: "pending", page: 1 });
      api
        .fetchImages(searchInfo, page)
        .then((data) => data.hits)
        .then((images) => {
          // console.log(images)
          this.setState({ data: images, status: "resolved" });
        });
    }
  }

  handleFormSubmit = (searchInfo) => {
    this.setState({ searchInfo });
  };

  render() {
    const { status, data } = this.state;
    // console.log(data)
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === "idle" && <div>Enter your text</div>}

        {status === "pending" && <div>Loading</div>}

        {status === "resolved" && (
          <div>
            <ImageGallery data={data} />
          </div>
        )}
      </div>
    );
  }
}
