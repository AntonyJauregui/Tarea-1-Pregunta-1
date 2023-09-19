export const ColorChanger  = ({color}) =>{

    const style = {
        width: "100px",
        height: "100px",
        background: color,
    }
    return(
        <div>
            <h1>Colores</h1>
              <div style={{width: "100px", height: "100px", background: color}}></div>
        </div>
    )
}