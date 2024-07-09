/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { RichTextElement } from 'helpers'
import { HTTP_Request } from 'hooks/useApi'
import { redirect, useParams } from 'react-router-dom'
import { Article } from './types'

const DetailArticle = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = (await HTTP_Request(
          '/posts/668b4dec8804268543437174'
        )) as any

        setArticle(res.data)
        console.log(res.data)
      } catch (error: any) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  if (!slug) return redirect('/')

  return (
    <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
        {article?.title}
      </h1>
      {article?.layout.map((section) => (
        <div key={section.id}>
          {section.columns.map((column) => (
            <div key={column.id}>
              {column.richText.map((block, blockIndex) => (
                <RichTextElement key={blockIndex} block={block} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default DetailArticle
