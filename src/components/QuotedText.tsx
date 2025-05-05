import './QuotedText.css'

interface QuotedTextProperty {
    text: string,
    x: number,
    y: number,
    fontSize: string,
    fill: string,
}

function QuotedText({ text, x, y, fontSize, fill }: QuotedTextProperty) {
  return (
    <>
        <text font-weight="bold" font-style="italic" x={x} y={y} font-size={fontSize} fill={fill}>{text}</text>
    </>
  )
}

export default QuotedText
