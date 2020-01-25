import React from "react";
import ListImages from "/Users/sonam/Desktop/image-carousel-from-static-map/client/src/components/ListImages.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: 0,
          Houses:
            "https://carousel9841.s3-us-west-1.amazonaws.com/genMid.21914721_0.jpg "
        }
      ]
    };

    this.getImagesFromDB = this.getImagesFromDB.bind(this);
  }

  getImagesFromDB() {
    fetch("/images")
      .then(res => res.json())
      .then(result => {
        this.setState({ images: result }, () => {
          console.log(this.state.images);
        });
      });
  }

  componentDidMount() {
    this.getImagesFromDB();
  }

  render() {
    return <ListImages images={this.state.images} />;
  }
}

export default App;
