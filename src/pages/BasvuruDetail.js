import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleSelectableInvertedRow = () => (
  <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell className="small-text" >Company Name</Table.HeaderCell>
        <Table.HeaderCell className="small-text">İş Tanımı</Table.HeaderCell>
        <Table.HeaderCell className="small-text" >Sonuç</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell className="small-text" >Major Tarım</Table.Cell>
        <Table.Cell className="small-text" >Amele</Table.Cell>
        <Table.Cell  className="small-text" icon='times' textAlign='right'></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell className="small-text" >Major Gıda</Table.Cell>
        <Table.Cell className="small-text" >Kasiyerr</Table.Cell>
        <Table.Cell  className="small-text" icon='check'  textAlign='right'></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell className="small-text" >Oğuz Yatırım</Table.Cell>
        <Table.Cell className="small-text" >Yatırım Danışmanı</Table.Cell>
        <Table.Cell  className="small-text" icon='times' textAlign='right'></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleSelectableInvertedRow