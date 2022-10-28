const SearchSection = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <section className={"searchSelection"}>
            <p>Enter a location below to get the weather for that location!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"locationSearch"}>Location: </label>
                <input type={"text"} placeholder={"Enter a location..."} name={"locationSearch"} />
                <button type={"submit"}><i className={"fa fa-search"}></i></button>
            </form>
        </section>
    )
}

export default SearchSection