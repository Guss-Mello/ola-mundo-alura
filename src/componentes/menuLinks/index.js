import styles from './menuLinks.module.css';
import { NavLink } from 'react-router-dom';


export default function MenuLinks({ children, to }){

    return(
        <NavLink 
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `} 
            to={to} end
        >
            {children}
        </NavLink>
    )
}