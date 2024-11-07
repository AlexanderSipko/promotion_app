// import './style.css'

export function LabelAndInputNumber({ props }) {
    const { inputName, inputValue, cls, funName, placeholder, label } = props;

    const handlerInput = (value) => {
        cls[funName](value)
    }
 
    return <div className="wrapper-input">
                <label htmlFor={inputName}>{label}</label>
                <input
                    type="number"
                    value={inputValue || ''}
                    name={inputName}
                    onChange={(e) => handlerInput(Number(e.target.value))}
                    placeholder={placeholder}
                />
        </div>
}