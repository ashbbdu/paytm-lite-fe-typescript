import React, { memo } from 'react'
import { useSelector } from "react-redux"
import { useAppSelector } from '../store/hooks';
const UserDetails = memo(() => {
const { bankBalance } = useAppSelector(state => state.bank)
  return (
    <div>
        Your current balance is : $ {bankBalance}
    </div>
  )
})

export default UserDetails