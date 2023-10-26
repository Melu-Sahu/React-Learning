import { navLinks } from '../constants';


const NavLinks = (props) => {
    return (
        <ul className={props.classes}>
            {
                navLinks.map(item => (
                    <li key={item.label} className={props.liClasses}>
                        <a href={item.href} className='font-monts errat leading-normal text-lg text-slate-gray'>
                            {item.label}
                        </a>
                    </li>
                ))
            }

        </ul>
    )
}

export default NavLinks
