import { useState } from "react";
import { forwardRef, useImperativeHandle } from 'react'
import s from './index.module.scss';

interface TableBuilderProps {
    tabletype: string; 
    tableRow: number;
    tableCols: number;
}
// const checkTabletype = (tabletype: string) => {
//     if (tabletype === 'singleTable') {
        
//     } else if (tabletype === 'doubleTable') {
//         ;
//     } else if (tabletype === 'fourTable') {
//         ;
//     }
//     return tabletype;
// }

//type CellGrid = string[][];

export type TableBlderRef = { reset: () => void }

export const TableBuilder = forwardRef<TableBlderRef, { 
    tableRow: number; 
    tableCols: number; 
    tabletype?: string 
}>(
    ({ tableRow, tableCols }, ref) => {
    const [grid, setGrid] = useState<string[][]>(
        Array.from({ length: tableRow }, () => Array.from({ length: tableCols }, () => ''))
      )

      const updateCell = (r: number, c: number, value: string) => {
        setGrid((prev) => {
          const next = prev.map((row) => row.slice())
          next[r][c] = value
          return next
        })
      }

    useImperativeHandle(ref, () => ({
        reset: handleCancel
    }))

    const handleSubmit = () => {
        //логика работы с данными таблицы
        console.log('grid:', grid)
      }
     const handleCancel = () => {
        setGrid(Array.from({ length: tableRow }, () => Array.from({ length: tableCols }, () => '')))
    }
    
    return (
        <div className={s.wrap}>
          <table>
            <tbody>
              {grid.map((row, r) => (
                <tr key={r}>
                  {row.map((value, c) => (
                    <td key={c}>
                      <input
                        value={value}
                        onChange={(e) => updateCell(r, c, e.target.value)}
                        placeholder=""
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
})