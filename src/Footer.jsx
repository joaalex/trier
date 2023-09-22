
const Footer = ({icon,text1, text2})=>{
  return(
    <>
      <div >
        {icon}
        <h5 style={{fontSize:"1.5rem"}}>{text1}</h5>
        <p style={{lineHeight:"1.5"}}>{text2}</p>
        
      </div>
    </>
  )
}
export default Footer;