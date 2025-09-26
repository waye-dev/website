interface QuoteContentProps {
  text: string
  isActive: boolean
}

export function QuoteContent({ text, isActive }: QuoteContentProps) {
  return (
    <p
      className="text-xs font-inter italic"
      style={{ 
        fontFamily: "Inter, sans-serif",
        fontSize: "12.58px",
        lineHeight: "115%",
      }}
    >
      {text}
    </p>
  )
}