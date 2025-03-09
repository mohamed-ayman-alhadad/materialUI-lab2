import React from 'react'
import styles from './Footer.module.css'
import qr from '../../../images/qr.png'
import playStore from '../../../images/google_play.png'
import appStore from '../../../images/app_store.png'
import facebook from '../../../images/facebook.png'
import twitter from '../../../images/twitter.png'
import insta from '../../../images/insta.png'
import linkedIn from '../../../images/linkedIn.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className={`${styles.footer} bg-black text-white`}>
      <div className={`${styles.footerContainer} d-flex container gap-5 justify-content-between`}>
        <div className='d-flex flex-column'>
          <h3>Exclusive</h3>
          <h5>Subscribe</h5>
          <p className='text-light'>Get 10% off your first order</p>
        </div>
        <div className='d-flex flex-column'>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='text-light'>exclusive@gmail.com</p>
          <p className='text-light'>+88015-88888-9999</p>
        </div>
        <div className='d-flex flex-column'>
          <h3>Account</h3>
          <p className='text-light'>My Account</p>
          <p className='text-light'>Login / Register</p>
          <p className='text-light'>Cart</p>
          <p className='text-light'>Wishlist</p>
          <p className='text-light'>Shop</p>
        </div>
        <div className='d-flex flex-column'>
          <h3>Quick Link</h3>
          <p className='text-light'>Privacy Policy</p>
          <p className='text-light'>Terms Of Use</p>
          <p className='text-light'>FAQ</p>
          <p className='text-light'>Contact</p>
        </div>
        <div className='d-flex flex-column'>
          <h3>Download App</h3>
          <p className='text-light'>Save $3 with App New User Only</p>
          <div className='d-flex gap-2'>
            <img src={qr} width={"80px"} height={"80px"} />
            <div className='d-flex flex-column gap-2 justify-content-center'>
              <img src={playStore} width={"104px"} height={"30px"} />
              <img src={appStore} width={"104px"} height={"30px"} />
            </div>
          </div>
          <div className='d-flex gap-2 justify-content-between mt-4'>
            <img src={facebook} width={"27px"} height={"27px"} className='rounded-circle bg-dark p-1' />
            <img src={twitter} width={"27px"} height={"27px"}className='rounded-circle bg-dark p-1'  />
            <img src={insta} width={"27px"} height={"27px"} className='rounded-circle bg-dark p-1'/>
            <img src={linkedIn} width={"27px"} height={"27px"} className='rounded-circle bg-dark p-1'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer