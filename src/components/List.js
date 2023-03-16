function List(props) {
    return (
        <select>
            {
                props.cities.map(
                    (city) =>
                        <option key={city.id} value={city.id}>
                            {city.name}
                        </option>
                )
            }
        </select>
    )
}

export default List;