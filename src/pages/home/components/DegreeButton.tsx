import React from 'react'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  active: boolean
  handleClick: () => void
}

const DegreeButton: React.FC<Props> = ({ active, handleClick, children }) => {
  return (
    <button
      className={clsx(
        'w-[40px] h-[40px] flex items-center justify-center rounded-full   text-[18px] font-bold',
        active ? 'bg-button-secondary text-quaternary' : 'bg-button-tertiary text-primary'
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default DegreeButton
