import React, { useState } from 'react'

import { Button, Container, Menu } from 'semantic-ui-react'
import Signedin from './Signedin'
import SignedOut from './SignedOut'

import { NavLink, useHistory } from 'react-router-dom'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("")

    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    <Button as={NavLink} to="/KayıtOl" color='orange' style={{ marginLeft: '0.5em' }} > Kayıt Ol </Button>
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        as={NavLink} to=""
                        name='home'
                        icon='home'

                    />
                    <Menu.Item
                    as={NavLink} to="/JobDetail"
                        name='Find Job '
                        icon='search'
                    />

                    <Menu.Menu position='right'>
                        
                        {isAuthenticated ? <Signedin signOut={handleSignOut} bisey="1" /> :
                            < SignedOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}