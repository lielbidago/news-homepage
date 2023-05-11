import { INewArticle } from "../App"

interface IBottomSectionArticle{
    index:number,
    news:INewArticle
}


export function BottomSectionArticle({index,  news}:IBottomSectionArticle){
    return (
        <div className="BottomSectionArticle" key={index}>
            <p className="number">{(index+1).toString().padStart(2, '0')}</p>
            <a className="title" href=''>{news.title}</a>
            <p className="desc">{news.desc}</p>
            <div className="img"><img src={news.pic}></img></div>
            
        </div>
    )
}