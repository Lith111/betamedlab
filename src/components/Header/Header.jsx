import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/esm/Button';
import {useTranslation} from "react-i18next"
import cookie from "js-cookie";
import i18next from "i18next";
import { useEffect} from "react";
import {Link} from "react-router-dom"
import "./Header.css"
function Header() {
  // اوبجيت الذي يحتوي على اللغتين الذي يدعمهم البرنامج
    const languages = [
        {
          code: "en",
          name: "English",
          country_code: "gb",
        },
        {
          code: "ar",
          name: "العربية",
          dir: "rtl",
          country_code: "sa",
        },
      ];
     // t=> للوصول الى بديل الكلمة في كل لغة 
    const { t } = useTranslation();
    // قلب الصفحة في اللغة العربية 
    const currentLanguageCode = cookie.get("i18next") || "en";
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    useEffect(() => {
      document.body.dir = currentLanguage.dir || "ltr";
    }, [currentLanguage, t]);
   
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* عنوان الموقع */}
        <Navbar.Brand >{t("bate-title")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{justifyContent:"space-between" , margin:"0 2%" }}>
          <Nav
          className='nav-style '
              navbarScroll
            
          >
            {/* روابط الموقع  */}
            <Link className='nav-link' to={"/"} >{t("home")}</Link>
            <Link className={"nav-link"} to={"/post"} >{t("POSTS")}</Link>
            <NavDropdown title={t("language")}>
              {/* تبديل بين اللغات  */}
            {languages.map(({ code, name, country_code }) => (
                <NavDropdown.Item
                  key={country_code}
                  onClick={() => {
                    i18next.changeLanguage(code);
                   window.location.reload();
                  }}
                  disabled={code === currentLanguageCode}
                >
                  {name}{" "}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Form className="d-flex " style={{gap:"5px"}} >
            
            <Button variant="outline-success">login</Button>
            <Button variant="outline-success">sigin</Button>
      
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;