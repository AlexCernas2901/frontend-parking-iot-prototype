import propType from 'prop-types'

function CircleIcon({ className = '' }) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx='12' cy='12' r='11.5' stroke='white' />
    </svg>
  )
}

CircleIcon.propTypes = {
  className: propType.string
}

export default CircleIcon
