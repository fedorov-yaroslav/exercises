function Filters() {
  return (
      <>
        <label htmlFor="search-field">Компания</label>
        <input
            id='search-field'
            type="text"
            className = 'search-input'
            value = {searchInput}
            onChange = {(e) => {setSearchInput(e.target.value)}}
            placeholder={'Введите название компании:'}
        />
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
        <button onClick={() => {
          setSelectedCity('Все города')
          setSearchInput('')
        }}>
          Сбросить фильтры
        </button>
      </>
  )
}

export default Filters;