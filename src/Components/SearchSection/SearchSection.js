import {useRef} from "react";

const SearchSection = (props) => {
    const locationInput = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setCurrentLocationName(locationInput.current.value)
    }

    return (
        <section className={"searchSelection"}>
            <p>Enter a location below to get the weather for that location!</p>
            <p>Your current location is: {props.currentLocationName}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"locationSearch"}>Location: </label>
                <input type={"text"} placeholder={"Enter a location..."} ref={locationInput} name={"locationSearch"} />
                <button type={"submit"}><i className={"fa fa-search"}></i></button>
            </form>
        </section>
    )
}

export default SearchSection