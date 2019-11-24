// Config
module.exports = {
  partials: {
    navbar: 'partials/_navbar',
    intro: 'partials/_intro',
    about: 'partials/_about',
    portfolio: 'partials/_portfolio',
    resume: 'partials/_resume',
    footer: 'partials/_footer',
    resumeFooter: 'partials/_resume_footer'
  },
  mainPage: {
    title: 'Adam Gruber',
    resumeTitle: 'Resume',
    nav: {
      sections: [
        {title: 'About', href: '/about'},
        {title: 'Projects', href: '/projects'},
        {title: 'Resume', href: '/resume'}
      ]
    }
  },
  resume: {
    resumeTitle: 'Adam Gruber',
    showLinks: true,
    resumeLinks: [
      'adamgruber.com',
      'github.com/adamgruber',
      'linkedin.com/in/adamgruber'
    ],
    contact: {
      email: 'adamgruber@me.com',
      phone: '609.510.0246',
      address: '5519 Grandview Lane, Doylestown PA'
    }
  }
};