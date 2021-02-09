import React from 'react'
import { __ } from '@wordpress/i18n'

function ClickCircle(props) {
  const { circleState } = props
  let circleText,
    circleClass = ''

  switch (circleState) {
    case 'running':
      circleText = __('Running', 'porchy')
      circleClass = 'running'
      break
    case 'lost':
      circleText = __('Lost', 'porchy')
      circleClass = 'lost'
      break
    case 'won':
      circleText = __('Won', 'porchy')
      circleClass = 'won'
      break
    case 'timedout':
      circleText = __('Timed out', 'porchy')
      circleClass = 'timedout'
      break
    default:
      // Start :)
      circleText = __('Start', 'porchy')
      circleClass = 'start'
      break
  }
  return <div className={`click-circle ${circleClass}`}>{circleText}</div>
}

export default ClickCircle
