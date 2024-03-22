import Card from 'react-bootstrap/Card';
export const CardMedical = ({img,txt,title}) => {
  return (
    <div>
        <Card   style={{ width: '18rem' ,}}>
      <Card.Img variant="top" src={img} style={{ width : '100%' , height : '180px' , }} />
      <Card.Body>
        <Card.Title style={{height : "calc(100% - 200px)"}}>{title}</Card.Title>
        <Card.Text>
         {txt}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
