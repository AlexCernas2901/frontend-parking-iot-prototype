import parkingMap from '../assets/parking-map.png'
import '../styles/map.css'
import CarSvg from './Car.jsx'

function Map() {
  return (
    <div className='in-flex-map'>
      <div className='img-container'>
        <div className='icons-box'>
          <CarSvg className='svg-container' />
          <CarSvg className='svg-container' />
          <CarSvg className='svg-container' />
          <CarSvg className='svg-container' />
        </div>
        <img
          src={parkingMap}
          alt='parking map image'
          className='parking-map-image'
        />
      </div>
    </div>
  )
}

export default Map
