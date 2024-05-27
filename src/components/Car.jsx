import propType from 'prop-types'
import CarIcon from '../assets/CarIcon.jsx'

function CarSvg({ className = '' }) {
  function handleClick() {
    console.log('Car clicked')    
  }
  return (
    <button className={className} onClick={handleClick}>
      <CarIcon />
    </button>
  )
}

CarSvg.propTypes = {
  className: propType.string
}

export default CarSvg
