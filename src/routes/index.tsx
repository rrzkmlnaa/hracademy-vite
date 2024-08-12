import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from 'layouts'

const Home = lazy(() => import('pages/home'))
const PrivacyPolicy = lazy(() => import('pages/legal/privacyPolicy'))
const TermOfService = lazy(() => import('pages/legal/termOfService'))
const SuccessStory = lazy(() => import('pages/success-story/index'))
const Services = lazy(() => import('pages/services/page'))
const CareerDevelopment = lazy(() => import('pages/services/career-development/index'))
const CareerCoaching = lazy(() => import('pages/services/career-development/slug/career-coacing'))
const TrainingCertification = lazy(() => import('pages/services/training-and-certification/index'))
const AboutUs = lazy(() => import('pages/about-us/page'))
const Company = lazy(() => import('pages/about-us/company/index'))
const ContactUs = lazy(() => import('pages/about-us/contact-us/index'))
const Resources = lazy(() => import('pages/resources/index'))
const SolutionsConsul = lazy (() => import('pages/services/solutions/ad-hoc-consulting-services/Index'))
const SolutionsBoarding = lazy (() => import('pages/services/solutions/employee-on-boarding-and-off-boarding/Index'))
const SolutionsResource = lazy (() => import('pages/services/solutions/human-resource-system/Index'))
const SolutionsManagement = lazy (() => import('pages/services/solutions/payroll-management/Index'))
const SolutionsCareer = lazy (() => import('pages/services/solutions/performance-and-career-management/Index'))
const SolutionsTalent = lazy (() => import('pages/services/solutions/talent-recruitment/Index'))
const InformasiTraining = lazy (() => import('pages/informasi-training/index'))
const SertifikasiHR = lazy (() => import('pages/sertifikasi-hr/index'))
const ResourceFrom = lazy (() => import('pages/resources/slug/page'))
const Artikel = lazy (() => import('pages/featured/slug/page'))
const Featured = lazy (() => import('pages/featured/index'))
const Staff = lazy (() => import('pages/classDetails/staff-hr/index'))
const Chrs = lazy (() => import('pages/classDetails/chrs/index'))
const Chrp = lazy (() => import('pages/classDetails/chrp/index'))
const Chcgm = lazy (() => import('pages/classDetails/chcgm/index'))
// import Staff = lazy (() => import('pages/classDetails/staff-hr/index'))

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
        path: '/term-of-service',
        element: (
          <Suspense fallback={<Loading />}>
            <TermOfService />
          </Suspense>
        )
      },
      {
        path: '/success-story',
        element: (
          <Suspense fallback={<Loading />}>
            <SuccessStory />
          </Suspense>
        )
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        )
      },
      {
        path: '/services/career-development',
        element: (
          <Suspense fallback={<Loading />}>
            <CareerDevelopment />
          </Suspense>
        )
      },
      {
        path: '/services/career-development/career-coacing',
        element: (
          <Suspense fallback={<Loading />}>
            <CareerCoaching />
          </Suspense>
        )
      },
      {
        path: '/services/training-and-certification',
        element: (
          <Suspense fallback={<Loading />}>
            <TrainingCertification />
          </Suspense>
        )
      },
      {
        path: '/about-us',
        element: (
          <Suspense fallback={<Loading />}>
            <AboutUs />
          </Suspense>
        )
      },
      {
        path: '/about-us/company',
        element: (
          <Suspense fallback={<Loading />}>
            <Company />
          </Suspense>
        )
      },
      {
        path: '/about-us/contact-us',
        element: (
          <Suspense fallback={<Loading />}>
            <ContactUs />
          </Suspense>
        )
      },
      {
        path: '/resources',
        element: (
          <Suspense fallback={<Loading />}>
            <Resources />
          </Suspense>
        )
      },
      {
        path: '/services/solutions/ad-hoc-consulting-services',
        element: (
          <Suspense fallback={<Loading />}>
            <SolutionsConsul />
          </Suspense>
        )
      },
      {
        path: '/services/solutions/employee-on-boarding-and-off-boarding',
        element: (
          <Suspense fallback={<Loading />}>
            <SolutionsBoarding />
          </Suspense>
        )
      },
      {
        path: '/services/solutions/human-resource-system',
        element: (
          <Suspense fallback={<Loading />}>
            <SolutionsResource />
          </Suspense>
        )
      },
      {
        path: '/services/solutions/payroll-management',
        element: (
          <Suspense fallback={<Loading />}>
            <SolutionsManagement />
          </Suspense>
        )
      },
      {
        path: '/services/solutions/performance-and-career-management',
        element: (
          <Suspense fallback={<Loading />}>
            <SolutionsCareer />
          </Suspense>
        )
      },
      {
        path: '/services/solutions/talent-recruitment',
        element: (
          <Suspense fallback={<Loading />}>
            <SolutionsTalent />
          </Suspense>
        )
      },
      {
        path: '/pages/informasi-training',
        element: (
          <Suspense fallback={<Loading />}>
            <InformasiTraining />
          </Suspense>
        )
      },
      {
        path: '/pages/sertifikasi-hr',
        element: (
          <Suspense fallback={<Loading />}>
            <SertifikasiHR />
          </Suspense>
        )
      },
      {
        path: '/resources/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <ResourceFrom />
          </Suspense>
        )
      },
      {
        path: '/featured/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <Artikel />
          </Suspense>
        )
      },
      {
        path: '/featured',
        element: (
          <Suspense fallback={<Loading />}>
            <Featured />
          </Suspense>
        )
      },
      {
        path: '/classDetails/staff-hr',
        element: (
          <Suspense fallback={<Loading />}>
            <Staff />
          </Suspense>
        )
      },
      {
        path: '/classDetails/chrs',
        element: (
          <Suspense fallback={<Loading />}>
            <Chrs />
          </Suspense>
        )
      },
      {
        path: '/classDetails/chrp',
        element: (
          <Suspense fallback={<Loading />}>
            <Chrp />
          </Suspense>
        )
      },
      {
        path: '/classDetails/chcgm',
        element: (
          <Suspense fallback={<Loading />}>
            <Chcgm />
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
      },
    ]
  }
])
