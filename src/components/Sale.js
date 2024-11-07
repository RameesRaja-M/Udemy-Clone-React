// Sale Image
import one from "../asserts/images/one.jpg"
function Sale(){
    return(
        <div className="sale-image">
        <img src={one} alt="Sale-image"></img>
        <div className="sale-image__offer">
            <h1>Udemy Flash Sale! 24 HOURS to Save </h1>
            <p>Get The Top Courses For Just 499-/RS.Just One Day To Save But A LIFE TIME To Learn </p>

        </div>
    </div>
    )
}
export default Sale