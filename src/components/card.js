import './cardStyles.css';

function Card ({data}){
    
    const renderData = data.map((sdata,index)=>{
        return (<div className="card">
            <div className="image">
                <img src={sdata.img} alt=""/>
            </div>
            <div className="content">
                <div className="id">
                    <h6>{index}</h6>
                </div>
                <div className="title">
                    <h5>{sdata.title}</h5>
                </div>
                <div className="description">
                <p>{sdata.description}</p>
                </div>
            </div>
        </div>)

    })
    return (
renderData

    )
}
export default Card;