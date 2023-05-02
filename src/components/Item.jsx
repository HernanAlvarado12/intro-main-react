
const Item = ({ text, path, isReverse = true }) => {
    return (
        <div className={`flex items-center gap-x-1 ${isReverse ? 'flex-row' : 'flex-row-reverse justify-end'} text-gray hover:text-almost`}>
            {text}
            {path && <img src={path} alt="icon figure" />}
        </div>
    )
}

export { Item }