import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  const history = useHistory()
  history.push("")
  return (
    <div>
        <Menu.Item>
        <Button onClick={signIn}  color='facebook'  > Giriş Yap </Button>
        <Button  as={NavLink} to="/KayıtOl" color='orange' style={{marginLeft:'0.5em'}} > Kayıt Ol </Button>
        </Menu.Item>
        
    </div>
  )
}






