import Grouppng from './images/Group.png'
import Frame202 from './images/Frame 202.png'
import image66 from './images/image 66.png'
import image69 from './images/image 69.png'
import vector3 from './images/Vector(3).png'
import { useState } from 'react'

export default function Nav(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)
    return(
        <div>
           
              <button 
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}
              id="menuIcon">
               <svg
               xmlns="https://www.w3.org/2000/svg"
               viewBox='0 0 20 20'
               className='h-5 w-5'
               fill='red'
               >
                 <path 
                 fillRule='evenodd'
                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 10 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                 clipRule="evenodd"
                 />
               </svg>
              </button>
             
            
    <nav id="menuBox">
      <div className="nav-img">
        <img src={Grouppng} alt="" />
      </div>
      <div className= {
        isNavExpanded ? "nav-link expanded" : "nav-link"
        }
        >
        <a href="google.com"> <span>Home</span> </a>
        <a href="google.com"> <span>Place to stay</span> </a>
        <a href="google.com"> <span>NFTs</span> </a>
        <a href="google.com"> <span>Community</span> </a>
      </div>
      <div className="nav-button">
        <button onclick="trustWallet()">
          <span>Connect wallet</span>
        </button>
      </div>
    </nav>

    <div className="meta-trust">
      <div className="meta-head">
        
        <img src={Frame202} alt="" />
      </div>
      <div className="meta-content">
        <span>Choose your preferred wallet:</span>
        <div className="Meta-mask">
          <img src={image66} alt="" />
          <span>Metamask</span>
          <img src="images/Vector(3).png" alt="" id="shape" />
        </div>
        <div className="walletconnect">
          <img src={image69} alt="" />
          <span>WalletConnect</span>
          <img src={vector3} alt="" id="shape" />
        </div>
      </div>
    </div>
        </div>
    )
}