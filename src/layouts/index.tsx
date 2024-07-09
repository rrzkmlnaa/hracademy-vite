import React from 'react'
import SEO from './SEO'
import { Outlet } from 'react-router-dom'
import { defaultSEOConfig } from 'configs/seo'
import Footer from './footer'
import Navigation from './navigation'

const AppLayout: React.FC = () => {
  return (
    <>
      <SEO
        pageTitle={defaultSEOConfig.appName}
        metaDescription={defaultSEOConfig.appDescription}
        urlCanonical="https://www.hracademy.id"
        {...defaultSEOConfig}
      />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AppLayout
