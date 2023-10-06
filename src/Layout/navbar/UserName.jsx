
import PropTypes from 'prop-types'

function UserName({ userName }) {
  return (
      <div className='rounded-full bg-warning text-white text-2xl font-bold w-10 h-10 text-center pt-1'>
          {userName[0]}
    </div>
  )
}

UserName.propTypes = {
    userName: PropTypes.string.isRequired
}

export default UserName
