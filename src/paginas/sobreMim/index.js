import styles from './SobreMim.module.css';
import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function SobreMim() {
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>
                Ola, eu sou o Guss!
            </h3>

            <img src={fotoSobreMim} alt='Foto do mano ali sorrindo' className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais    
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais    
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais    
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais    
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais    
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais   
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo mais
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais    
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais    
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo mais
            </p>
            <p className={styles.paragrafo}>
                Paragrafo teste ai dps eu escrevo algo aqui e tudo mais Paragrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo maisParagrafo teste ai dps eu escrevo algo aqui e tudo mais   
            </p>


        </PostModelo>
    )
}
