import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus exercitationem labore magnam deleniti architecto odio laboriosam et illum rerum eius, maiores, maxime doloremque eveniet enim, temporibus qui animi? Cupiditate, soluta.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eum, itaque ut quam iure non cum voluptates totam nesciunt optio asperiores dolorem velit, quos laudantium praesentium culpa beatae amet esse.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox