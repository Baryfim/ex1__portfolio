// Styles
import classes from "./package.module.css"

const Package = (props) => {
    const color = {
        "#81978F": "0",
        "#85A5D1": "700",
        "#DC8B6B": "1400"
    }

    return (
        <div className={classes.Package} style={{backgroundColor: props.background}}>
            <div className={classes.Continer}>
                <h2 className={classes.NamePackege}>I need a landing page</h2>
                <p className={classes.packageDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h2 className={classes.LabelWhatUse}>What are we going to use?</h2>
                <p className={classes.WhatGoingUse}>To craft the landing page, we leverage the power of React.js, the forefront framework for building the frontend of our applications. For processing your orders and managing contacts, we employ either Python with its efficient FastApi framework or GoLang with its robust Fiber framework. Our commitment is to utilize cutting-edge technologies, ensuring that every aspect is developed with a focus on quality and longevity!</p>
                <div className={classes.BtnsBlock}>
                    <button className={classes.order} style={{color: props.background}} onClick={() => {
                        props.setColorWindow(props.background)
                        props.setIsOpenWindow(color[props.background])
                    }}>
                        To order
                    </button>
                    <button className={classes.ViewWorks}>
                        View works
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Package