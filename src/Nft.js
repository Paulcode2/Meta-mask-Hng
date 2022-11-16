import frame from './images/Frame 59546.png'

export default function Nft(){
    return(
        <section className="Nft">
      <div className="first-part">
        <div>
          <h1>Metabnb NFTs</h1>
        </div>
        <div>
          <p>
            Discover our NFT gift cards collection. Loyal <br />
            customers gets amazing gift cards which are <br />
            traded as NFTs. These NFTs gives our customer <br />
            access to loads of our exclusive services.
          </p>
        </div>
        <div className="Nft-form">
          <form action="">
            <button>
              <span>Learn More</span>
            </button>
          </form>
        </div>
      </div>
      <div className="nft-img">
        <img src={frame} alt="" />
      </div>
    </section>
    )
}