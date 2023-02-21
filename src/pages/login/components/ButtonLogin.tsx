
interface ButtonLoginProps {
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
    msg: string;
}

export const ButtonLogin: React.FC<ButtonLoginProps>= ({type, msg, onClick}) =>{
    return(
        <button
        type={type}
        onClick={onClick}>{msg}
        </button>
    )
}