import { ReactElement, useEffect, useState } from "react"

type SlideshowProps = {
  children: ReactElement[]
  duration: number
}

const Slideshow = (props: SlideshowProps) => {
  const { children, duration } = props
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const DEFAULT_DURATION = 5000

  function nextSlide() {
    setCurrentSlideIndex(prevState => {
      if (prevState < children.length - 1) {
        return prevState + 1
      } else {
        return 0
      }
    })
  }

  function changeSlide() {
    const interval = setInterval(nextSlide, duration || DEFAULT_DURATION)

    return function cleanUp() {
      clearInterval(interval)
    }
  }

  useEffect(changeSlide, [])

  return children[currentSlideIndex]
}

export default Slideshow
