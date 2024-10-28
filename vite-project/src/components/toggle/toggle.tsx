import "../toggle/toggle.css"

interface ToggleProps{
    text1?:string;
    text2?: string;
}


function Toggle ({text1, text2}: ToggleProps) {

    return (
        <>
        <span className="toggle-container">
              <button type="button" className="buttonFilter">Card</button>
              <input type="checkbox" className="slider" />
              <button type="button" className="buttonFilter">Mapa</button>
        </span>
        </>
    )
}

export default Toggle;