import { HyperText } from "../utils/cardDefition"
import QuotedText from "./QuotedText"

interface TextProperty {
    text: string | HyperText[],
    x: number,
    y: number,
    fontSize: string,
    fill: string,
}

function Text({ text, x, y, fontSize, fill }: TextProperty) {
    if (typeof text === "string") {
        text = [text]
    }
    return (
        <>
            {text.map((part) => {
                y += Number(fontSize) + 6
                if (typeof part === "string") {
                    return <text x={x} y={y} font-size={fontSize} fill={fill}>{part}</text>
                }
                if (part instanceof Array) {
                    return <QuotedText text={part[0]} x={x} y={y} fontSize={fontSize} fill={fill} />
                }
                return <text x={x} y={y} fill="red" font-size={fontSize}>#UNK#</text>
            })}
        </>
    )
}

export default Text