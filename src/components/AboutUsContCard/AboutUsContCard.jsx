import Row from "react-bootstrap/Row"
import Carousel from "react-bootstrap/Carousel"
import img1 from '../images/aboutus-1.jpg'
import img2 from '../images/aboutus-2.jpg'
import img3 from '../images/aboutus-3.jpg'
import "./AboutUsContCard.css";
// هي الصورة مع الكتابة CardAbout هذا القسم استدعية جراف الخاص بالبوتستراب الرو و الكول وضعت فييهن الصور الذي قمت بتعديل حجمها
const AboutUsContCard = () => {
  return (
    <div className={ document.body.dir  ==='rtl' ?'contCard left' :'contCard right' }> 
    <Row>
    <Carousel fade controls={false}  slide={false} >
      <Carousel.Item >
        <img src={img1} alt="000"className="img-aboutUS"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="100"className="img-aboutUS"/>       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="400" className="img-aboutUS"/>
      </Carousel.Item>
    </Carousel>
    </Row>
    </div>
  )
}

export default AboutUsContCard