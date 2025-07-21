import MenuLinks from '../menuLinks';
import styles from './Menu.module.css';

export default function Menu() {

    
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLinks to="/">
                    Inicio
                </MenuLinks>
                <MenuLinks to="/sobremim">
                    Sobre Mim
                </MenuLinks>
            </nav>
        </header>
    )
}