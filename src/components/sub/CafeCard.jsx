import React from 'react'


const CafeCard = ({ name, color, gradient, children }) => {
  return (
    <div>
      
      <div className={`mb-16 bg-gradient-to-br ${gradient} p-5 rounded-2xl`}>
      <h1 className={`text-center text-7xl font-bold ${color} mb-16`}>{name}</h1>
      <div className='flex justify-evenly items-center gap-8 flex-wrap'>
        {children}
        </div>
      </div>
    </div>
  )
}

export default CafeCard
