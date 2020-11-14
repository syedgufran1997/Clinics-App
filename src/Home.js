import React, { Component } from "react";
import homestyles from './styles/homestyles.module.css';
import { Switch, Route } from "react-router-dom";
import Button from "./components/Button/Button";
import HomePage from "./containers/HomePage/HomePage"
import AdminPage from "./containers/AdminsPage/AdminsPage"
import ClinicPage from "./containers/ClinicsPage/ClininsPage"


const initialState = {
  Name: "",
  Email: "",
  Address: "",
  Password: "",
  NameError: "",
  EmailError: "",
  AddressError: "",
  PasswordError: "",
  isLogin: true,
};

class Home extends Component {
  state = initialState;

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let NameError = "";
    let EmailError = "";
    let AddressError = "";
    let PasswordError = "";

    if (!this.state.Name) {
      NameError = "Invalid Name";
    }

    if (!this.state.Email.includes("@")) {
      EmailError = "Invalid Email";
    }

    if (!this.state.Address) {
      AddressError = "Address Cannot Be Empty";
    }

    if (this.state.Password.length < 8) {
      PasswordError = "Need a strong Password";
    }

    if (EmailError || NameError || AddressError || PasswordError) {
      this.setState({ EmailError, NameError, AddressError, PasswordError });
      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      const patient_register = {
        Name: this.state.Name,
        Email: this.state.Email,
        Address: this.state.Address,
        Password: this.state.Password,
      };
      localStorage.setItem(
        "login_signup",
        JSON.stringify(patient_register)
      );
      this.setState(initialState);
    }
    this.props.history.push("/home_page");
  };

  render() {
    return (
      <>
        <div className={homestyles.content}>
          <h1>Digital Clinic</h1>
          <div className={homestyles.signInStyles}>
            <div>
              <div className={homestyles.regbuttons}>
                <button onClick={() => this.setState({ isLogin: true })}>
                  Login
                </button>
                <button onClick={() => this.setState({ isLogin: false })}>
                  Sign Up{" "}
                </button>
              </div>
              <form className={homestyles.signupbtn}>
                {!this.state.isLogin && (
                  <>
                    <input
                      name="Name"
                      placeholder={"Name"}
                      value={this.state.Name}
                      onChange={(e) => this.change(e)}
                    />
                    {this.state.NameError ? (
                      <div className={homestyles.error}>
                        {this.state.NameError}
                      </div>
                    ) : null}
                    <br />
                  </>
                )}

                <input
                  name="Email"
                  placeholder="Email"
                  value={this.state.Email}
                  onChange={(e) => this.change(e)}
                />
                {this.state.EmailError ? (
                  <div className={homestyles.error}>
                    {this.state.EmailError}
                  </div>
                ) : null}
                <br />

                {!this.state.isLogin && (
                  <>
                    <textarea
                      name="Address"
                      placeholder="Address"
                      value={this.state.Address}
                      onChange={(e) => this.change(e)}
                    />
                    {this.state.AddressError ? (
                      <div className={homestyles.error}>
                        {this.state.AddressError}
                      </div>
                    ) : null}
                    <br />
                  </>
                )}

                <input
                  name="Password"
                  type="password"
                  placeholder="Password"
                  value={this.state.Password}
                  onChange={(e) => this.change(e)}
                />
                {this.state.PasswordError ? (
                  <div className={homestyles.error}>
                    {this.state.PasswordError}
                  </div>
                ) : null}
                <div className={homestyles.submitButton}>
                  <Button
                    onClick={(e) => this.onSubmit(e)}
                    buttonName={this.state.isLogin ? "Log in" : "sign up"}
                    style={{
                      color: "white",
                      width: "260px",
                      margin: "20px 30px",
                    }}
                  ></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function HomeRoutes() {
  return (
    <>
     <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home_page" exact component={HomePage} />
      <Route path="/clinic_page" exact component={ClinicPage} />
      <Route path="/admin_page" component={AdminPage} />
   </Switch>
    </>
  );
}

export default HomeRoutes;