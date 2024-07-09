import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from 'layouts'

const Home = lazy(() => import('pages/home'))
const DetailArticle = lazy(() => import('pages/article/detail'))
const PrivacyPolicy = lazy(() => import('pages/legal/privacyPolicy'))
const TermOfService = lazy(() => import('pages/legal/termOfService'))

const Loading = () => <div>Loading...</div>

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: '/articles/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <DetailArticle />
          </Suspense>
        )
      },

      // Legal Page
      {
        path: '/term-of-service',
        element: (
          <Suspense fallback={<Loading />}>
            <TermOfService />
          </Suspense>
        )
      },
      {
        path: '/privacy-policy',
        element: (
          <Suspense fallback={<Loading />}>
            <PrivacyPolicy />
          </Suspense>
        )
      }
    ]
  }
])
