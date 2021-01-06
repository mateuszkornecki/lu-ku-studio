import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const InfoPage = props => {
  const profileImage = props.data.allFile.edges[0].node.childImageSharp.fluid

  return (
    <main>
      <article className="text-justify text-xs h-screen overflow-y-scroll pt-8 md:pt-0">
        <Img fluid={profileImage} />
        <section className="md:max-w-65p px-8 md:px-0">
          <p className="pt-8 ">
            Konrad Łukaszek jest absolwentem Wydziału Inżynierii Lądowej
            Politechniki Krakowskiej i Wydziału Architektury i Sztuk Pięknych
            Krakowskiej Akademii, którą ukończył z wyróżnieniem. Z wykształcenia
            architekt i konstruktor zdobywał doświadczenie projektowe w pracowni
            APA Zalewski Bubak oraz na budowie jako członek zespołu Generalnego
            Wykonawcy niemieckiej firmy Bremer. Obecnie pracuje w pracowni Artur
            Jasiński i Wspólnicy. Konrad brał udział w projektach zabudowy
            mieszkaniowej jedno- i wielorodzinnej, biurowej i przemysłowej,
            przechodząc przez wszystkie etapy procesu inwestycyjnego. Zdobyte
            doświadczenie wykorzystuje w trakcie tworzenia projektów, łącząc je
            każdorazowo z dbałością o detal. W swojej pracy skupia się przede
            wszystkim na unikatowej idei i poszukiwaniu nowatorskich rozwiązań,
            towarzyszących od początku do końca procesowi projektowemu. Dążenie
            do osiągnięcia rezultatów spójnych pod względem architektonicznym,
            socjalnym i ideologicznym stawia jako nadrzędny cel swojego
            działania. Konrad Łukaszek jest absolwentem Wydziału Inżynierii
            Lądowej Politechniki Krakowskiej i Wydziału Architektury i Sztuk
            Pięknych Krakowskiej Akademii, którą ukończył z wyróżnieniem. Z
            wykształcenia architekt i konstruktor zdobywał doświadczenie
            projektowe w pracowni APA Zalewski Bubak oraz na budowie jako
            członek zespołu Generalnego Wykonawcy niemieckiej firmy Bremer.
            Obecnie pracuje w pracowni Artur Jasiński i Wspólnicy. Konrad brał
            udział w projektach zabudowy mieszkaniowej jedno- i wielorodzinnej,
            biurowej i przemysłowej, przechodząc przez wszystkie etapy procesu
            inwestycyjnego. Zdobyte doświadczenie wykorzystuje w trakcie
            tworzenia projektów, łącząc je każdorazowo z dbałością o detal. W
            swojej pracy skupia się przede wszystkim na unikatowej idei i
            poszukiwaniu nowatorskich rozwiązań, towarzyszących od początku do
            końca procesowi projektowemu. Dążenie do osiągnięcia rezultatów
            spójnych pod względem architektonicznym, socjalnym i ideologicznym
            stawia jako nadrzędny cel swojego działania.
          </p>
          <p className="mt-4">Kontakt E: lukaszek.konrad@gmail.com </p>
          <p className="">T: +48 603 523 410</p>
        </section>
      </article>
    </main>
  )
}

export default InfoPage

export const pageQuery = graphql`
  query {
    allFile(
      filter: { extension: { regex: "/(jpg)/" }, name: { eq: "profile" } }
    ) {
      edges {
        node {
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
