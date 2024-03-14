interface NavItemProps {
    label: string,
    img: string
}

function NavItem(props: NavItemProps) {
    return (
        <section className='navItem'>
            <img src={props.img} alt={props.label} />
            <p>{props.label}</p>
        </section>
    )
}

export default NavItem;