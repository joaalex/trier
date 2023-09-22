import img1 from "../../assets/WhatsApp Image 2023-09-17 at 11.56.25 AM.jpeg"
import img2 from "../../assets/WhatsApp Image 2023-09-17 at 11.56.22 AM.jpeg"
import img3 from "../../assets/WhatsApp Image 2023-09-17 at 11.56.31 AM.jpeg"

const SecondpageSectionPage = ()=>{
  return(
    <>
      <div style={{display:"flex", justifyContent:"space-between", gap:"10rem", alignItems:"center" }}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <h5 style={{fontSize:"1.5rem", color:"green"}}>App</h5>

          <h3 style={{fontSize:"3rem"}}>App is avaliable</h3>

          <p style={{fontSize:"1.5rem", lineHeight:"1.5"}}>Find our applications and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>

          <div style={{display:"flex", gap:"3rem", paddingTop:"2rem" }}>
            <div> 
              <img src={img2} width={200} alt="" />
            </div>
            <div>
              <img src={img3} width={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SecondpageSectionPage