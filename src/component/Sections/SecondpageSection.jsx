import Button from "../../Button"
import img2 from "../../assets/WhatsApp Image 2023-09-13 at 11.50.19 PM.jpeg"

const SecondpageSection = ()=>{

  const SecondpageSection = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "80%",
    margin:"0px auto",
    gap:"10rem",
    padding:"4rem 0"

  }

  const heading5Style = {
    fontSize: "1.4rem",
    color: "green",

  }

  const heading3Style ={
    fontSize:"3.2rem",
  }
  
  const pStyle = {
    fontSize: "1.48rem",
    marginBottom: "5rem"
  }


  return(
    <>
    <div style={SecondpageSection}>
      <div>
        <img src={img2} alt="" width={700} />
      </div>
      <div>
        <h5 style={heading5Style}>About us</h5>
        <h3 style={heading3Style}>We cook the best tasty food</h3>
        <p style={pStyle}>We cook the best food in the entire city, with the excellent customer service, the best meals and at the best price, visit us.</p>
        <Button text="Explore history"
          bStyle={{border:"0px solid black", padding:"0.8rem 1.5rem", borderRadius:"10px", textDecoration:"none", color:"#fff", backgroundColor:"green"}}/>
      </div>
    </div>
    </>
  )
}
export default SecondpageSection