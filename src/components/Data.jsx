import DateComponent from './Date.jsx'
import TimeComponent from './Time.jsx'

import '../styles/data.css'

function Data() {
  return (
    <div className='data-box'>
      <div>
        <div className='top-data-box'>
          <div className='in-top-data-box'>
            <p className='top-buttom-text'>ESTACIONAMIENTO IOT</p>
          </div>
          <div className='tittle-box'>
            <h1 className='tittle-text'>LUGARES DISPONIBLES: 1</h1>
            <div className='date-time-box'>
              <DateComponent className='date-time-text' />
              <TimeComponent className='date-time-text' />
            </div>
          </div>
        </div>
        <div className='content-buttom'>
          <p className='top-buttom-text'>
            LOCALIZACIÓN ACTUAL: COLIMA, COL. MEXICO
          </p>{' '}
        </div>
      </div>
    </div>
  )
}

export default Data
