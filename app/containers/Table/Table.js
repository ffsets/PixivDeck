// @flow
import * as React from 'react'
import { SortablePane, Pane } from 'react-sortable-pane'
import ColumnManager from '../ColumnManager'
import type { TableIds } from './reducer'
import typeof { setTable } from './actions'

export type Props = {
  ids: TableIds,
  setTabel: setTable,
}

const Table = ({ ids, setTabel }: Props) => {
  const handleOnResize = () => null

  if (ids.length === 0) {
    return null
  }

  const panes = ids.map(key => (
    <Pane
      key={key}
      size={{ width: 280, height: '100%' }}
      style={{ zIndex: 1 }}
      resizable={{ x: true, y: false, xy: false }}
    >
      <ColumnManager id={key} />
    </Pane>
  ))

  return (
    <SortablePane
      order={ids}
      disableEffect
      onResize={handleOnResize}
      onOrderChange={order => {
        setTabel(order)
      }}
    >
      {panes}
    </SortablePane>
  )
}

export default Table
