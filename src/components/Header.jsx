import { useState } from "react"
import { Button } from "./Button"
import { Menu } from "./Menu"

const Header = () => {
    
    const handleClick = () => {      
        document.querySelector('header > nav > menu').classList.toggle('hidden')
    }

    return (
        <header>
            <nav className="w-90 h-8 mx-auto flex items-center justify-between md:w-85 sm:h-10">
                <img src="./src/assets/logo.svg" alt="logo icon" />
                <img className="cursor-pointer md:hidden" src="./src/assets/menu.svg" alt="menu icon" onClick={handleClick} />
                <menu className="w-1/2 h-full min-w-[22rem] max-w-2xl hidden absolute top-0 right-0 border-l bg-white md:w-full md:max-w-full md:flex md:justify-end md:relative md:border-0 md:bg-transparent">
                    <ul className="p-3 flex flex-col gap-y-2 sm:p-4 sm:gap-y-2.5 md:w-full md:ml-3 md:p-0 md:items-center md:flex-row md:justify-between md:gap-x-3 lg:gap-x-5">
                        <img className="w-2.5 self-end cursor-pointer md:hidden" src="./src/assets/close-menu.svg" alt="close menu icon" onClick={handleClick} />
                        <Menu />
                        <Button text="Login" plus="mt-3 md:m-0 md:w-[12rem] md:ml-auto" />
                        <Button text="Register" color="gray" plus="md:w-[12rem]" /> 
                    </ul>   
                </menu>
            </nav>
        </header>
    )
}

export { Header }