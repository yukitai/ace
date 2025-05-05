import { CardDefition } from '../utils/cardDefition'
import './Card.css'
import Quote from './Qoute'
import Text from './Text'

interface CardProperty {
  card: CardDefition,
  layoutSize: [number, number],
}

function Card({ card, layoutSize }: CardProperty) {
  return (
    <>
      <rect
        x="1"
        y="1"
        width={layoutSize[0] - 2}
        height={layoutSize[1] - 2}
        stroke="#efefef"
        stroke-width="2"
        fill="transparent"
      />
      <text
        x="30"
        y="120"
        font-size="40"
        letter-spacing="4"
        fill={card.color}
      >
        {card.title}
      </text>
      <g transform="translate(30, 150) scale(0.03)" fill={card.color}>
        <Quote />
      </g>
      <Text text={card.poem} x={70} y={144} fontSize="24" fill={card.color} />
    </>
  )
}

export default Card
