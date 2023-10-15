

export const Button = ({bg, textColor, size, type, children, py,px}) => {

    return (
        
        <button type={type} className={`bg-${bg} py-${py} px-${5} text-${textColor} font-semibold flex flex-row items-center justify-center drop-shadow-${size} rounded-${size}`}>
            {children}
        </button>

    )
}
