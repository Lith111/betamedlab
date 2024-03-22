import Container from "react-bootstrap/esm/Container";
import Title from "../Title/Title";
import AboutUsContCard from "../AboutUsContCard/AboutUsContCard";
import "./AboutUS.css";
import { useTranslation } from "react-i18next";
import { FiActivity } from "react-icons/fi";
// هذا القسم مسؤول عن جميع أجزاء الابوت اس
// Title اولا عنوان من قسم خاص فيه
// txt-aboutUs ثانيا باركراف قمت بكتابته يدويا لاحقا ثم استخدم ملف الترجمة
// AboutUsContCard ثالثا قسم اب لجميع الصور التوضيحية
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="aboutUs">
      <Container>
        <Title title="about us" />
        <div  className="d-flex flex-aboutUs">
          <div > 
            <div className="txt-aboutUs p-2">
             <span style={{display:"block", fontSize:"40px"}} ><FiActivity /></span>
              {t("aboutUs")}
            </div>
          </div>
          <div className="p-2">
            <AboutUsContCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
