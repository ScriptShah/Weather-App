import React from 'react'

const StaticsCard = ({name,sign,data,unit}) => {
  return (
    <div className="statics__card">
        <div className="statics__icon">
            <span className="statics__name">{name}</span>
            <span className="statics__sign">{sign}</span>
        </div>
        <div className="statics__data">{data} {unit}</div>
    </div>
  )
}

export default StaticsCard