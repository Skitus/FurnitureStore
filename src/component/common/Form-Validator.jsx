import "../Cage/Cage.css";

export const Input = ({input, meta, ...props}) => {
    return (
        <div >
            <div><input type="text" className={`${meta.touched && meta.error && "error"}`} {...input} {...props}/>
                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
            </div>
        </div>
    );
}