import Card from "react-bootstrap/Card";
import user from "../images/adminImg.jpg"
import Button from "react-bootstrap/Button"
import "./PostCont.css"
import { useState } from "react";
const Post = ({posTBody,PostImg}) => {
  const [height, setheight] = useState("");
  const [dis, setdis] = useState(false);
  const moreHandeler = ()=>{
      setheight('100%');
      setdis(true);
  }
  const lessHandeler = ()=>{
    setheight('200px');
    setdis(false);

}
  return (
    <Card className="card-post">
      <div className="userName">
        <img src={user} alt="" />
        <div className="userNameTitle">
        <h3>beta web</h3>
        <span>D.Bahjat Naoura</span>
        </div>
      </div>
      <div className="bodyPost">
        <p style={{height:height}}>
          {
            posTBody
          }
        </p>
        <Button className="m-2" style={{display:`${dis?"none":"inline"}`}} onClick={moreHandeler} >more </Button>
        <Button className="m-2" onClick={lessHandeler}  style={{display:`${!dis?"none":"inline"}`}} >less</Button>
        <div style={{maxWidth:"100% ",}}> 
          <img src={PostImg} alt="" style={{maxWidth:"100%",display:'inline'}} />
        </div>
      </div>
    </Card>
  );
};

export default Post;
