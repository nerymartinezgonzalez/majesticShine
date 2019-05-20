import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import { Element } from "react-scroll";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import SmallBulk from "./components/smallBulk";
import MediumBulk from "./components/mediumBulk";
import LargeBulk from "./components/largeBulk";
import ExtraLargeBulk from "./components/extraLargeBulk";

const styles = {
  width: 300,
  fontSize: "30px"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      meals: [],
      meal: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleClick() {
    let input = this.state.input;
    let obj = undefined;

    this.props.meals.map(function(each) {
      if (input.toLowerCase() === each.diet.toLowerCase()) {
        obj = each;
      }
    });
    this.setState({ found: obj });
  }

  handleEnter(e) {
    if (e.key === "Enter") {
      this.handleClick();
    }
  }

  componentDidMount() {
    axios
      .get("/items")
      .then(res => {
        console.log("respuesta ", res.data);
        this.setState({ meals: res.data });
      })
      .catch(err => {
        console.log("error ", err);
      });
  }

  handleChange(event, index, value) {
    const meal = this.state.meals.filter(meal => meal.id === +value);
    this.setState({
      value: value,
      meal: meal[0]
    });
  }

  //meals.filter(e => e.meal === "meal");
  /*this.props.meals.map(function(each) {
  if(input.toLowerCase() === each.diet.toLowerCase()){

  }
})*/
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <center>
            <h1>Majestic Shine</h1>

            <DropDownMenu
              onChange={this.handleChange}
              style={styles}
              autoWidth={false}
            >
              <MenuItem value={1} primaryText="Basic Shine" />
              <MenuItem value={2} primaryText="Premium Shine" />
              <MenuItem value={3} primaryText="Ultimate Shine" />
            </DropDownMenu>
            {this.state.meal === {} ? null : (
              <div>
                <p>{this.state.meal.diet}</p>
                <br />
              </div>
            )}
          </center>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
