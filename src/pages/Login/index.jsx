import React from 'react'
import 'app/index.css'
import { BsFacebook, BsGoogle, BsArrowRight, BsMicrosoft } from 'react-icons/bs'
import { BiSolidShow } from 'react-icons/bi'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, OAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { fbapp } from 'shared/Firebaseapp'
import classnames from 'classnames';
import topImage from 'assets/images/Ellipse-74.png';
import bottomImage from 'assets/images/Ellipse-73.png';
import { v4 as uuidv4 } from 'uuid'

export default function Login() {

  const navigate = useNavigate()

  const auth = getAuth(fbapp);
  const provider = new GoogleAuthProvider();
  const msprovider = new OAuthProvider('microsoft.com');
  const fbprovider = new FacebookAuthProvider();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [passType, setPassType] = useState('password');
  let showPass = false;

  const SigninHandler = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.sessionStorage.setItem('token', uuidv4())
        setErrorMsg('')
        navigate('/Onboarding')
      })
      .catch((error) => {
        setErrorMsg(error.code);
        const errorMessage = error.message;
      });
  }

  const GoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.sessionStorage.setItem('token', uuidv4())
        setErrorMsg('')
        navigate('/Onboarding')
      }).catch((error) => {
        setErrorMsg(error.code);
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  const MicrosoftSignIn = () => {
    signInWithPopup(auth, msprovider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        window.sessionStorage.setItem('token', uuidv4())
        setErrorMsg('')
        navigate('/Onboarding')
      })
      .catch((error) => {
        setErrorMsg(error.code);
      });
  };

  const FacebookSignIn = () => {
    signInWithPopup(auth, fbprovider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const user = result.user;
        const accessToken = credential.accessToken;
        window.sessionStorage.setItem('token', uuidv4())
        setErrorMsg('')
        navigate('/Onboarding')
      })
      .catch((error) => {
        setErrorMsg(error.code);
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  const containerStyle = classnames('w-[480px] m-auto mt-16');
  const headingStyle = classnames('text-center text-[#842FA8] font-bold text-[54px]');
  const subheadingStyle = classnames('font-[inter] text-[20px] font-bold tracking-[-0.75px]');
  const subtextStyle = classnames('text-[#8F8F8F] font-[Inter] text-[13px] font-normal');
  const errorStyle = classnames('text-red-500 text-xs text-center translate-y-5');
  const forgotPasswordStyle = classnames('text-[14px] text-end cursor-pointer');
  const signupLinkStyle = classnames('mt-[10px] text-[#8f8f8f] font-normal flex justify-center text-[12px]');
  const signupTextStyle = classnames('text-[#1f1f1f] text-[14px] font-semibold mt-0 ml-1 cursor-pointer');
  const inputStyles = classnames('mt-2 w-[480px] px-[14.5px] py-[13px] justify-center items-center gap-2 rounded-[5px] border border-solid border-[#D2D2D2] bg-white text-[11px] font-normal');
  const getButtonStyles = (title) => classnames('w-[480px] px-[12px] py-[10px] justify-center items-center gap-2 rounded-[100px]  border-0 border-none font-medium  flex', {
    'bg-[#FDDB00] mt-[30px]' : title == 'login',
    "bg-[#cf4040] mt-[10px] text-[#e9f0ea]" : title == 'google',
    'bg-[#4641d7] mt-[10px] text-[#e9f0ea]' : title == 'facebook',
    'bg-[#60599c] mt-[10px] text-[#e9f0ea]' : title == 'microsoft',
  })

  return (
    <div>
        <img className='absolute right-0 top-0' src={topImage} alt='missing' />
        <img className='absolute bottom-0 left-0' src={bottomImage} alt='missing' />
        <div className={containerStyle}>
      <p className={headingStyle}>Ismeasa</p>
      <div className='mt-12'>
        <p className={subheadingStyle}>Log In To Your Account</p>
        <p className={subtextStyle}>Please enter your login credentials below to login</p>
      </div>
      <p className={errorStyle}>{errorMsg}</p>
      <form onSubmit={(event) => SigninHandler(event)} className='mt-[50px] text-[#1f1f1f] font-[inter] text-[13px] font-semibold tracking-[-0.48px] margin-top: 50px;'>
        <p className='mt-[40px]'>Email</p>
        <input name='email' type='email' required className={inputStyles} placeholder='Enter email' onChange={(event)=> setEmail(event.target.value)}/>
        <p className='mt-[20px]'>Password</p>
        <input name='password' type={passType} required className={inputStyles} placeholder='Enter your password' onChange={(event)=> setPassword(event.target.value)} /><BiSolidShow size={20} className='translate-x-[450px] translate-y-[-30px] absolute cursor-pointer' onClick={() => {showPass = !showPass; passType == 'text' ? setPassType('password') : setPassType('text') }} />
        <p className={forgotPasswordStyle}>Forgot Password?</p>
        <button type='submit' className={getButtonStyles('login')}>Login <BsArrowRight size={16} /></button>
        <button onClick={(event) => {GoogleSignIn(event)}} className={getButtonStyles('google')}><BsGoogle size={16} color='#e9f0ea' />Google</button>
        <button onClick={(event) => {FacebookSignIn(event)}} className={getButtonStyles('facebook')}><BsFacebook size={16} color='#e9f0ea' />Facebook</button>
        <button onClick={(event) => {MicrosoftSignIn(event)}} className={getButtonStyles('microsoft')}><BsMicrosoft size={16} color='#e9f0ea' />Microsoft</button>
        <p className={signupLinkStyle}>Don't have an account ? <p className={signupTextStyle} onClick={() => {navigate('/signup')}}>Signup</p></p>
      </form>
    </div>
    </div>
  )
}
