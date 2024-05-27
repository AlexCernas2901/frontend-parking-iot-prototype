import './App.css'
import Header from './components/Header.jsx'
import parkingMap from './assets/parking-map.png'
import CarDisabilitiesIcon from './assets/CarDisabilitiesIcon.jsx'
import CarIcon from './assets/CarIcon.jsx'
import CircleIcon from './assets/CircleIcon.jsx'
import { useState } from 'react'

function App() {
  const [selectedCarPlace, setSelectedCarPlace] = useState(false)

  const buttonClasses = ['column-2', 'column-4', 'column-6', 'column-8']

  const carPlaces = [
    { id: 1, state: true, type: 'general' },
    { id: 2, state: true, type: 'general' },
    { id: 3, state: false, type: 'general' },
    { id: 4, state: true, type: 'disabilities' }
  ]

  const handleCarState = (id) => {
    setSelectedCarPlace(carPlaces[id])
  }

  const generalPlaces = carPlaces.filter(
    (place) => place.type === 'general' && place.state
  ).length

  const disabilitiesPlaces = carPlaces.filter(
    (place) => place.type === 'disabilities' && place.state
  ).length

  return (
    <div className='container'>
      <Header />
      <main>
        <section>
          <dir className='data-container'>
            <div className='in-data-container available-places-container '>
              <div className='available-places'>
                <h1>lugares generales: {generalPlaces}</h1>
              </div>
              <div className='available-places'>
                <h1>lugares de discapacitados: {disabilitiesPlaces}</h1>
              </div>
            </div>
            <div className='in-data-container indications'>
              <ul>
                <li>
                  <CircleIcon className={'info-icon busy-place'} />
                  <p>lugar ocupado</p>
                </li>
                <li>
                  <CircleIcon className={'info-icon general-place'} />
                  <p className='free-place'>libre</p> <p> - lugar general</p>
                </li>
                <li>
                  <CircleIcon className={'info-icon disabilities-place'} />
                  <p className='free-place'>libre</p>
                  <p> - lugar para discapacitados</p>
                </li>
              </ul>
            </div>
          </dir>
        </section>
        <section>
          <div className='map-container'>
            <div className='car-info'>
              {carPlaces.map((carPlace) => (
                <div
                  key={carPlace.id}
                  className={`in-car-info ${buttonClasses[carPlace.id - 1]}`}
                >
                  {selectedCarPlace && selectedCarPlace.id === carPlace.id && (
                    <p>{selectedCarPlace.state ? 'Libre' : 'Ocupado'}</p>
                  )}
                </div>
              ))}
            </div>
            <img
              src={parkingMap}
              alt='parking map image'
              className='parking-map-image'
            />
            <div className='icons-box'>
              {carPlaces.map((carPlace) => (
                <div
                  key={carPlace.id}
                  className={buttonClasses[carPlace.id - 1]}
                >
                  <button
                    // onClick={() => handleCarState(carPlace.id - 1)}
                    onMouseEnter={() => handleCarState(carPlace.id - 1)}
                  >
                    {carPlace.type === 'general' ? (
                      <CarIcon
                        className={`car-icon ${
                          carPlace.state ? 'general-place' : 'busy-place'
                        }`}
                      />
                    ) : (
                      <CarDisabilitiesIcon
                        className={`car-icon ${
                          carPlace.state ? 'disabilities-place' : 'busy-place'
                        }`}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
