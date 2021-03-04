import React, { useMemo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useTable } from 'react-table'

import CardContainer from '../../shared/CardContainer'
import { tableRows } from '../../Data/Data'


interface Props {
    columns: any[]
    data: any[],
    heading?: string
}

export function MaterialTable(props: Props) {
    const { columns, data, heading } = props
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    })
    return (
        <CardContainer text={heading} comp='h5'>
            <MaUTable {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableCell {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <TableCell {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </MaUTable>
        </CardContainer>
    )
}

const Table = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Id',
                accessor: 'id'
            },
            {
                Header: 'First Name',
                accessor: 'firstName'
            },
            {
                Header: 'Last Name',
                accessor: 'lastName'
            },
            {
                Header: 'Age',
                accessor: 'age'
            },
        ],
        []
    )

    return (
        <div>
            <CssBaseline />
            <MaterialTable heading={'Characters Age Profile'} columns={columns} data={tableRows} />
        </div>
    )
}

export default Table
