import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleHeaderVertical extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fixed=''>
        <Menu.Item>
          <Menu.Header>MAJOR.NET</Menu.Header>

          <Menu.Menu>
            <Menu.Item
            as={NavLink} to="/KayıtOl" 
              name='Kayıt Ol'
              active={activeItem === 'enterprise'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            as={NavLink} to="/Hakkımızda" 
              name='Hakkımızda'
              active={activeItem === 'Hakkımızda'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>İş Ara</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Uzaktan Çalışma İmkanları'
              active={activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Yeni Mezun İlanları'
              active={activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Part-Time İlanlar'
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Kategori</Menu.Header>

          <Menu.Menu>
            <Menu.Item
            as={NavLink} to="/IsVeren"
              name='İş Veren'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            as={NavLink} to="/Calısanlar"
              name='Çalışan'
              active={activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Destek</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='email'
              active={activeItem === 'email'}
              onClick={this.handleItemClick}
            >
             Canlı Destek
            </Menu.Item>

            <Menu.Item
            as={NavLink} to="/SSS"
              name='SSS'
              active={activeItem === 'faq'}
              onClick={this.handleItemClick}
            >
              SSS
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}