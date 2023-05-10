
import { INewArticle } from '../App';
import { NewArticle} from './NewArticle';

interface NewSectionProps{
    newNewsList: INewArticle[]
}

export function NewSection({newNewsList}:NewSectionProps){
    return (
        <div className="NewSection">
            <div className="new-title">
                <h1>New</h1>
            </div>
            {newNewsList.map((nn:INewArticle) => 
                <NewArticle title={nn.title} desc={nn.desc} id={nn.id} key={nn.id} />)}
        </div>
    )
}