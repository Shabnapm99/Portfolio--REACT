import React from 'react'

function ImageSection() {
  return (
    <div className='lg:w-1/2 relative group'>
      
      {/* Gradient Glow */}
      <div className="absolute -inset-1 bg-linear-to-r from-prim-violet to-seco-cyan rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
      
      {/* Image */}
      <img
        alt="Profile image"
        className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
        src="/images/profile-pic.jpg"
      />

    </div>
  )
}

export default ImageSection