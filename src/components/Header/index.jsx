
import Cookie from 'js-cookie'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import './header.css'






function Header(props) {
  const onLoguot = () => {
    Cookie.remove('jwt_token')
    props.history.replace('/login')
  }

  const renderMobileHeader = () => {
    return (
      <div className='mobile-header-container'>
          <Link to='/'><FaHome className='header-icon'/></Link>
          <Link to='/jobs'><FaBusinessTime className='header-icon'/></Link>
          <IoMdExit onClick={onLoguot}/>
      </div>
    )
  }
  
  const renderDesktopHeader = () => {
    return(
      <div className="disktop-header-container">
        <div className="header-para-cart">
          <Link to='/'><p>Home</p></Link>
          <Link to='/jobs'><p>Job</p></Link>
        </div>
        <button className="logout-btn" onClick={onLoguot}>Logout</button>
      </div>
    )
  }

  return (
    <div className='Header-bg'>
      <Link to='/'><img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' className='logo-img'/></Link>
      {renderMobileHeader()}
      {renderDesktopHeader()}
    </div>
  )
}

export default withRouter( Header)
