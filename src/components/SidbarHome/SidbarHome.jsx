import "./SidbarHome.css"
import Card from "react-bootstrap/Card"
import img from "../images/mid.png"
// هنا قمت بجعل الصور في بداية والكلام في المنتصف التعريف عن الموقع 
// سوف استدعيه داخب ملف الهوم 
import {useTranslation} from "react-i18next"
const SidbarHome = () => {
  const {t} = useTranslation(); 
  return (
    <div className='home-hero-header'>
    <div className="home-hero-header-layout">
      <Card className="card-welcome" style={{backgroundColor:"#000", opacity:"0.5"}}>
        <h1 className='home-title'>{t("welcome")}</h1>
        <h2 className='home-title-two'> {t("welcome2")}</h2>
        <p className="p-welcome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident temporibus obcaecati quis quisquam, autem saepe officia accusantium dignissimos soluta porro distinctio voluptates aspernatur quasi. Sit molestiae unde quaerat magnam.</p>
        </Card>
        <div className="img-sidbar">
          <img src={img} alt="test" />
        </div>

      </div>
    </div>
  )
}

export default SidbarHome