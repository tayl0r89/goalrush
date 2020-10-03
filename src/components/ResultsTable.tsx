import React from 'react'

import { Table, TableHead, TableRow, TableCell, TableBody } from '@committed/components'

export interface ResultsTableProps {
    results: {
        player: string,
        points: number,
        goals: number
    }[]
}

export const ResultsTable: React.FC<ResultsTableProps> = ({results}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell>Player</TableCell>
                    <TableCell>Points</TableCell>
                    <TableCell>Goals</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {results.map((r,i) => 
                <TableRow key={r.player}>
                    <TableCell>
                        {i}
                    </TableCell>
                    <TableCell component="th" scope="row">{r.player}</TableCell>
                    <TableCell>{r.points}</TableCell>
                    <TableCell>{r.goals}</TableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
    )
}