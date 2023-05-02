import { useEffect, useState } from "react"
import { Item } from "./Item"

const ListItem = ({ text, path, child }) => {

    const [active, setActive] = useState(false)
    const handleClick = (event) => setActive(!active)

    return (
        <li className="flex items-start flex-col text-sm font-bold relative cursor-pointer select-none group" onClick={handleClick}>
            <Item text={text} path={path} />
            {child.length !== 0 &&
            <ul className={`w-full py-2 px-3 ${!active? 'hidden' : 'flex' } flex-col gap-y-1.5 md:w-[16rem] md:absolute md:top-4 md:right-0 md:group-odd:translate-x-6 md:rounded-lg md:shadow-2xl md:bg-white`}>
                { child.map((value, key) => <Item key={key} text={value.title} path={value.icon} isReverse={false}  /> ) }
            </ul>}
        </li>
    )
}

export { ListItem }