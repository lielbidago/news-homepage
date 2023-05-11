import { INewArticle } from "../App";



export function NewArticle({title,desc,id }:INewArticle){
    return (
        <div className="NewArticle" key={id}>
            <a className="title" href=''>{title}</a>
            <p className="desc">{desc}</p>
        </div>
    )
}