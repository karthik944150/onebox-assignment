import {FiHome} from 'react-icons/fi'
import {BiSolidContact} from 'react-icons/bi'
import {LuMessageSquare, LuBarChart2} from 'react-icons/lu'
import {FaTelegramPlane, FaInbox} from 'react-icons/fa'
import {TfiMenuAlt} from 'react-icons/tfi'
import './index.css'

const PrimeNavBar = () => (
  <div className="primary-nav">
    <div className="logo-holder">
      <h1>M</h1>
    </div>
    <div className="menu-conainer">
      <ul className="left-panel-top">
        <li className="frame">
          <FiHome size={25} />
        </li>
        <li className="frame">
          <BiSolidContact size={25} />
        </li>
        <li className="frame">
          <LuMessageSquare size={25} />
        </li>
        <li className="frame">
          <FaTelegramPlane size={25} />
        </li>
        <li className="frame">
          <TfiMenuAlt size={25} />
        </li>
        <li className="frame">
          <FaInbox size={25} />
        </li>
        <li className="frame">
          <LuBarChart2 size={25} />
        </li>
      </ul>
    </div>
    <div className="user-profile">
      <h1 className="profile-img">AS</h1>
    </div>
  </div>
)

export default PrimeNavBar
