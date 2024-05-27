import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function DateComponent({ className = '' }) {
  const [date, setDate] = useState(new Date().toLocaleDateString())

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const newDate = now.toLocaleDateString()

      if (date !== newDate) {
        setDate(newDate)
      }

      setTimeout(tick, 1000)
    }

    tick()
  }, [date])

  return <p className={className}>{date}</p>
}

DateComponent.propTypes = {
  className: PropTypes.string
}

export default DateComponent
