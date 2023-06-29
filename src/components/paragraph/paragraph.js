const Paragraph = (props) => {
    return <p style={{color: props.color, textTransform: "uppercase"}}>{props.text}</p>
}

export default Paragraph