import '../../styling/StudentDash.css'; 
function Notice(Props) {
    return (
        <div className="Notic">
            <p style={{ color: 'black', fontWeight: 'bold', marginBottom:'0px' }}>{Props.name}</p>
            <p style={{ marginTop: '0px', color:'rgba(0, 0, 0, 0.5)',marginBottom:'0px'}}>{Props.dis}</p>
            <a style={{ color: "#674818", marginTop:'0px',}}>See more</a>
        </div>
    )
}
export default Notice; 