import { useState } from "react"
import { Button } from "./Button"
import { Menu } from "./Menu"

const Header = () => {
    
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <header>
            <nav className="w-90 h-8 mx-auto flex items-center justify-between">
                <img src="./src/assets/logo.svg" alt="logo icon" />
                <img src="./src/assets/menu.svg" alt="menu icon" onClick={handleClick} />
                {
                menu &&
                <menu className="w-1/2 h-full min-w-[22rem] max-w-2xl absolute top-0 right-0 border-l bg-white">
                    <ul className="py-3 px-2 flex flex-col gap-y-2">
                        <img className="w-2.5 self-end" src="./src/assets/close-menu.svg" alt="close menu icon" onClick={handleClick} />
                        <Menu />
                        <Button text="Login" plus="mt-3" />
                        <Button text="Register" color="gray"/>
                    </ul>   
                </menu>
                }
            </nav>
        </header>
    )
}

export { Header }