import React from 'react'

import { MaterialTable } from './Table'

interface Props {
    columns: any[]
    rows: any[]
    heading?: string
}

const DataTable = (props: Props) => {
    const { columns, rows, heading } = props
    return (
        <div>
            <MaterialTable heading={heading} columns={columns} data={rows} />
        </div>
    )
}

export default DataTable
