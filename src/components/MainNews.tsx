import image3 from '../assets/images/image-web-3-desktop.jpg';

export function MainNews(){
    return (
        <div className="MainNews">
            <div className='news-img'><img src={image3}/></div>
            
            <div className="news-title">
                <h1>The Bright Future of Web 3.0?</h1>
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