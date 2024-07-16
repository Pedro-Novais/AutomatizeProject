function Buttons(props){
    return(
        <button className={props.styleButton} onClick={props.eventBtn}>
           {props.children}
        </button>
    )
}

export default Buttons
