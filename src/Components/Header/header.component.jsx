import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../CartIcon/cart-icon.component'
import CartDropdown from '../CartDropdown/cart-dropdown.component'
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
        <Link to='/shop' className='option'>
            Shop
        </Link>
        <Link to='/shop' className='option'>
            Contact
        </Link>
        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>
                Sign Out
            </div>
            :
            <Link className='option' to='/signin'>Sign In</Link> 
        }
        <CartIcon/>
        </div>
        {hidden ? null :<CartDropdown/>}
    </div>
)

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)