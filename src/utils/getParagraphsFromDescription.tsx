import React, { ReactElement } from "react"

function getParagraphsFromDescription(description: string): ReactElement[] {
  return description
    .split("\n")
    .map(paragraph =>
      paragraph ? <p key={paragraph.slice(0, 5)}>{paragraph}</p> : <br />
    )
}

export default getParagraphsFromDescription
