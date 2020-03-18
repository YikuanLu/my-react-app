import React from 'react'

interface Props {
  children?: React.ReactNode;
}

const BasicLayout: React.FC<Props> = ({ children }: Props) => (
  <div className="basicLayout">{children || null}</div>
)

export default BasicLayout
