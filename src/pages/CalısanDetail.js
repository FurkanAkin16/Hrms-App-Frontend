import React, { useEffect, useState, } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CalisanService from '../services/calisanService'

export default function CalısanDetail() {

    const [calisans, SetCalisans] = useState([])

    useEffect(() => {

        let calisanService = new CalisanService()
        calisanService.getCalisans().then(result => SetCalisans(result.data.data))

    })



    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className="small-text" ><Icon name='address card' /> Adı</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" > <Icon name='address card outline' />Soyadı</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" > <Icon name='building outline' />Okul</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" ><Icon name='language' /> Dil</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" > <Icon name='star' />Tecrübe</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" > <Icon name='hourglass' />Tecrübe Yılı</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" ><Icon name='map' /> Mezuniyet Durumu</Table.HeaderCell>
                        <Table.HeaderCell className="small-text" ><Icon name='file text' /> Ön Yazı</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        calisans.map(calisans => (
                            <Table.Row key={calisans}>
                                <Table.Cell className="small-text" >{calisans.name}</Table.Cell>
                                <Table.Cell className="small-text" >{calisans.surName}</Table.Cell>
                                <Table.Cell className="small-text" >{calisans.school}</Table.Cell>
                                <Table.Cell className="small-text" >{calisans.languages}</Table.Cell>
                                <Table.Cell className="small-text" >{calisans.experience}</Table.Cell>
                                <Table.Cell className="small-text" >{calisans.experienceOfTheYear}</Table.Cell>
                                <Table.Cell className="small-text" >{calisans.graduation}</Table.Cell>
                                <Table.Cell className="small-text" >{calisans.coverLetter}</Table.Cell>

                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron circle left' />
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
