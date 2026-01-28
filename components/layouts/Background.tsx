import React from 'react'

const Background = () => {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="glow-effect w-[500px] h-[500px] bg-indigo-600 top-[-10%] right-[-10%] animate-blob"></div>
        <div className="glow-effect w-[400px] h-[400px] bg-purple-600 bottom-[-10%] left-[-10%] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="glow-effect w-[300px] h-[300px] bg-blue-600 top-[40%] left-[20%] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
    </>
  )
}

export default Background
