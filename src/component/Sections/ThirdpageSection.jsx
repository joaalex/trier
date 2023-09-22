import Footer from "../../Footer";
import {GiForkKnifeSpoon} from "react-icons/gi"

const ThirdpageSection = ()=>{
 
  
  return(
    <>
      <div style={{textAlign:"center", maxWidth: "80%", margin:"0px auto", padding:"4rem 0"}}>
        <h5 style={{fontSize:"1.5rem", color:"green", }}>Offering </h5>
        <h3 style={{fontSize:"3rem"}}>Our amazing services</h3>

        <div style={{display:"flex", justifyContent:"space-between", gap:"15rem"}}>

          <Footer pStyle={{}}
          icon={<GiForkKnifeSpoon style={{fontSize:"2.5rem", color:"green"}}/>}
          text1="Excellent food"
          text2="We offer our client excellent quality service for many years with the best and delicious food in the city"
          />
          <Footer icon={<GiForkKnifeSpoon style={{fontSize:"2.5rem", color:"green"}}/>}
          text1="Fast food"
          text2="We offer our client excellent quality service for many years with the best and delicious food in the city"
          />
          <Footer icon={<GiForkKnifeSpoon style={{fontSize:"2.5rem", color:"green"}}/>}
          text1="Delivery"
          text2="We offer our client excellent quality service for many years with the best and delicious food in the city"
          />
        </div>
        
      </div>
    </>
  )
}
export default ThirdpageSection;