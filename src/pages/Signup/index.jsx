import React, { useState } from 'react'
import 'app/index.css'
import { BsArrowRight } from 'react-icons/bs'
import { BiSolidShow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {fbapp} from 'shared/Firebaseapp'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import topImage from 'assets/images/Ellipse-74.png';
import bottomImage from 'assets/images/Ellipse-73.png';

export default function Signup() {

    const auth = getAuth(fbapp);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [passType, setPassType] = useState('password');
    const [ConfirmPassType, setConfirmPassType] = useState('password')
    let showPass = false;
    let showConfirmPass = false;
    const navigate = useNavigate()

    const SignupHandler = (event) => {
        event.preventDefault()
        if (event.target.password.value == event.target.confirmPassword.value ) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setSuccessMsg("You've registered successfully, on redirect please login")
                    setErrorMsg('')
                    event.target.email.value = '';
                    event.target.password.value ='';
                    event.target.confirmPassword.value = '';
                    setTimeout(() => {
                        navigate('/login')
                    }, 1500);
                })
                .catch((error) => {
                    setErrorMsg(error.code);
                    const errorMessage = error.message;
                    setSuccessMsg('')
                });
        }
        else {
            setErrorMsg('Password does not match')
        }
    };

const containerStyle = 'w-[480px] m-auto mt-16';
const headingStyle = 'text-center text-[#842FA8] font-bold text-[54px]';
const subheadingStyle = 'font-[inter] text-[20px] font-bold tracking-[-0.75px]';
const subtextStyle = 'text-[#8F8F8F] font-[Inter] text-[13px] font-normal';
const successMsgStyle = 'text-green-600 text-xs text-center translate-y-5';
const errorMsgStyle = 'text-red-500 text-xs text-center translate-y-5';
const inputStyle = 'mt-2 w-[480px] px-[14.5px] py-[13px] justify-center items-center gap-2 rounded-[5px] border border-solid border-[#D2D2D2] bg-white text-[11px] font-normal';
const showPasswordIconStyle = 'translate-x-[450px] translate-y-[-30px] absolute cursor-pointer';
const buttonStyle = 'w-[480px] px-[12px] py-[10px] justify-center items-center gap-2 rounded-[100px] bg-[#FDDB00] border-0 border-none font-medium mt-[30px] flex';
const signupLinkStyle = 'mt-[10px] text-[#8f8f8f] font-normal flex justify-center text-[12px]';
const signinTextStyle = 'text-[#1f1f1f] text-[14px] font-semibold mt-0 ml-1 cursor-pointer';

  return (
    <div>
        <img className='absolute right-0 top-0' src={topImage} alt='missing' />
        <img className='absolute bottom-0 left-0' src={bottomImage} alt='missing' />
        <div className={containerStyle}>
            <p className={headingStyle}>Increasa</p>
            <div className='mt-12'>
                <p className={subheadingStyle}>Create your Account</p>
                <p className={subtextStyle}>Please enter your details below to sign up</p>
            </div>
            <p className={successMsgStyle}>{successMsg}</p>
            <p className={errorMsgStyle}>{errorMsg}</p>
            <form onSubmit={(event) => SignupHandler(event)} className='mt-[50px] text-[#1F1F1F] font-[inter] text-[13px] font-semibold tracking-[-0.48px] margin-top: 50px;'>
                <p className='mt-[40px]'>Email</p>
                <input onChange={(event)=> setEmail(event.target.value)} name='email' type='email' required className={inputStyle} placeholder='Enter email'></input>
                <p className='mt-[20px]'>Password</p>
                <input onChange={(event)=> setPassword(event.target.value)} name='password' type={passType} required className={inputStyle} placeholder='Enter your password'></input><BiSolidShow size={20} className={showPasswordIconStyle} onClick={() => {showPass = !showPass; passType == 'text' ? setPassType('password') : setPassType('text')}} />
                <p className='mt-[20px]'>Confirm Password</p>
                <input name='confirmPassword' type={ConfirmPassType} required className={inputStyle} placeholder='Enter your password'></input><BiSolidShow size={20} className={showPasswordIconStyle} onClick={() => {showConfirmPass = !showConfirmPass; ConfirmPassType == 'text' ? setConfirmPassType('password') : setConfirmPassType('text')}} />
                <button type='submit' className={buttonStyle}>Signup <BsArrowRight size={16} /></button>
                <p className={signupLinkStyle}>Don't have an account ? <span className={signinTextStyle} onClick={() => {navigate('/')}}>Signin</span></p>
            </form>
        </div>
    </div>
  )
}
