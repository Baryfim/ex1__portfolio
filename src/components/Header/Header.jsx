import Continer from "../Container/Continer"
// Styles
import classes from "./Header.module.css"


const Header = () => {
    return (
        <header className={classes.HeaderBlock}>
            <Continer>
                <div className={classes.HeaderBlock__inner}>
                    <div className={classes.LogotypeHeader__block}>
                        <h1>R&G</h1>
                    </div>
                    <nav className={classes.List__SocialNetworks}>
                        <div className={classes.Item__SocialNetworks}>
                            <span>Discord</span>
                        </div>
                        <div className={classes.Item__SocialNetworks}>
                            <span>Twitter</span>
                        </div>
                    </nav>
                </div>
            </Continer>
        </header>
    )
}

export default Header