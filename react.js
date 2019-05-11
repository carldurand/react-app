import React from 'react';

class App extends React.Component {
  state={
  name:"",
  email:"",
  phoneNumber:"",
  submited: false 
  }
  
  handleSubmit = () => {
    this.setState({submitted:true})
  }
  
  setName = event  => {
    console.log(event.target.value);
    this.setState({
      name:event.target.value
    });
  }
  
   setEmail = event  => {
    console.log(event.target.value);
    this.setState({
      email:event.target.value
    });
  }
  
  setPhoneNumber = event  => {
    console.log(event.target.value);
    this.setState({
      phoneNumber:event.target.value
    });
  }
  
  render(){
  return (
    <div className="App">
      <h2>Social profile</h2>
    <p>An app for your social media profiles</p>
    { !this.state.submitted &&
    <div>
    <input onChange={this.setName} style={{"display":"block"}} placeholder="Name" />
    <input onChange={this.setEmail} style={{"display":"block"}} placeholder="email" />
    <input onChange={this.setPhoneNumber} style={{"display":"block"}} placeholder="phone number" />
    <button onClick={this.handleSubmit }>Submit</button>
    </div>}
    
    {this.state.submitted && 
    
    <div>
    {"Your name is: " + this.state.name}
    <br />
    {"your email is: " + this.state.email}
    <br />
    {"your phone number is: " + this.state.phoneNumber}
    
    </div>}
    
    
    </div>
  );
  }
}


export default App;
