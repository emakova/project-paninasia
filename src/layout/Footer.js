import "./Footer.css"

function Footer(){
  return(
    <div className="footer">
      copyright - {new Date().getFullYear()}
    </div>
  )
}
export default Footer