const Header = () => {
    return (
        <header className={"weatherAppHeader"}>
            <h1 className={"weatherAppTitle"}>SlothSan's Weather App</h1>
            <p className={"weatherAppText"}><strong>Please turn on location services.</strong></p>
            <p className={"weatherAppText"}>Below is the current weather for your area.</p>
            <p className={"weatherAppText"}>More features to come!</p>
        </header>
    )
}

export default Header