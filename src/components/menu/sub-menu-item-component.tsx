
export default function SubMenuItemComponent(props: {subMenuList: any[]}) {

    const subMenus = props.subMenuList

    return (
        // if list has 1 or more items then show it
        subMenus.length > 0 ? 
        subMenus.map((item) => {
            return <li> 
                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        {item.name}
                    </a>
                </li>
        })
        : <></>
    )
}