import Button from "../../Button"

const ThirdpageSectionPage = ()=>{
  return(
    <>
      <div style={{paddingBottom:"3rem"}}>
        <div style={{display:"flex", alignItems:"center", gap:"2rem", justifyContent:"space-around"}}>
          <div>
            <h1 style={{fontSize:"2.5rem"}}>Contact us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellendus reiciendis iusto minima non dolor sapiente sequi nam quasi repellat! </p>
          </div>
          <div>
            <Button text="Contact us on" bStyle={{border:"0px solid black", padding:"0.8rem 1.5rem", borderRadius:"10px", textDecoration:"none", color:"#fff", backgroundColor:"green"}}/>
          </div>
        </div>
      </div>
    </>
  )
}
export default ThirdpageSectionPage