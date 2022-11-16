import images4 from './images/image 4.png'
import images6 from './images/image 6.png'
import images3 from './images/image 3.png'
import images5 from './images/image 5.png'

export default function Header(){

    return(
        <section className="header">
      <div className="first-head">
        <div>
          <h1>
            Rent a <span>Place</span> away from <br />
            <span>Home </span>in the
            <span> MetaVerse</span>
          </h1>
        </div>
        <div>
          <p>
            we provide you access to luxury and affordable houses <br />
            in the metaverse, get a chance to turn your <br />
            imagination to reality at your comfort zone
          </p>
        </div>
        <div className="head-form">
          <form action="">
            <input id="form" type="search" placeholder="Search for location" />
            <button>
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="Second-head">
        <div className="one">
          <img src={images4} alt="" />
          <img src={images6} alt="" />
        </div>
        <div className="two">
          <img src={images3} alt="" />
          <img src={images5} alt="" />
        </div>
      </div>
    </section>
    )
}