// Popular

import c1 from "../asserts/images/c1.jpg"
import c2 from "../asserts/images/c3.jpg"
import c3 from "../asserts/images/c3.jpg"
import c4 from "../asserts/images/c4.jpg"

function Popular() {
    return (
        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__desc">Pick the Best Fit</p>
            <div class="popular__container">
                <div className="course-card">
                    <img src={c1} alt="c1"></img>
                    <h3>Python Development Master Class 2024</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c2} alt="c2"></img>
                    <h3>Java Programming Master Class 2024</h3>
                    <p>Ben Lee</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt="c3"></img>
                    <h3>Web Development Master Class 2024</h3>
                    <p>Don Lee</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c4} alt="c4"></img>
                    <h3>UI/UX Design Master Class 2024</h3>
                    <p>Tom Lee</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c1} alt="c1"></img>
                    <h3>Python Development Master Class 2024</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c2} alt="c2"></img>
                    <h3>Java Programming Master Class 2024</h3>
                    <p>Ben Lee</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt="c3"></img>
                    <h3>Web Development Master Class 2024</h3>
                    <p>Don Lee</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c4} alt="c4"></img>
                    <h3>UI/UX Design Master Class 2024</h3>
                    <p>Tom Lee</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

            </div>

        </div>
    )
}
export default Popular