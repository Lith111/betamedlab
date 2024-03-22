import Row from 'react-bootstrap/esm/Row'
import Title from '../Title/Title'
import './OurAnalytics.css'
import { FaAngleDoubleLeft , FaAngleDoubleRight } from "react-icons/fa";
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import { CardMedical } from '../CardMedical/CardMedical'
import { useState } from 'react'
const OurAnalytics = () => {
  const [btnValue, setbtnValue] = useState(0);
   const buttonHandlerLeft = ()=>{
    if (btnValue > 100) {
    }
    else{
      setbtnValue(btnValue + 10);
    }
  }
 const buttonHandlerRight = ()=>{
    if ( btnValue < -100) {
    }
    else{
      setbtnValue(btnValue - 10);
    }
  }
  return (
    <Container fluid="lg">
    <div className='ourAnlytics'>
    <Title title="services"/>
      <div className="control-server">    
      <button className='control left'onClick={buttonHandlerLeft} ><FaAngleDoubleLeft/></button>    
      <Row className='row-medical' style={{left:`${btnValue}%`}}>
        <Col className="col-midca" ><CardMedical title={"Analysis of chronic disease"} img={"../images/images-1.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"}/></Col>
        <Col className="col-midca"><CardMedical title={"Analysis of glands"} img={"../images/images-2.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"}/></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-3.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-4.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-5.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-7.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
      </Row>
      <button className=' control right' onClick={buttonHandlerRight}><FaAngleDoubleRight/></button>
      </div>

    </div>
    </Container>
 )
}

export default OurAnalytics