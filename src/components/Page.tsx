import { CardDefition } from '../utils/cardDefition'
import Card from './Card'
import './Page.css'
  
interface PageProperty {
  cardList: CardDefition[],
  layout: [number, number],
  layoutSize: [number, number],
}

function Page({ cardList, layout, layoutSize }: PageProperty) {
  const width = layout[0] * layoutSize[0],
        height = layout[1] * layoutSize[1]
  
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        style="width: 90vw; height: auto;"
      >
        { [...cardList.entries()].map(([id, card]) => {
          const ix = id % layout[0],
                iy = (id - ix) / layout[1]
          
          const x = ix * layoutSize[0]
          const y = iy * layoutSize[1]

          return (
            <g transform={`translate(${x},${y})`}>
              <Card card={card} layoutSize={layoutSize} />
            </g>
          )
        }) }
      </svg>
    </>
  )
}

export default Page
