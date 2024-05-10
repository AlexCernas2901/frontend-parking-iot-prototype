import './App.css'
import parkingMap from './assets/parkingMapModel.png'
import { useState, useEffect } from 'react'

function useDateTime() {
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const newDate = now.toLocaleDateString()
      const newTime = now.toLocaleTimeString()

      if (date !== newDate) {
        setDate(newDate)
      }

      if (time !== newTime) {
        setTime(newTime)
      }

      setTimeout(tick, 1000)
    }

    tick()
  }, [date, time])

  return { date, time }
}

function App() {
  const { date, time } = useDateTime()

  return (
    <div>
      <div className='noise'></div>
      <header className='header'>
        <h1 className='tittle'>Estacionamiento IOT</h1>
      </header>
      <div className='container'>
        {' '}
        <section className='map-container'>
          <div className='in-flex-data'>
            <div className='in-grid-data'>
              <div className='grid-container'>
                <div className='content'>
                  <p className='top-buttom-text'>ESTACIONAMIENTO IOT</p>
                  <h1 className='tittle-text'>LUGARES DISPONIBLES: 1</h1>
                </div>
                <div className='content-date-time'>
                  <p className='date-time-text'>{date}</p>
                  <p className='date-time-text'>{time}</p>
                </div>
              </div>
              <div className='content-buttom'>
                <p className='top-buttom-text'>
                  LOCALIZACIÓN ACTUAL: Colima, Col. México
                </p>
              </div>
            </div>
          </div>
          <div className='in-flex-map'>
            <div className='img-container'>
              <img src={parkingMap} alt='' className='parking-map-image' />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
