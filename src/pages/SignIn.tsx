import React, { useState } from "react";
import Form from "../components/Form/Form";
import * as ROUTES from "../constants/routes";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";



export default function SignIn(props: any) {
  const [show, setShow] = useState(false);

  const authenticated = useSelector((state) => state.user.authenticated)

  console.log('authenticated',authenticated)

  const history = useHistory()

  const [values, setValues] = useState({
      emailAddress:'',
      password:""
  })

  const isInvalid = values.password === "" || values.emailAddress === "";

  const handleSignIn = async (event:any) => {   
    console.log("Logging In...");
    event.preventDefault()

    console.log(process.env)
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //       },
    // }

    const userData = {
        email: values.emailAddress,
        password:values.password
    }

    const body = JSON.stringify(userData)
    console.log('body', body)

    try {

        const res = await axios.post("https://testproject-api-v2.strv.com/auth/native", body, {
            headers: {
                'Content-type':'application/json',
                'APIKey': process.env.REACT_APP_STRV_DATABASE_KEY!
            }
        });

        console.log('res',res)

        console.log('res.data',res.data)

        history.push(ROUTES.HOME)
        
    } catch (err:any) {
        const errors = err.response.data.error
        console.log('error',errors)
        
    }


  };

  const handleChange = (e:any) => {
    
    setValues(values => ({
        ...values, [e.target.name]: e.target.value
    }));
  }

  return (
    <>
      <Form
        route='/signup'
        routing__title='SIGN UP'
        title='Sign in to Eventio.'
        account__text="Don't have an account?"
      >
        <div className='right__container__content signin'>
          <div className='inner__content'>
            <h2 className='content__title'>Sign in to Eventio</h2>
            <p className='content__enter__details'>Enter your details below.</p>
            <div className='content__inputs'>
              <div className='input__container'>
                <input
                  type='email'
                  placeholder='Email'
                  name='emailAddress'
                  id=''
                  value={values.emailAddress}
                  onChange={handleChange}
                />
              </div>

              <div className='input__container'>
                <input
                  type={show ? "text" : "password"}
                  placeholder='Password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                />

                {show ? (
                  <VisibilityOffIcon onClick={() => setShow(false)} />
                ) : (
                  <VisibilityIcon onClick={() => setShow(true)} />
                )}
              </div>

              <div className='top__container__title mobile__version'>
                <p>
                  <span className='no__account'>Already have an account?</span>
                  <span className='top__container__routing'>
                    <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
                  </span>
                </p>
              </div>

              <button disabled={isInvalid} onClick={handleSignIn}>
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

