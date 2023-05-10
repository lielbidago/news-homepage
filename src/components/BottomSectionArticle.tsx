import { INewArticle } from "../App"

interface IBottomSectionArticle{
    index:number,
    news:INewArticle
}


export function BottomSectionArticle({index,  news}:IBottomSectionArticle){
    return (
        <div className="BottomSectionArticle" key={index}>
            <h2>{(index+1).toString().padStart(2, '0')}</h2>
            <h3>{news.title}</h3>
            <p>{news.desc}</p>
            <img src={news.pic}></img>
        </div>
    )
}