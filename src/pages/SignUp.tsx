import React, { FC, useState } from "react";
import Form from "../components/Form/Form";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const SignUp: FC = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const isInvalid = emailAddress === "" || password === "" ||  repeatPassword === "";

  const handleSignUp = () => {
    console.log("Logging In...");
  };
  return (
    <>
      <Form
        route='/signin'
        routing__title='SIGN IN'
        title='Get Started Absolutely for free.'
        account__text='Already have an account'
      >
        <div className='right__container__content signup'>
          <div className='inner__content'>
            <h2 className='content__title'>Get Started Absolutely for free</h2>
            <p className='content__enter__details'>Enter your details below.</p>
            <div className='content__inputs'>
              <div className='input__container'>
                <input
                  type='text'
                  placeholder='First name'
                  name='firstname'
                  value = {name}
                  onChange = {({target}) => setName(target.value)}
                />
              </div>
              <div className='input__container'>
                <input
                  type='text'
                  placeholder='Last name'
                  name='lastname'
                  onChange = {({target}) => setLastName(target.value)}

                value = {lastName}
                />
              </div>
              <div className='input__container'>
                <input type='email' placeholder='Email' name='email' id=''
                value = {emailAddress}
                onChange = {({target}) => setEmailAddress(target.value)}

                />
              </div>

              <div className='input__container'>
                <input
                  type={show ? "text" : "password"}
                  placeholder='Password'
                  name='password'
                  value = {password}
                  onChange = {({target}) => setPassword(target.value)}

                />

                {show1 ? (
                  <VisibilityOffIcon onClick={() => setShow1(false)} />
                ) : (
                  <VisibilityIcon onClick={() => setShow1(true)} />
                )}
              </div>

              <div className='input__container'>
                <input
                  type={show1 ? "text" : "password"}
                  placeholder='Repeat password'
                  name='password'
                  value = {repeatPassword}
                  onChange = {({target}) => setRepeatPassword(target.value)}

                />

                {show ? (
                  <VisibilityOffIcon onClick={() => setShow(false)} />
                ) : (
                  <VisibilityIcon onClick={() => setShow(true)} />
                )}
              </div>

              <div className='top__container__title mobile__version'>
                <p>
                  <span className='no__account'>Don't have an account?</span>
                  <span className='top__container__routing'>
                    <Link to={ROUTES.SIGN_IN}>SIGN IN</Link>
                  </span>
                </p>
              </div>

              <button disabled = {isInvalid} onClick={handleSignUp}>SIGN UP</button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
