import {useRef} from "react";

const SearchSection = (props) => {
    const locationInput = useRef(null)
    //TODO Add autocomplete functionality!
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setCurrentLocationName(locationInput.current.value)
        props.setLocationChanged(true)
    }

    return (
        <section className={"searchSelection"}>
            <p>Enter a location below to get the weather for that location!</p>
            <p>Your current location is: <strong>{props.currentLocationName}, {props.currentLocationCountry}</strong></p>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"locationSearch"}>Location: </label>
                <div className={"inputContainer"}>
                    <input type={"text"} placeholder={"Enter a location..."} ref={locationInput} name={"locationSearch"} />
                    <button type={"submit"}><i className={"fa fa-search"}></i></button>
                </div>

            </form>
        </section>
    )
}

export default SearchSection