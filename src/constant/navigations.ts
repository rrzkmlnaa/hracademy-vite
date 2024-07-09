export type NavigationTypes = {
  name: string
  path?: string
  children?: NavigationTypes[]
}

export const navigations: NavigationTypes[] = [
  {
    name: 'Services',
    children: [
      {
        name: 'Career Development',
        path: '/services/career-development'
      },
      {
        name: 'Training and Certification',
        path: '/services/training-and-certification'
      },
      {
        name: 'Solutions',
        children: [
          {
            name: 'Talent Recruitment',
            path: '/services/solutions/talent-recruitment'
          },
          {
            name: 'Employee On-boarding & Off-boarding',
            path: '/services/solutions/employee-on-boarding-and-off-boarding'
          },
          {
            name: 'Performance & Career Management',
            path: '/services/solutions/performance-and-career-management'
          },
          {
            name: 'Payroll Management',
            path: '/services/solutions/payroll-management'
          },
          {
            name: 'Human Resources System',
            path: '/services/solutions/human-resource-system'
          },
          {
            name: 'Ad-hoc consulting service',
            path: '/services/solutions/ad-hoc-consulting-services'
          }
        ]
      }
    ]
  },
  // {
  //   name: "Class",
  //   path: "/class",
  // },
  {
    name: 'Resources',
    path: '/resources'
  },
  {
    name: 'Success Story',
    path: '/success-story'
  },
  {
    name: 'Issues',
    path: '/featured'
    // children: [
    //   {
    //     name: "Event",
    //     path: "/"
    //   }
    // ]
  },
  // {
  //   name: "Careers",
  //   path: "/",
  // },
  {
    name: 'About Us',
    children: [
      {
        name: 'Company',
        path: '/about-us/company'
      },
      {
        name: 'Contact Us',
        path: '/about-us/contact-us'
      }
    ]
  }
]
