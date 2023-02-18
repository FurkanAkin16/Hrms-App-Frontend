import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobVerenService from '../services/jobVerenService'


export default function IsVerenDetail() {

    const [jobsVeren, SetJobsVeren] = useState([])

    useEffect(() => {

        let jobVerenService = new JobVerenService()
        jobVerenService.getJobVerens().then(result => SetJobsVeren(result.data.data))


    })


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className="small-text" ><Icon name='tag' />Meslek</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" ><Icon name='conversation' />Açıklama</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" ><Icon name='world' />Şehir</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" ><Icon name='money bill alternate outline' />Maaş</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" ><Icon name='calendar alternate' />Başvuru Bitiş Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobsVeren.map(jobsVeren => (
                            <Table.Row key={jobsVeren}>
                                <Table.Cell className="small-text" >{jobsVeren.jobPosition}</Table.Cell>
                                <Table.Cell className="small-text" >{jobsVeren.jobDescription}</Table.Cell>
                                <Table.Cell className="small-text" >{jobsVeren.city}</Table.Cell>
                                <Table.Cell className="small-text" >{jobsVeren.salary}</Table.Cell>
                                <Table.Cell className="small-text" >{jobsVeren.deadline}</Table.Cell>
                            </Table.Row>


                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
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
