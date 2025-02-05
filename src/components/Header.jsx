import images from "../images/images.png"
function Header() {
  return (
    <div className="page_header">
      <img className="logo" src={images} alt="logo" />
    </div>
  )
}

export default Header