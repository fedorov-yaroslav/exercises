import { useState } from 'react'

function RandomQuoteGenerator() {
  const [quote, setQuote ] = useState('')
  const [author, setAuthor ] = useState('')
  const [copied, setCopied ] = useState(false)

  const quotes = [
    {
      text: "Stay hungry, stay foolish",
      author: "Steve Jobs"
    },
    {
      text: "Talk is cheap. Show me the code.",
      author: "Linus Torvalds"
    },
    {
      text: "Programs must be written for people to read.",
      author: "Harold Abelson"
    },
    {
      text: "First, solve the problem. Then write the code.",
      author: "John Johnson"
    }
  ]

  function generateQuote() {
    const quoteNumber = Math.floor(Math.random()*quotes.length)
    setQuote(quotes[quoteNumber].text)
    setAuthor(quotes[quoteNumber].author)
  }

  function copyQuote() {
    navigator.clipboard.writeText(`${quote} - ${author}`)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
      <>
        <button onClick = {generateQuote}>Сгенерировать цитату</button>
        <h2>{quote} </h2>
        <h3>{author}</h3>
        <button
            onClick={copyQuote}>
          Скопировать
        </button>
        {copied && <p>Скопировано</p>}

      </>
  )
}

export default RandomQuoteGenerator