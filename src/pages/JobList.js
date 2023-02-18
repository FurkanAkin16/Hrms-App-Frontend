import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'


export default function JobList() {

  const [employers, setEmployers] = useState([])

  useEffect(() => {

    let employerService = new EmployerService()
    employerService.getEmployers().then(result => setEmployers(result.data.data))


  })


  return (
    <div>
      <Table celled size='small'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="small-text" ><Icon name='building' /> Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell className="small-text" > <Icon name='info circle' />Web Sitesi</Table.HeaderCell>
            <Table.HeaderCell className="small-text" ><Icon name='mail' />E-mail adresi</Table.HeaderCell>
            <Table.HeaderCell className="small-text" ><Icon name='phone' />  Telefon Numarası</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            employers.map(employers => (
              <Table.Row key={employers.id}>
                <Table.Cell className="small-text" ><Link to={`/employers/${employers.id}`}>{employers.companyName}</Link></Table.Cell>
                <Table.Cell className="small-text" >{employers.webAdress}</Table.Cell>
                <Table.Cell className="small-text" >{employers.email}</Table.Cell>
                <Table.Cell className="small-text" >{employers.phone}</Table.Cell>
              </Table.Row>
            ))
          }


        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
