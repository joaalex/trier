
import FirstpageSectionPage from "./componentii/section/FirstpageSectionPage";
import FooterSec from "./componentii/section/FooterSec";
import SecondpageSectionPage from "./componentii/section/SecondpageSectionPage";
import ThirdpageSectionPage from "./componentii/section/ThirdpageSectionPage";


const Appii = ()=>{
  return(
    <>
      <div style={{maxWidth:"80%", margin:"auto"}}>
        <FirstpageSectionPage/>
        <SecondpageSectionPage/>
        <ThirdpageSectionPage/>
        <FooterSec/>
      </div>
    </>
  )
}
export default Appii;