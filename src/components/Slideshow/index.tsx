import { ReactElement, useEffect, useMemo, useState } from "react"
import shuffleArray from "../../utils/shuffleArray"

type SlideshowProps = {
  children: ReactElement[]
  duration: number
}

const Slideshow = (props: SlideshowProps) => {
  const { children, duration } = props
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const childrenIndexes = children.map((element, index) => index)
  const randomizedChildrenIndexes = useMemo(
    () => shuffleArray(childrenIndexes),
    [children.length]
  )
  const indexToDisplay = randomizedChildrenIndexes[currentSlideIndex]

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

  function slideTransition() {
    const interval = setInterval(nextSlide, duration || DEFAULT_DURATION)

    return function cleanUp() {
      clearInterval(interval)
    }
  }

  useEffect(slideTransition, [])

  return children[indexToDisplay]
}

export default Slideshow
