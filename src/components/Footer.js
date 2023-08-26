import logo from "../MetaBnB Images/footerlogo.png";
import facebook from "../MetaBnB Images/facebook.png";
import instgram from "../MetaBnB Images/instagram.png";
import twitter from "../MetaBnB Images/twitter.png"

function Footer() {
  return (
    <footer>
        <div id="details" className="flex align-stretch justify-between wrap full-width">
            <div className="column flex justify-between">
                <a href="/">
                    <img src={logo} alt="Meta BnB" />
                </a>
                <div className="widgets flex align-center justify-center">
                    <img src={facebook} alt="Facebook" />
                    <img src={instgram} alt="Instagram" />
                    <img src={twitter} alt="Twitter" />
                </div>
            </div>
            <div className="column flex justify-between">
                <strong>Community</strong>
                <ul>
                 <li><a>NFT</a></li>
                 <li><a>Tokens</a></li>
                 <li><a>Landlords</a></li>
                 <li><a>Discord</a></li>
                </ul>
            </div>
            <div className="column flex justify-between">
                <strong>Places</strong>
                <ul>
                    <li><a>Castle</a></li>
                    <li><a>Farms</a></li>
                    <li><a>Beach</a></li>
                    <li><a>Learn More</a></li>
                </ul>
            </div>
            <div className="column flex justify-between">
                <strong>About Us</strong>
                <ul>
                <li><a>Road Map</a></li>
                <li><a>Creators</a></li>
                <li><a>Career</a></li>
                <li><a>Contact Us</a></li>
                </ul>
            </div>
        </div>
        <p>© 2022 Metabnb</p>
    </footer>
  )
}

export default Footer