import Card from "../components/Card"
import images from "../data/images"
import img from "../MetaBnB Images/filter.png"


function Places() {
  return (
   <>
      <div className="location flex justify-center align-center full-width">
        <select>
            <option value="Restaurant">Restaurant</option>
            <option value="Cottage">Cottage</option>
            <option value="Castle">Castle</option>
            <option value="Fantastic city">Fantastic city</option>
            <option value="Beach">Beach</option>
            <option value="Cabins">Cabins</option>
            <option value="Off-grid">Off-grid</option>
            <option value="Farm">Farm</option>
        </select>
        <div className="options">
        <ul>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantastic city</li>
            <li>Beach</li>
            <li>Cabins</li>
            <li>Off-grid</li>
            <li>Farm</li>
        </ul>
        </div>
        <img src={img} alt="Filter" />
      </div>
      <section className="place flex justify-center wrap">
        {images.map((img) => (
            <Card image={img} />
        ))}
    </section>
   </>
  )
}

export default Places