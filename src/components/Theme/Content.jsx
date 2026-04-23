import React from 'react'
import { useThemeStore } from '../../context/Zustand/useThemeStore'

function Content() {
  const theme = useThemeStore((state) => state.theme);

  const style = {
    background: theme === "light" ? "#fff": "#333",
    color: theme === "light" ? "#000" : "#fff"
  }
  return (
    <div style={style}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem
        impedit assumenda nisi dignissimos praesentium omnis eum earum similique
        molestias quae quos repellendus eius alias, vel cum nam sit iusto.
      </p>
    </div>
  )
}

export default Content
