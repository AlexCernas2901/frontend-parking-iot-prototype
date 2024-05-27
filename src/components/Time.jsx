import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function TimeComponent({ className = '' }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const newTime = now.toLocaleTimeString()

      if (time !== newTime) {
        setTime(newTime)
      }

      setTimeout(tick, 1000)
    }

    tick()
  }, [time])

  return <p className={className}>{time}</p>
}

TimeComponent.propTypes = {
  className: PropTypes.string
}

export default TimeComponent
