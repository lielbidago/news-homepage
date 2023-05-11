import { Navbar } from "./Navbar";

interface INavBarOffCanvas{
    setShowNavBarOffCanvas(val:boolean):void
}

export function NavBarOffCanvas({setShowNavBarOffCanvas}:INavBarOffCanvas){
    return (
        <div className="NavBarOffCanvas-background">
            <div className="NavBarOffCanvas">
                <span onClick={()=>{setShowNavBarOffCanvas(false)}} className="close">&times;</span>
                <Navbar />
            </div>
        </div>

    )
}