import { useEffect, useState } from "react"

type WidthType = {
  width: number
  isMobile: boolean
}

function useWidth(): WidthType {
  const isBrowser = typeof window !== "undefined"
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)

  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (!isBrowser) {
      return
    }

    window.addEventListener("resize", handleResize)

    return function cleanUp() {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { width: width, isMobile: width < 768 }
}

export default useWidth
