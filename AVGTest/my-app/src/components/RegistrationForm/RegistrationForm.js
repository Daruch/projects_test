import React from 'react';



class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "dassha@gmail.com",
      phone: "0674534533453",
      select: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState({
      [event.target.name]: value, //not sure how it works
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.select);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Your name"
          />
        </label>
        <label>
          Email:
          <input type="text" name="email" placeholder="Your email" />
        </label>
        <label>
          Phone:
          <input
            type="number"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="+38(___) ___ __ __"
          />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={this.state.select} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Sign up" />
      </form>
    );
  }
}

export default RegistrationForm; 