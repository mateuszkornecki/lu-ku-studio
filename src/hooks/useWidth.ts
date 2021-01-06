import { useEffect, useState } from "react"

type WidthType = {
  width: number
  isMobile: boolean
}

function useWidth(): WidthType {
  const [width, setWidth] = useState(window.innerWidth)

  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return function cleanUp() {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { width: width, isMobile: width < 768 }
}

export default useWidth
