const Nav = ()=>{

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "85%",
    margin: "0px auto"

}
  const liStyle = {
    listStyle : "none",
    display: "flex",
    gap: " 4rem"
  }
  return (
    <>
      <nav style={navStyle}>
        <div>
          <h1 style={{fontSize:"2rem"}}> Tasty</h1>
        </div>
        <ul style={liStyle}>
          <li> <a href="" style={{textDecoration:"none", color:"black"}}>Home</a></li>
          <li> <a href="" style={{textDecoration:"none", color:"black"}}>About</a></li>
          <li> <a href="" style={{textDecoration:"none", color:"black"}}>Service</a></li>
          <li> <a href="" style={{textDecoration:"none", color:"black"}}>Menu</a></li>
          <li> <a href="" style={{textDecoration:"none", color:"black"}}>Contact Us</a></li>
        </ul>
      </nav>
    </>
  )
}
export default Nav;