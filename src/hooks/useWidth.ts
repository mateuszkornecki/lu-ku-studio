import { useEffect, useState } from "react"

type WidthType = {
  width: number
  isMobile: boolean
}

function useWidth(): WidthType {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(
    () => window.addEventListener("resize", () => setWidth(window.innerWidth)),
    []
  )

  return { width: width, isMobile: width < 768 }
}

export default useWidth
