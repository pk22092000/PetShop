import React, { useState } from 'react';
import './SignInScreen.scss';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField'

export default function SignInScreen() {
  const [isRight, setIsRight] = useState(false);
  const initialValues = {
    email: '',
    password: '',
    fullname: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Địa chỉ email không hợp lệ!")
      .required("Địa chỉ email không hợp lệ!"),
    password: Yup.string()
      .min(8, "Mật khẩu phải từ 8 ký tự!")
      .required("Mật khẩu phải từ 8 ký tự!"),
    fullname: Yup.string()
      .max(20, "Tên không thể quá 20 ký tự")
      .required("Tên không được rỗng!"),

  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setTimeout(() => {
      localStorage.setItem("user", "admin")
      window.location = "/"
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
  return (
    <div className='signin'>
      <div className={isRight ? "container right-panel-active" : "container"} >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <>
              <div className="form-container sign-up-container">
                <Form>
                  <h1>Create Account</h1>
                  {/* <div className="social-container">
                  <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div> */}
                  <span>or use your email for registration</span>
                  <FastField component={InputField} name="email" label="Email" placeholder="Email" />
                  <FastField component={InputField} name="password" label="Password" placeholder="Password" type="password" />
                  <FastField component={InputField} name="fullname" label="Full Name" placeholder="Full Name" />
                  {/* <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" /> */}
                  {/* <button>Sign Up</button> */}
                  <button type="submit" disabled={isSubmitting}>
                    Đăng ký
                  </button>
                </Form>
              </div>
            </>
          )}
        </Formik>
        <Formik
          initialValues={{email_user: '', password_user: ''}}
          validationSchema={Yup.object().shape({
            email_user: Yup.string()
              .email("Địa chỉ email không hợp lệ!")
              .required("Địa chỉ email không hợp lệ!"),
            password_user: Yup.string()
              .min(8, "Mật khẩu phải từ 8 ký tự!")
              .required("Mật khẩu phải từ 8 ký tự!"),
          })}
          onSubmit={handleSubmit}
        >
          {({isSubmitting}) => (
            <div className="form-container sign-in-container">
            <Form>
              <h1>Sign in</h1>
              {/* <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div> */}
              <span>or use your account</span>
              <FastField component={InputField} name="email_user" label="Email" placeholder="Email" />
              <FastField component={InputField} name="password_user" label="Password" placeholder="Password" type="password" />
              <a href="#">Forgot your password?</a>
              {/* <button>Sign In</button> */}
              <button type="submit" disabled={isSubmitting}>
                Đăng Nhập
              </button>
            </Form>
          </div>
          )}
        </Formik>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost"
                onClick={() => setIsRight(false)}
              >Đăng Nhập</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                onClick={() => setIsRight(true)}
              >Đăng Ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
