 import './CardAbout.css';
const CardAbout = ({title, img}) => {
  return (
    <div className='CardAbout'>
        <img src={img} alt="" />
        <div className='CardAboutTxt '  id={title}>
          <span>
          {title}
          </span>
        </div>
    </div>
  )
}

export default CardAbout