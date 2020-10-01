import React from 'react'

interface Props {
  name: string
  children: React.ReactNode
}

export default ({ name, children }: Props) => (
  <>
    <h1>{name}</h1>
    <ul>{children}</ul>
  </>
)
