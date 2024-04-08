type ButtonProps = {
    text:string;
}

const Button = ({text}:ButtonProps) => {
    return (
        <div className="button">
            <button>{text}</button>
        </div>
    )
}

export default Button
