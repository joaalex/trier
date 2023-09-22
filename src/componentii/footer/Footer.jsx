const Footer = ({h33, li1, li2, li3, li4})=>{
  return(
    <>
      <div >
        <h3 style={{textAlign:"center"}}>{h33}</h3>
        <ul style={{
          listStyle:"none", listStyleType:"none", lineHeight:"2"
        }}>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
        </ul>
      </div>
    </>
  )
}
export default Footer;