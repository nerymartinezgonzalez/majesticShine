import React from "react";

class Login extends React.Component {
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
    console.log(this.state);
  }

   handleSubmit(e) {
    e.preventDefault();
    const { name, password } = this.state;

    this.postData('/users', {
      name: name.toLowerCase(),
      password: password.toLowerCase()
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

        <div>
          <img className= "x" src="./resources/lambos2.jpg" alt="black_linconlContinnental"/>
        </div>
        </div>



      );
    }
  }


export default Login;
