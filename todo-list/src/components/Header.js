

const Header = ({title}) => {
  return (
    <header className="header">
      <h1 >{title}</h1>
      <button className="btn">Add</button>
    </header>
  )
}

Header.defaultProps = {
 title: "Task Tracker"
}

// const headingStyle = { color:"red", 
//                       backgroundColor:"black", 
//                       fontSize: "80px"

// }

export default Header