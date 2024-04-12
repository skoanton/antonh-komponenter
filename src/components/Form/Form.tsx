import Inputfield from "../Inputfield/Inputfield"

type FormProps = {}

const Form = ({}:FormProps) => {
    return (
        <>
            <Inputfield label={["Förnamn","Efternamn","email"]} type={"text"}/>
        </>
    )
}

export default Form
