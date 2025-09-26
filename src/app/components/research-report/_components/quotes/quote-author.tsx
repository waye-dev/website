import { AuthorType } from "./quote-card"
import { getAuthorAvatar, getAuthorRole, getAuthorName } from "./utils"

interface QuoteAuthorProps {
  author: {
    type?: AuthorType
    respondentNumber?: number
  }
}

export function QuoteAuthor({ author }: QuoteAuthorProps) {
  const avatar = getAuthorAvatar(author.type)
  const role = getAuthorRole(author.type)
  const name = getAuthorName(author.respondentNumber)

  return (
    <div className="flex items-start space-x-1.5">
      <img 
        src={avatar} 
        alt={`${role} avatar`}
        className="w-[30px] h-[30px] rounded-full flex-shrink-0 bg-white p-0.5"
      />
      <div>
        <h3 className="font-semibold text-xs">{name}</h3>
        <p className="text-xs opacity-70">{role}</p>
      </div>
    </div>
  )
}
