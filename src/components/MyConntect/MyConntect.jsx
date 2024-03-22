import Container from "react-bootstrap/esm/Container";
 import "./MyConntect.css";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFacebook,
} from "react-icons/bs";
import Title from "../Title/Title";
import Row from "react-bootstrap/esm/Row";
import { useTranslation } from "react-i18next";

const MyConnect = () => {
  const {t} = useTranslation(); 
  return (
    <div className="myConnect" style={{marginBottom:"50px"}}>
      <Container>
        <Title title="connect with us" />
        <Row className="justify-content-center">
          <div className="col-md-2 card-myconnect" style={{ width: "18rem" }}>
            <div className="card card-myconnect-sty">
              <span>
                <BsFillTelephoneFill className="card-myconnect-icon" />
              </span>
              <span className="card-nyconect-body">
                <h3>phone</h3>
                <h4>
                  {" "}
                  <a href="tel:011-5110088">011-5110088</a>
                </h4>
                <h4>
                  {" "}
                  <a href="tel:+963943353331">0943353331</a>
                </h4>
              </span>
            </div>
          </div>
          <div className="col-md-2 card-myconnect" style={{ width: "18rem" }}>
            <div className="card card-myconnect-sty">
              <span>
                <BsFillEnvelopeFill className="card-myconnect-icon" />
              </span>
              <span className="card-nyconect-body">
                <h3>email</h3>
                <h4>
                  {" "}
                  <a
                    href="mailto:betamedicall@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    betamedicall@gmail.com
                  </a>
                </h4>
                <h4 style={{ opacity: "0" }}>beta@gmail.com</h4>
              </span>
            </div>
          </div>
          <div className="col-md-2 card-myconnect" style={{ width: "18rem" }}>
            <div className="card card-myconnect-sty">
              <span>
                <BsFacebook className="card-myconnect-icon" />
              </span>
              <span className="card-nyconect-body">
                <h3>faceboook</h3>
                <h4>
                  <a
                    href="https://m.facebook.com/beta.lab.sy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    beta.lab
                  </a>
                </h4>
                <h4 style={{ opacity: "0" }}>55110088</h4>
              </span>
            </div>
          </div>
        </Row>
       
      </Container>
    </div>
  );
};

export default MyConnect;
