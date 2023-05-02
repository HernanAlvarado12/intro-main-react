import { useEffect } from "react"
import { ListItem } from "./ListItem"

const listMenu = ['Features', 'Company', 'Careers', 'About']
const subList = [
    [
        { title: 'Todo List', icon: './src/assets/todo.svg' },
        { title: 'Calendar', icon: './src/assets/calendar.svg' },
        { title: 'Reminders', icon: './src/assets/reminders.svg' },
        { title: 'Planning', icon: './src/assets/planning.svg' },
    ],
    [
        { title: 'History', icon: null },   
        { title: 'Out Team', icon: null },   
        { title: 'Blog', icon: null },   
    ]
]


const Menu = () => {
    return listMenu.map((item, key) => (
        <ListItem key={key} text={item} path={key <= 1? "./src/assets/arrow-down.svg" : null} child={key <= 1? subList[key] : [] } />
    ))
}


export { Menu }