import React from "react";

class UltimateShine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      password:""
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
  }

   handleSubmit(e) {
    e.preventDefault();
    const { name, password } = this.state;

    this.props.postData('/users', {
      name: name.toLowerCase(),
      password,
    });

    this.setState({
      name: '',
      password: '',
    });
  }

  postData(url ='', data = {}) {
    return fetch(url, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => this.getData(url))
    .catch(err => console.log(err))
  }


  render() {
    const { name, password } = this.state;
    const {addName, postData} = this.state;
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

          <br />
          <label>
            Password:{' '}
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.handleInput}
            />
          </label>

          <br />
          <button onClick={this.handleSubmit}>submit </button>
        </div>
      );
    }
  }


export default UltimateShine;
