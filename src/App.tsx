
import './App.scss'
import { BottomSection } from './components/BottomSection';
import { Header } from './components/Header';
import { MainNews } from './components/MainNews';
import { NewSection } from './components/NewSection';
import retropc from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';

export interface INewArticle{
  title:string,
  desc:string,
  id:number,
  pic?:string
}

function App() {

  const newNewsList = [
    {title:'Hydrogen VS Electric Cars',
    desc:'Will hydrogen-fueled cars ever catch up to EVs?', id:Date.now()},
    {title:'The Downsides of AI Artistry', 
    desc:'What are the possible adverse effects of on-demand AI image generation?',
    id:Date.now()+1},
    {title:'Is VC Funding Drying Up?', desc:'Private funding by VC firms is down 50% YOY. We take a look at what that means.', 
    id: Date.now()+2}
]
  const bottomNewsList = [
    {title:'Reviving Retro PCs',
    desc:'What happens when old PCs are given modern upgrades?', 
    id:Date.now()+3, pic:retropc},
    {title:'Top 10 Laptops of 2022', 
    desc:'Our best picks for various needs and budgets.',
    id:Date.now()+4, pic:laptop},
    {title:'The Growth of Gaming', 
    desc:'How the pandemic has sparked fresh opportunities.', 
    id: Date.now()+5, pic:gaming}];

  return (
    <>
    <div className='main'>
    <Header/>
    <MainNews/>
    <NewSection newNewsList={newNewsList}/>
    <BottomSection news={bottomNewsList}/>



</div>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.linkedin.com/in/liel-bidago/">Liel bidago</a>.
    </div>
    </>
  )
}

export default App
