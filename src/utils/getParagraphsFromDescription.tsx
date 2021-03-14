import React, { ReactElement } from "react"

function getParagraphsFromDescription(description: string): ReactElement[] {
  return description
    .split("\n")
    .map(paragraph => (paragraph ? <p>{paragraph}</p> : <br />))
}

export default getParagraphsFromDescription
