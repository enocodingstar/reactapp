import React, {useState} from "react"

import {Link} from "react-router-dom"

import close from "../MetaBnB Images/x.png"

import MetaMask from "../MetaBnB Images/metamas.png"
import Wallet from "../MetaBnB Images/wallet.png"

import logo from '../MetaBnB Images/logo.png'



function Header() {
    const [showOverlay, setShowOverlay] =  useState(false);

    const btnClick = () => {
        setShowOverlay(!showOverlay)
    }
  return (
    <header className='flex align-center justify-center full-width'>
        <div className="logo">
            <img src={logo} alt="Meta BnB" />
        </div>
        <section className={`bg flex justify-center align-center ${!showOverlay ? "close" : ""}`}>
            <div className="content">
                <div className="title flex justify-between align-center full-width">
                    <strong>Connect Wallet</strong>
                    <img src={close} alt="Close" onClick={btnClick} />
                </div>
                <div className="text flex column">
                    <p>Choose your preferred wallet</p>
                    <button className="flex align-center justify-between">
                        <img src={MetaMask} alt="MetaMaskWallet" />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628
                          17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 
                          10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 
                          2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z" fill="#959DA6">
                         </path>
                        </svg>
                    </button>
                    <button className="flex align-center justify-between">
                        <img src={Wallet} alt="WalletConnect" />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628
                          17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 
                          10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 
                          2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z" fill="#959DA6">
                         </path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
        <div className="wrapper flex align-center justify-between">
            <nav>
                <ul className='flex justify-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/places-to-stay">Place to stay</Link></li>
                    <li><a>NFTs</a></li>
                    <li><a>Community</a></li>
                </ul>
            </nav>
            <button onClick={btnClick}>Connect Wallet</button>
        </div>
    </header>
  )
}

export default Header