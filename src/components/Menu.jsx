const listMenu = ['Features', 'Company', 'Careers', 'About']

const Menu = () => {
    return listMenu.map((item, key) => {
        return (
            <li className="h-3 flex items-center gap-x-1 text-gray text-sm font-bold cursor-pointer first-of-type:mt-2" key={key}>
                {item}
                {key <= 1 && <img className="w-1.5" src="./src/assets/arrow-down.svg" />}
            </li>
        )
    })
}


export { Menu }