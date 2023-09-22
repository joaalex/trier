import Card from "../../Card";
import img1 from "../../assets/WhatsApp Image 2023-09-17 at 11.56.29 AM.jpeg"
import img2 from "../../assets/WhatsApp Image 2023-09-17 at 11.56.27 AM.jpeg"
import img3 from "../../assets/WhatsApp Image 2023-09-17 at 11.56.26 AM.jpeg"

const FirstpageSectionPage = ()=>{
  return(
    <>
      <div>
        <div style={{textAlign:"center"}}>
          <h5 style={{fontSize:"1.5rem", color:"green"}}>Special </h5>
          <h3 style={{fontSize:"3rem"}}>Menu of the week</h3>
        </div>
        <div>
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <Card img={img1} h31="Barbecue Salad" h32="Delicious Clark" h33="$12.00"/>
            <Card img={img2} h31="Barbecue Salad" h32="Delicious Clark" h33="$12.00"/>
            <Card img={img3} h31="Barbecue Salad" h32="Delicious Clark" h33="$12.00"/>
          </div>
        </div>
      </div>
    </>
  )
}
export default FirstpageSectionPage;