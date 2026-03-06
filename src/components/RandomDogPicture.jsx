import { useState, useEffect } from 'react'

function RandomDogPicture() {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      setImageUrl(data.message)
    }

    getData()
  }, [])

  return (
      <>
        <img src={imageUrl} alt=""/>
      </>
  )
}

export default RandomDogPicture