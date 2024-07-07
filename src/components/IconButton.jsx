import React from 'react'
import {FaTrash} from 'react-icons/fa'

const IconButton = ({handleClick}) => {
  return (
    <div>
      <button onClick={(e) => {e.stopPropagation()
        handleClick()}
      }><FaTrash/></button>
      
    </div>
  )
}

export default IconButton
