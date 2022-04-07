import React, {useRef, useContext, useEffect} from 'react';
import { GlobalContext } from '../App';

export default function CookieMessage() {

    const { overlayRef } = useContext(GlobalContext);
    const cookieRef = useRef();

    //after delay show cookie message
    const displayCookieMessage = () => {
        overlayRef.current.classList.remove('hidden');
        cookieRef.current.classList.remove('hidden');
    }

    //handle Accept
    const acceptCookies = () => {
        window.onscroll = ''
        cookieRef.current.remove();
        overlayRef.current.remove();
    }

    const rejectCookies = () => {
        window.location.assign("https://www.google.com")
    }

    //prevent scroll, show cookie message
    useEffect(() => {
        // window.onscroll = function () {
        //     window.scrollTo(0,0);
        //     return
        //     }
        setTimeout(() => {
            displayCookieMessage();
        }, 2000)
    }, []);

    //check and set cookies
    // useEffect(() => {
    //     console.log(document.cookie);
    //     const cookie = document.cookie;
    //     const dateTime = new Date(Date.now());
    //     console.log(cookie);
    //     console.log(dateTime);
    //     let  expires = "; expires=" + new Date(Date.now()).toUTCString();
    //     let value = 'Stocks';
    //     let name = 'StockAlarm'
    //     if (!cookie){
    //         document.cookie = name + "=" + (value || "")  + expires + "; path=/"
    //     //if : cookie has expired{displayMessage}
    //     }
    //     //if we have a cookie: dont display the cookie message
    // })

  return (
    <div ref={cookieRef} className='cookie-message hidden animate__animated animate__fadeIn'>
        <div className='cookie-text'><h2 className='title__text'>This site uses cookies for perfomative browing 😀</h2></div>
        <div className='cookie--btns'>
            <button onClick={rejectCookies} className='btn title__text'>Decline</button>
            <button onClick={acceptCookies} className='btn title__text'>Accept</button>
        </div>
    </div>
  )
}
