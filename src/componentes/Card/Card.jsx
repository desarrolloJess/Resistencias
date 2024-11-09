import PropTypes from 'prop-types';
import './Card.css';


const Card = ({colorCard, valorResistencia}) => {
  return (
    <div 
        className="card"
        style={{backgroundColor: `${colorCard}`}}
    >
      <p className='descCard'> Valor: {valorResistencia} </p>
        
    </div>
  )
}

//Definiendo los proptypes del Card
Card.propTypes = {
    colorCard : PropTypes.string,
    valorResistencia : PropTypes.string
}

export default Card