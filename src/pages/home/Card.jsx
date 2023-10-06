import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Card({ data }) {

    console.log(data)
    const bgImage = {
        backgroundImage: `url('${data.destination_Image}')`,
    }
    
  return (
    <NavLink to={`/booking/${data.id}`}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "focus" : ""
  }>
    <div style={bgImage} className='relative bg-gradient-to-b h-96 from-gray-400 to-slate-600 bg-cover	bg-no-repeat	rounded-3xl'>
        <h1 className='absolute bottom-6 left-5 text-4xl font-medium text-white font-title-font '>{ data.tourist_destination}</h1>
    </div>
  </NavLink>
  )
}

Card.propTypes = {
    data: PropTypes.object
}

export default Card
