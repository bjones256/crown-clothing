import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import './header.styles.scss'; no longer need the scss files becuase I'm now using styled-components
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/cart-icon.component';
import CartDropdown from '../CartDropdown/cart-dropdown.component';
// import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
        <OptionLink to='/shop'>
            Shop
        </OptionLink>
        <OptionLink to='/shop'>
            Contact
        </OptionLink>
        {
            currentUser ?
            <OptionLink as='div' onClick={signOutStart}>
                Sign Out
            </OptionLink>
            :
            <OptionLink to='/signin'>Sign In</OptionLink> 
        }
        <CartIcon/>
        </OptionsContainer>
        {hidden ? null :<CartDropdown/>}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)