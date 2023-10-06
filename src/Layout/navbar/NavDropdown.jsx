
import { Avatar, Dropdown } from 'flowbite-react'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../contexts/AuthProvider'
import UserName from './UserName'

export default function NavDropdown() {
    const { user, logOut } = useContext(AuthContext)
    console.log(user.photoURL)
    const handleSignOut = () => {
        logOut()
            .then(() => {
            toast.success('Logout Successful!')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.code)
        })
    }
  return (
      <Dropdown inline arrowIcon={false} label={user.photoURL ? <Avatar img={user.photoURL} rounded/> : <UserName userName={user.displayName
      } />}>
          <Dropdown.Header>
          <span className="block text-sm">
              {user.displayName}
            </span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignOut}>
             Sing Out
          </Dropdown.Item>
      </Dropdown>
  )
}
