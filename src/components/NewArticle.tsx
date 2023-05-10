import { INewArticle } from "../App";



export function NewArticle({title,desc,id }:INewArticle){
    return (
        <div className="NewArticle" key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}