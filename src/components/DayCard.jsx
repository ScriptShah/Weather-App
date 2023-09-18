import React from 'react'

const DayCard = ({name,sign,data,unit}) => {
  return (
    <div className="day__card">
        <div className="day__card__icon">
            <span className="day__card__name">{name}</span>
            <span className="day__card__sign">{sign}</span>
        </div>
        <div className="day__card__data">{data} {unit}</div>
    </div>
  )
}

export default DayCard