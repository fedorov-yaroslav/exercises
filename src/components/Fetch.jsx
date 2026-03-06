import { useState, useEffect } from 'react'

function Fetch() {
  const [data, setData] = useState('')

  useEffect(() => {
    let isMounted = true

    async function fetchData() {
      const res = await fetch('https://catfact.ninja/fact')
      const result = await res.json()

      if (isMounted){
        setData(result.fact)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }


  }, [])

  return (
      <>
        {data}
      </>
  )
}

export default Fetch