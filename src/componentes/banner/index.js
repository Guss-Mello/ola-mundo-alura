import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'
import { React } from 'react';

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Ola bem seja muito bem vindo ao meu projeto Ola Mundo! Aqui estou aprendendo a utilizar melhor o React JS, espero que gostem!<br />
                    ps: esse caba ai na foto nao sou eu, ele eh o professor do curso
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="circuloColorido" />
                <img className={styles.minhaFoto} src={minhaFoto} aria-hidden={true} alt="minhaFoto" />
            </div>
        </div>
    )
}