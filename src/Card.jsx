import {AiOutlineShoppingCart} from "react-icons/ai"
const Card = ({img,h31,h32,h33})=>{
  return(
    <>
      <div style={{border: "1px solid #c9c2c2", padding:"2rem 3rem", borderRadius:"10px", boxShadow:"1px 1px 10px #c9c2c2", position:"relative", marginBottom:"7rem" }}>

        <img src={img} alt="" />
        <h3>{h31}</h3>
        <p>{h32}</p>
        <h3>{h33}</h3>

        <div style={{border: " 1px solid green", width:"3rem", height:"3rem", backgroundColor:"green", bottom:"0px", right:"0px", position:"absolute", borderBottomRightRadius:"10px", borderTopLeftRadius:"10px"}}>
          <AiOutlineShoppingCart style={{ fontSize:"1.5rem", color:"#fff", position:"absolute", top:"10", left:"10" }}/>
          </div>
      </div>
    </>
  )
}
export default Card;

