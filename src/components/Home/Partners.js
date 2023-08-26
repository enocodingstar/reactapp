import mbToken from '../../MetaBnB Images/mbtoken.png';
import metaMask from '../../MetaBnB Images/metamask.png';
import openSea from '../../MetaBnB Images/opensea.png'

function Partners() {
  return (
    <section id="partners" className="flex justify-evenly align-center">
        <img src={mbToken} alt="MBToken" />
        <img src={metaMask} alt="MetaMask" />
        <img src={openSea} alt="OpenSea" />
    </section> 
  )
}

export default Partners