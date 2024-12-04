import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  // save advice quote
  state = { advice: "" };

  componentDidMount() {
      this.fetchAdvice();
  }

  fetchAdvice = () => {
      axios
          //get advice quote from api
          .get("https://api.adviceslip.com/advice")
          // if quote found, add quote to state
          .then((response) => {
              const { advice } = response.data.slip;
              this.setState({ advice });
          })
          // throw error if not found
          .catch((error) => {
              console.log(error);
          });
  };

  render() {
      const { advice } = this.state;

      return (
          <div className="app">
              <div className="card">
                <h1>Quote of the Day</h1>
                  <button className="button" onClick={this.fetchAdvice}>
                      <span>Get Quote</span>
                  </button>
                  <p className="heading">{advice}</p>
              </div>
          </div>
      );
  }
}

export default App;