import { INewArticle } from "../App"
import { BottomSectionArticle } from "./BottomSectionArticle"

interface IBottomSection{
    news:INewArticle[]
}


export function BottomSection({news}:IBottomSection){
    return (
        <div className="BottomSection">
            {news.map((n, index) =><BottomSectionArticle news={n} key={index} index={index}/>)}
        </div>
    )
}