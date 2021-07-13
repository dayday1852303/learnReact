import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';


  class Form extends React.Component {
    constructor(props){
      super(props);
      this.state={
        username:'admin',
        password:'123456',
      }
    }

    login(e){
      axios.post('192.168.0.0.1/login',{
        username:this.state.username,
        password:this.state.password
      })
      .then(function (response) {console.log(response);})
      .catch(function (error) {
        console.log(error);
      })
    }

    reset(){
      this.setState({
        username:'',
        password:'',
      });
    }

    user_change=(e)=>{
      this.setState({
        username:e.target.value
      })
    }

    password_change=(e)=>{
      this.setState({
        password:e.target.value
      })
    }

    render() {
      return (
        <div className="login_container">
          <div className="title"><span></span></div>
          <div className="meg">
            <span></span></div>

          <form className="login_form" action='http://192.168.0.0.1/login'>
            <div>
            <input type='text' placeholder="用户名" value={this.state.username}
                   onChange={this.user_change}></input></div>
            <div>
            <input type='password' placeholder="密码" value={this.state.password}
                   onChange={this.password_change}></input></div>
            <div>
            <input type="reset" onClick={()=>this.reset()}></input></div>
            <div>
            <input type="submit" onClick={()=>this.login()}></input></div>
          </form>
        </div>
      );
    };
  }

  ReactDOM.render(
    <Form />,
    document.getElementById('root')
  )
    
    // ========================================
