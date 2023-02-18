import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function Signedin({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://res.cloudinary.com/dqwqallnf/image/upload/v1676209490/My_project_erqibz.jpg" />
                <Dropdown pointing="top left" text="Furkan">
                    <Dropdown.Menu>
                        <Dropdown.Item  as={NavLink} to="/UserProfil" text="Profilim " icon="user" />
                        <Dropdown.Item  as={NavLink} to="/Basvuru" text="Başvurularım " icon="info" />
                     <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}