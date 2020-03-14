import React from 'react'

interface Props {
  children?: React.ReactNode;
}

const BasicLayout: React.FC<Props> = ({ children }: Props) => {
  return <div className="basicLayout">{children ? children : null}</div>
}

export default BasicLayout
