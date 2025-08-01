import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import BotaoPrincipal from 'componentes/botaoPrincipal';

export default function PostCard({ post }){
    return(
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt={`Imagem de capa do post ${post.id}`}/>

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}