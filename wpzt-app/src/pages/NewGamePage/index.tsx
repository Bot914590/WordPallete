import React, { useState } from 'react';
import { TableBuilder } from '../../components/TableBlder';
import type { TableBlderRef } from '../../components/TableBlder';
import s from './index.module.scss';
import { useRef } from 'react'

type GameType = 'wheel' | 'match' | 'quiz'
type TableType = 'singleTable' | 'doubleTable' | 'fourTable'

const tableByGameType: Record<GameType, TableType> = {
  wheel: 'singleTable',
  match: 'doubleTable',
  quiz: 'fourTable',
}

export default function NewGamePage() {
  const [gametype, setGametype] = useState<GameType>('wheel')
  const tableBuilderRef = useRef<TableBlderRef>(null)

  const rows = 8;
  const cols = gametype === 'wheel' ? 1 : 2
  const tableType: TableType = tableByGameType[gametype]

  return (
    <div className={s.page}>
      <div className={s.card}>
        <div className={s.header}>
          <span className={s.badge}>Create Game</span>
          <h2 className={s.title}>New Game</h2>
        </div>

        <div className={s.controls}>
          <div className={s.segmented}>
            <button
              className={`${s.segmentedBtn} ${gametype === 'wheel' ? s.segmentedBtnActive : ''}`}
              onClick={() => setGametype('wheel')}
            >
              Wheel
            </button>
            <button
              className={`${s.segmentedBtn} ${gametype === 'match' ? s.segmentedBtnActive : ''}`}
              onClick={() => setGametype('match')}
            >
              Match
            </button>
            <button
              className={`${s.segmentedBtn} ${gametype === 'quiz' ? s.segmentedBtnActive : ''}`}
              onClick={() => setGametype('quiz')}
            >
              Quiz
            </button>
          </div>

          <div className={s.meta}>
            <span className={s.chip}>Rows: {rows}</span>
            <span className={s.chip}>Cols: {cols}</span>
            <span className={s.chip}>Type: {tableType}</span>
          </div>
        </div>

        <div className={s.tableWrap}>
          <TableBuilder
            key={`${tableType}-${rows}-${cols}`}
            tabletype={tableType}
            tableRow={rows}
            tableCols={cols}
            ref={tableBuilderRef}
          />
        </div>

        <div className={s.footer}>
          <button onClick={() => {}} className={`${s.btn} ${s.btnPrimary}`}>Save</button>
          <button onClick={() => tableBuilderRef.current?.reset()} className={`${s.btn} ${s.btnGhost}`}>Cancel</button>
        </div>
      </div>
    </div>
  )
}