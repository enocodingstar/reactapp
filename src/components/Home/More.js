import more from '../../MetaBnB Images/more.png'

function More() {
  return (
    <section id="more" className="flex align-center justify-between">
        <div className="text flex column">
            <h2>Metabnb NFTs</h2>
            <p>Discover our NFTs gift cards collection.
                Loyal customers get amazing gift cards
                which are traded as NFTs. These NFTs 
                give our customers access to loads of 
                our exclusive services.
            </p>
            <button>Learn More</button>
        </div>
        <div className="image">
            <img src={more} alt="More" />
        </div>
    </section>
  )
}

export default More