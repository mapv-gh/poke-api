import '../sass/Card.scss'

const Card = ({name, img}) => {
  return (
    <div className='card'>
        <div className='card_name'>
          <p>{name}</p>  
        </div>
        <div className='card_circle'></div>
        <img className='card_img' alt='pokemon' src={img} />
    </div>
  )
}

export default Card
