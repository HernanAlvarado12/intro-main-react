
const Button = ({ text, color, plus = '' }) => {
    const defaultVariants = "text-gray border-transparent"
    const variants = {
        gray: 'text-gray border-gray',
        white: 'text-white bg-black border-transparent'
    }
    return (
        <button className={`w-full h-4 flex items-center justify-center text-sm ${variants[color] ?? defaultVariants} rounded-lg border outline-none ${plus}`}>
            {text}
        </button>
    )
}

export { Button }