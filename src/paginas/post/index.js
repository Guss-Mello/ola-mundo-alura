import './Post.css';
import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'paginas/naoEncontrada';
import PagPadrao from 'componentes/PagPadrao';


export default function Post(){
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }


    return(
        <Routes>
            <Route path='*' element={<PagPadrao/>}>
                <Route index element={

                    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                        <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                        </div>
                    </PostModelo>
                    
                } />
            </Route>   
        </Routes>
    )
}