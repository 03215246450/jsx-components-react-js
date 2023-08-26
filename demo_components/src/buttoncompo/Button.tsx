type btnprops = {
    text: string,
    onClick : () =>void
}

import React from 'react'

export default function Button(props : btnprops) {
  return (
    <div>
       <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
