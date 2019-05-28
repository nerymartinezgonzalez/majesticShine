import React from "react";

class BasicShine extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <img src={"../resources/basic.jpeg"} alt="shiny car" height="42" width="42"/>
      </div>
    );
  }
}

export default BasicShine;
