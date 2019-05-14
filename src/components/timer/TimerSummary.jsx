import React from 'react'

const TimerSummary = ({timer}) => {
  console.log(timer)
  return (
      <div>
        <span className="card-title ">{timer.id}</span>
      </div>
  )
}

export default TimerSummary
