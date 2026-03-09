import { useState, useEffect } from 'react'

function JobBoard() {
  const [ vacanciesArray, setVacanciesArray] = useState([])
  const [ searchInput, setSearchInput] = useState('')
  const [ selectedCity, setSelectedCity ] = useState('Все города')

  const filteredArray = vacanciesArray
      .filter((vacancy) => vacancy.company.name.toLowerCase().includes(searchInput.toLowerCase()))
      .filter((vacancy) => vacancy.address.city === selectedCity || selectedCity === 'Все города' )

  useEffect(() => {
    async function getVacancies() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setVacanciesArray(data)
    }

    getVacancies()
  }, [])

  return (
      <article>
        <label htmlFor="select">Выберите город</label>
        <select
            name=""
            id="select"
            className = "select"
            value = {selectedCity}
            onChange = {(e) => {setSelectedCity(e.target.value)}}
        >
          {vacanciesArray.map((vacancy) =>
              <option key = {vacancy.id}>
                {vacancy.address.city}
              </option>
          )}
          <option>
            {'Все города'}
          </option>
        </select>
          <label htmlFor="search-field">Компания</label>
          <input
              id='search-field'
              type="text"
              className = 'search-input'
              value = {searchInput}
              onChange = {(e) => {setSearchInput(e.target.value)}}
              placeholder={'Введите название компании:'}
          />

        <button onClick={() => {
          setSelectedCity('Все города')
          setSearchInput('')
        }}>
          Сбросить фильтры
        </button>
        {vacanciesArray.length === 0 && <p>'Загрузка'</p>}
        {
          filteredArray.length === 0 ? <p>Ничего не найдено</p>
              :
              filteredArray
                  .map((vacancy) =>
                      <div key={vacancy.id} className = "job-card">
                        <p>Компания: {vacancy.company.name}</p>
                        <p>Контакты: {vacancy.name}</p>
                        <p>Город: {vacancy.address.city}</p>
                        <p>Почта: {vacancy.email}</p>
                      </div>
                  )
        }
      </article>
  )
}

export default JobBoard;