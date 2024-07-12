import React from 'react'
import SEO from './SEO'
import { Outlet } from 'react-router-dom'
import { defaultSEOConfig } from 'configs/seo'
import Footer from './footer'
import Navigation from './navigation'
import Breadcrumb from './Breadcrumb'

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
      <Breadcrumb
        homeElement='Home'
        separator={<span> &gt; </span>}
        activeClasses='text-primary capitalize font-bold'
        containerClasses='container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-auto flex py-5' 
        listClasses='hover:underline mx-2'
        capitalizeLinks
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AppLayout
