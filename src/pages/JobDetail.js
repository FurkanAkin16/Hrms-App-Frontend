import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobService from '../services/jobService'

export default function JobDetail() {

  const [jobs, setJobs] = useState([])

  useEffect(()=>{
    let jobService = new JobService()
    jobService.getJobs().then(result=>setJobs(result.data.data))
  })


  return (
    <div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="small-text" ><Icon name='building' />  Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell className="small-text" > <Icon name='key' /> Meslek</Table.HeaderCell>
            <Table.HeaderCell className="small-text" ><Icon name='calendar' />İlan Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell className="small-text" ><Icon name='calendar' />İlan Bitiş Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            jobs.map(jobs => (
              <Table.Row key={jobs}>
                  <Table.Cell className="small-text" ><Link to={`/JobsDetail/${jobs.id}`}>{jobs.companyName}</Link></Table.Cell>
                <Table.Cell className="small-text" >{jobs.jobPositionName}</Table.Cell>
                <Table.Cell className="small-text" >{jobs.adPublicationDate}</Table.Cell>
                <Table.Cell className="small-text" >{jobs.deadline}</Table.Cell>
              
              </Table.Row>
            ))
          }


        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
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
