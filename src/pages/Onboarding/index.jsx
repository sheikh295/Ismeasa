import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database"
import { fbapp } from 'shared/Firebaseapp'

const apiKey = import.meta.env.GMAP_API_KEY
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';

const loadasyncscript = (src) => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src
    })
    script.addEventListener('load', () => resolve(script));
    document.head.appendChild(script)
  })
};


export default function Onboarding() {

  const db = getDatabase(fbapp);

  const searchInput = useRef(null);
  const [address, setAddress] = useState({});
  const [RestaurantName, setRestaurantName] = useState('');
  const [VatNumber, setVatNumber] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('')

  const initMapScript = () => {
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=AIzaSyCTXnohcGL0e0EIUr2v4jpEOOoDMKewEaM&libraries=places&v=weekly`;
    return loadasyncscript(src)
  };

  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(place.address_components)
  };

  const initAutocomplete = () => {
    if (!searchInput.current) return;
    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current)
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));
  };

  useEffect(() => {
    initMapScript().then(() => {
      initAutocomplete()
    })
  }, [])

  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);

  function writeUserData() {
    set(ref(db, 'restaurants/' + userId), {
      place: address,
      Restaurant_Name: RestaurantName,
      Vat_Number: VatNumber,
      Phone_Number: PhoneNumber
    });
  }

  const OnboardingHandler = (event) => {
    event.preventDefault();
    setUserId(userId+1)
    writeUserData();
    navigate('/home')
  };

const containerStyle = 'w-[480px] mt-5 m-auto mb-10';
const headingStyle = 'text-[#222] text-[35px] font-[inter] font-bold';
const inputLabelStyle = 'mt-[10px] text-[13px] font-semibold text-[#1f1f1f]';
const inputStyle = 'w-[480px] mt-[8px] px-[14.5px] py-[11px] justify-center items-center gap-2 rounded-[5px] border border-solid border-[#D2D2D2] bg-white text-[12px] font-normal';
const iframeStyle = 'border-0 mt-5';
const buttonStyle = 'w-[480px] px-[12px] py-[10px] justify-center items-center gap-2 rounded-[100px] bg-[#FDDB00] border-0 border-none font-medium mt-[15px] flex';


  return (
    <div>
        <div className={containerStyle}>
          <p className={headingStyle}>Let's get you started</p>
          <form onSubmit={(event) => OnboardingHandler(event)}>
            <p className={inputLabelStyle}>Restaurant Name</p>
            <input onChange={(event)=> setRestaurantName(event.target.value)} type='text' name='RestaurantName' required className={inputStyle} placeholder='Enter Company Name'></input>
            <p className={inputLabelStyle}>Vat Number</p>
            <input onChange={(event)=> setVatNumber(event.target.value)} type='number' name='VatNumber' required className={inputStyle} placeholder='Enter vat number'></input>
            <p className={inputLabelStyle}>Phone Number</p>
            <input onChange={(event)=> setPhoneNumber(event.target.value)} type='number' name='PhoneNumber' required className={inputStyle} placeholder='+923211234567'></input>
            <p className={inputLabelStyle}>Address</p>
            <input ref={searchInput} type='text' required className={inputStyle} placeholder='Enter Address'></input>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13611.401805275973!2d74.25292042327881!3d31.47329977953191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695046174629!5m2!1sen!2s" width="480" height="240" className={iframeStyle} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button type='submit' className={buttonStyle}>Finish <BsArrowRight size={16} /></button>
          </form>
        </div>
    </div>
  )
}
