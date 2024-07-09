import React from 'react'

export type Block = {
  type: 'h1' | 'ul' | 'li' | 'p'
  text?: string
  children?: Block[]
}

export const RichTextElement: React.FC<{ block: Block }> = ({ block }) => {
  const renderChildren = (children: Block[]) => {
    return children.map((child, index) => (
      <RichTextElement key={index} block={child} />
    ))
  }

  switch (block.type) {
    case 'h1':
      return <h1>{block.text || renderChildren(block.children || [])}</h1>
    case 'ul':
      return (
        <ul className="list-disc">{renderChildren(block.children || [])}</ul>
      )
    case 'li':
      return <li>{block.text || renderChildren(block.children || [])}</li>
    case 'p':
    default:
      return <p>{block.text || renderChildren(block.children || [])}</p>
  }
}
