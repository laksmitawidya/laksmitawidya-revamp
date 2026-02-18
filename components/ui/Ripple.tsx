'use client'

import React, { useMemo, useRef, useState } from 'react'
import { cn } from '@/components/lib/utils'

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
}: {
  rows?: number
  cols?: number
  cellSize?: number
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number
    col: number
  } | null>(null)
  const [rippleKey, setRippleKey] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className="absolute inset-0 h-full w-full">
      <div className="relative h-auto w-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="opacity-80"
          style={{
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 50%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 90% at 50% 0%, black 50%, transparent 100%)',
          }}
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col })
            setRippleKey((k) => k + 1)
          }}
          interactive
        />
      </div>
    </div>
  )
}

type DivGridProps = {
  className?: string
  style?: React.CSSProperties
  rows: number
  cols: number
  cellSize: number
  clickedCell: { row: number; col: number } | null
  onCellClick?: (row: number, col: number) => void
  interactive?: boolean
}

type CellStyle = React.CSSProperties & {
  ['--delay']?: string
  ['--duration']?: string
}

const DivGrid = ({
  className,
  style,
  rows = 7,
  cols = 30,
  cellSize = 56,
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols])

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: 'auto',
    ...style,
  }

  return (
    <div className={cn('relative z-[3]', className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols)
        const colIdx = idx % cols
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0
        const delay = clickedCell ? Math.max(0, distance * 55) : 0
        const duration = 200 + distance * 80

        const cellStyle: CellStyle = clickedCell
          ? {
              '--delay': `${delay}ms`,
              '--duration': `${duration}ms`,
            }
          : {}

        return (
          <div
            key={idx}
            className={cn(
              'cell relative border-[1px] opacity-60 transition-opacity duration-150 will-change-transform hover:opacity-90',
              'border-gray-300 bg-gray-200/80 dark:border-gray-600 dark:bg-gray-800 dark:shadow-[0px_0px_40px_1px_rgba(38,38,38,1)_inset]',
              clickedCell && 'animate-cell-ripple',
              !interactive && 'pointer-events-none'
            )}
            style={cellStyle}
            onClick={interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined}
          />
        )
      })}
    </div>
  )
}
