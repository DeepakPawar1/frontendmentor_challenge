
import './navbarStyles.css';
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-menu.svg';
import closeham from '../assets/images/icon-menu-close.svg';
import {useState} from 'react'; 

function Navbar(){
    const [clicked,setClicked] = useState(false);
    const handleClick= () =>{

        setClicked((current)=>{
           return !current 
        })
    }
    return(

        <div className="navbar">
            <div className="logo">
            <img src={logo} alt=""/>
            </div>
            <div className="navbar-container">
                <ul className={clicked?"active":""}>
                    <li> Home</li>
                    <li> New</li>
                    <li> Popular</li>
                    <li> Trending</li>
                    <li> Categories</li>

                </ul>
            </div>
            <div className="hamburger" onClick={handleClick}>
            {clicked ? <img src={closeham} alt=""/> :<img src={hamburger} alt=""/>}
            </div>
        </div>
    )
}
export default Navbar;