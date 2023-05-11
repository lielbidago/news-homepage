import image3desktop from '../assets/images/image-web-3-desktop.jpg';
import image3mobile from '../assets/images/image-web-3-mobile.jpg';

export function MainNews(){
    return (
        <div className="MainNews">
            <div className='news-img'><img className='desktop' src={image3desktop}/><img className='mobile'src={image3mobile}/></div>
            <div className="news-title">
                <p className='title'>The Bright Future of Web 3.0?</p>
            </div>
            <div className="news-desc">
                <p>
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?
                </p>
                <button className='readmore'>READ MORE</button>
            </div>
            
        </div>
    )
}