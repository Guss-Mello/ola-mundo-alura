import styles from './menuLinks.module.css';
import { Link, useLocation } from 'react-router-dom';


export default function MenuLinks({ children, to }){
    const localizacao = useLocation();

    return(
        <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}>{children}</Link>
    )
}