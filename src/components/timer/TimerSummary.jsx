import React from 'react'

const TimerSummary = ({timer}) => {
  return (
      <div>
        <span className="card-title ">{timer.date}</span>
      </div>
  )
}

export default TimerSummary
