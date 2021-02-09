/**
 * External dependencies
 */
import React, { useState, useEffect } from 'react'
import { sprintf, __ } from '@wordpress/i18n'

// importing copied style so I can edit it, I'm doing one of the divs wrong and can't add the theme-ui stuff.
import './styles.css'

/**
 * Internal dependencies
 */
import ClickCircle from './ClickCircle'
import metadata from './block.json'

function Game({block}) {
  const { minTime, maxTime, playable } = block.attributes

  // The defaults don't automatically default on the front end, so need to be explicitly set.
  const maybeMin = minTime || metadata.attributes.minTime.default
  const maybeMax = maxTime || metadata.attributes.maxTime.default

  // Check if we need to swap these around.
  const min = maybeMax > maybeMin ? parseInt(maybeMin) : parseInt(maybeMax)
  const max = maybeMax > maybeMin ? parseInt(maybeMax) : parseInt(maybeMin)

  // Allows use in the editor.
  const defaultStatus =
    playable === 'no'
      ? sprintf(
          __('Click to edit. Min time: %d Max time: %d', 'porchy'),
          minTime,
          maxTime
        )
      : sprintf(
          __(
            'Click to start, click again in %d to %d seconds to win.',
            'porchy'
          ),
          min,
          max
        )

  const [gameState, setGameState] = useState('start')
  const [start, setStart] = useState(null)
  const [gameStatus, setGameStatus] = useState(defaultStatus)

  const getResult = () => {
    // When is the window to win?
    const winFrom = min * 1000 + start
    const winTo = max * 1000 + start

    const now = new Date().getTime()
    const timeElapsed = (now - start) / 1000

    if (now <= winTo && now >= winFrom) {
      return {
        status: sprintf(
          __('You won! You clicked after %f seconds.', 'porchy'),
          timeElapsed
        ),
        state: 'won',
      }
    } else {
      return {
        status: sprintf(
          __('You lost! You clicked after %f seconds.', 'porchy'),
          timeElapsed
        ),
        state: 'lost',
      }
    }
  }

  const clicked = () => {
    if (playable === 'no') {
      return
    }
    switch (gameState) {
      case 'start':
        setStart(new Date().getTime())
        setGameStatus(
          __(`Click again in ${min} to ${max} seconds to win`, 'porchy')
        )
        setGameState('running')
        break
      case 'running':
        const result = getResult()
        setGameStatus(result.status)
        setGameState(result.state)
        break
      default:
        setGameStatus(defaultStatus)
        setGameState('start')
    }
  }

  // If the minTime or maxTime are updated while playing the game, start over.
  useEffect(() => {
    setGameStatus(defaultStatus)
    setGameState('start')
  }, [minTime, maxTime,defaultStatus])

  return (
    <div className="porchy clickgame">
      <div className="game" onClick={() => clicked()}>
        <ClickCircle circleState={gameState} />
        <p className="game-status">{gameStatus}</p>
      </div>
    </div>
  )
}

export default Game
