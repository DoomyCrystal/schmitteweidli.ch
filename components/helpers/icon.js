import React from 'react'

const Icon = ({name, className}) => (
  <i className={`ri-${name}` + ' ' + className}/>
)

export default Icon
