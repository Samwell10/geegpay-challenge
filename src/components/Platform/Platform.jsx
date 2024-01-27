import './Platform.css';
const Platform = ({platforms, width, amount, percent, color}) => {
    return ( 
        <div className="platform">
            <p className="platform-header">
                {platforms}
            </p>
            <div className="progressBar">
                <div className="progressbar-fill" style={{width: width, backgroundColor:color}}>

                </div>
            </div>
            <div className="platform-bottom">
                <p className="platform-amount">{amount}</p>
                <p className="platform-percent">{percent}</p>
            </div>
        </div>
    );
}
 
export default Platform;