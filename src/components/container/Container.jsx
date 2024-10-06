import React from 'react'

function Container({children,className}) {
  return <div className={`w-full h-full max-w-7xl mx-auto px-4 ${className}`}>{children}</div>;
  
}

export default Container