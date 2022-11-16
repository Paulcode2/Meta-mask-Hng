import logo from './images/Group(1).png'
import facebook from './images/facebook-263-721950.png'
import insta from './images/instagram-216-721958.png'
import tweet from './images/twitter-241-721979.png'


export default function Footer(){
    return(
        <footer>
      <div className="F-1">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="socials">
          <a href="facebook.com">
            <img src={facebook} alt="" />
          </a>
          <a href="instagram.com">
            <img src={insta} alt="" />
          </a>
          <a href="twitter.com">
            <img src={tweet} alt="" />
          </a>
        </div>
        <div>
          <span>&copy 2022 Metabnb</span>
        </div>
      </div>
      
      <div class="F-2">
        <div className="header2">
          <span>Community</span>
        </div>
        <div>
          <a href="google.com">
            <span>NFT</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Tokens</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Landlords</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Discord</span>
          </a>
        </div>
      </div>
      <div className="F-3">
        <div className="header3">
          <span>Places</span>
        </div>
        <div>
          <a href="google.com">
            <span>Castle</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Farms</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Beach</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Learn more</span>
          </a>
        </div>
      </div>
      <div className="F-4">
        <div className="header4">
          <span>About Us</span>
        </div>
        <div>
          <a href="google.com">
            <span>Road map</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Creators</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Career</span>
          </a>
        </div>
        <div>
          <a href="google.com">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
      
    </footer>
    )
}