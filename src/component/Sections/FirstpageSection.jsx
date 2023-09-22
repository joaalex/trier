import Button from "../../Button"
import img1 from "../../assets/WhatsApp Image 2023-09-13 at 11.50.20 PM.jpeg"

const FirstpageSection = ()=>{
  const FirstpageSectionStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "80%",
    margin:"0px auto",
    gap:"10rem",
    padding:"4rem 0"
  }

  const heading1Style ={
    color:"green",
    fontSize:"5rem"
  }

  const heading5Style ={
    fontSize:"3rem",
  }
  return(
    <>
      <div style={FirstpageSectionStyle}>
        <div>
          <h1 style={heading1Style}>Tasty food</h1>
          <h5 style={heading5Style}>Try the best food of the week.</h5>
          <Button text="View menu" bStyle={{border:"0px solid black", padding:"0.8rem 1.5rem", borderRadius:"10px", textDecoration:"none", color:"#fff", backgroundColor:"green"}}/>
        </div>
        <div>
          <img src={img1} alt="" width={700} />
        </div>
      </div>
    </>
  )
}
export default FirstpageSection