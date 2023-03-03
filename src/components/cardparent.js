import Card from "./card";
import firstImg from "../assets/images/image-retro-pcs.jpg";
import secondImg from "../assets/images/image-top-laptops.jpg";
import thirdImg from "../assets/images/image-gaming-growth.jpg";
import "./cardparentStyles.css";
function CardParent(){

    const cardData = [{img: firstImg,title: "Reviving Retro PCs",description:"What happens when old PCs are given modern upgrades?"},{img:secondImg,title: "Top 10 Laptops of 2022",description:"Our best picks for varioous needs and budgets"},{img:thirdImg,title: "The Growth of Gaming",description:"How the pandemic has sparked fresh opportunities."}]
    return(
        <div className="cardParent">
            <div className="cardser">
                <Card data={cardData}/>
            </div>
        </div>
    )
}
export default CardParent;