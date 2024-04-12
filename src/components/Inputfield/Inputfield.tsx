import Button from "../Button/Button";

type InputfieldProps = {
    //General types
    label: string | string [],
    type: string 
    inline?:boolean

    //CheckBox types

}

const Inputfield = ({label,type,inline}:InputfieldProps) => {
    const labels = Array.isArray(label) ? label : [label];
    return (
        <>
        {labels.map((lbl) => {
            const id = lbl.split(" ").join("-").toLowerCase()
           return ( 
            <div className="inputField">
                <label htmlFor={id}>{lbl}</label>
                <input type={type} id={id} />
            </div>)
        } )}

        <Button text="Add"/>
        </>    
    )
}

export default Inputfield
