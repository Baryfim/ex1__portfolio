import Continer from "../Container/Continer"
// Styles
import classes from "./Info.module.css"
// Images
import Arrow from "../../images/arrow.svg"
import X from "../../images/x.svg"


const Info = (props) => {
    let ImageIcon1 = X

    const handleButtonClick = (value) => {
        if (props.isOpenWindow) {
            props.setIsOpenWindow("")
        }
        document.getElementById("packageArea").scrollTo({
            top: value,
            behavior: 'smooth',
        });
    };

    return (
        <Continer>
            <div className={classes.InfoBlock}>
                <h1>Reacting with Golang Brilliance: Crafting Seamless Full-Stack Experiences!</h1>
                <p className={classes.TextHandler}>Hello! I'm a full-stack developer proficient in React and Golang. Explore my portfolio to witness the synergy of cutting-edge frontend with React and robust backend powered by Golang. Immerse yourself in a world of seamless and polished experiences, where every line of code is crafted with love and a pursuit of perfection. Welcome to my digital creative space!</p>
            </div>
            <div className={classes.Packegs}>
                <div className={classes.PackegElement}>
                    <div className={classes.PackegElement__info}>
                        <h2>I need a landing page</h2>
                        <p>A landing page is any page that encourages the user to do something. For example, subscribe to a newsletter, buy a ticket to a conference, request an estimate, or simply download a presentation.</p>
                    </div>
                    <div className={classes.PackegElement__btns}>
                        <button className={classes.BaseBtn} onClick={() => handleButtonClick(0)}>
                            { props.isOpenWindow === "0"
                                ? <img src={ImageIcon1} alt="x"/>
                                : <img src={Arrow} alt="Arrow" />
                            }
                        </button>
                    </div>
                </div>
                <div className={classes.PackegElement}>
                    <div className={classes.PackegElement__info}>
                        <h2>I need a small and user-friendly website</h2>
                        <p>A landing page is any page that encourages the user to do something. For example, subscribe to a newsletter, buy a ticket to a conference, request an estimate, or simply download a presentation.</p>
                    </div>
                    <div className={classes.PackegElement__btns}>
                        <button className={classes.NoramlBtn} onClick={() => handleButtonClick(700)}>
                            { props.isOpenWindow === "700"
                                ? <img src={ImageIcon1} alt="x"/>
                                : <img src={Arrow} alt="Arrow" />
                            }
                        </button>
                    </div>
                </div>
                <div className={classes.PackegElement}>
                    <div className={classes.PackegElement__info}>
                        <h2>I need a landing page</h2>
                        <p>A landing page is any page that encourages the user to do something. For example, subscribe to a newsletter, buy a ticket to a conference, request an estimate, or simply download a presentation.</p>
                    </div>
                    <div className={classes.PackegElement__btns}>
                        <button className={classes.ProBtn} onClick={() => handleButtonClick(1400)}>
                            { props.isOpenWindow === "1400"
                                ? <img src={ImageIcon1} alt="x"/>
                                : <img src={Arrow} alt="Arrow" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </Continer>
    )
}

export default Info