
const Button = ({ text, color, plus = '' }) => {
    const defaultVariants = "text-gray border-transparent md:hover:text-almost"
    const variants = {
        gray: 'text-gray border-gray md:hover:text-almost md:hover:border-almost',
        white: 'text-white bg-black border-transparent md:hover:text-almost md:hover:border-almost md:hover:bg-transparent'
    }
    return (
        <button className={`w-full h-4 flex items-center justify-center text-sm ${variants[color] ?? defaultVariants} rounded-lg border outline-none ${plus}`}>
            {text}
        </button>
    )
}

export { Button }