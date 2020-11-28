import React from 'react';
import CartIcon from '../CartIcon/cart-icon.component';

import CustomButton from '../CustomButton/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;