import React from "react";

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

   handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;

    this.postData('/users', {
      name: name.toLowerCase()
    });

    this.setState({
      name: ''
    });
  }

  render() {
      const { name, } = this.state;
    return (
      <div>
      <label>
            Name:{' '}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
          </label>
          <button onClick={this.handleInput}>submit </button>
      </div>
    )
  }
};

export default Login
