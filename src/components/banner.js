import desktopimg from '../assets/images/image-web-3-desktop.jpg';
import "./bannerStyles.css";
import {bannerdata} from './bannerdata';
function Banner(){
    const renderdata = bannerdata.map((data,index)=>{
        return (
        <div key={index}>
        <div className="title">
            <p>{data.title}</p>
        </div>
        <div className="desc">
        <p> {data.description}</p>
        </div>
        </div>)

    })
    return <div className="banner">
        <div className="left">
            <div className="bannerimg">
            <img src={desktopimg} alt=""/>
            </div>
            <div className="bannerContent">
                <div className="content-left">
                    <h5>The Bright Future of Web 3.0?</h5>
                </div>
                <div className="content-right">
                    <p>We dive into the next evolution of the we that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button> READ MORE</button>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="container">
                <div className="header">
                    <h5>New</h5>
                </div>
                <div className="content">
                    {renderdata}
                </div>
            </div>

        </div>
    </div>
}
export default Banner;