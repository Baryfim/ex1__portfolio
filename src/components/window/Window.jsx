// Styles
import classes from "./Window.module.css"
// Images
import X from "../../images/x.svg"

const Windows = (props) => {
    return (
        <div className={classes.WindowBlock}>
            <div className={classes.WindowContiner}>
                <div className={classes.HeaderWindow}>
                    <button onClick={() => {
                        props.callback("")
                    }}>
                        <img src={X} alt="X" />
                    </button>
                </div>
            </div>
            <div className={classes.ContentWindow}>
                <h2>I need a landing page</h2>
                <p>Hello! I'm a full-stack developer proficient in React and Golang. Explore my portfolio to witness the synergy of cutting-edge frontend with React and robust backend powered by Golang. Immerse yourself in a world of seamless and polished experiences, where every line of code is crafted with love and a pursuit of perfection. Welcome to my digital creative space!</p>
                <input placeholder="Enter your link to any social networking site" className={classes.InpItem} />
                <button className={classes.BtnConfirm} style={{color: props.color}}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default Windows