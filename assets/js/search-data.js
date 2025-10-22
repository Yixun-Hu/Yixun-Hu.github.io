// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-misc",
          title: "misc",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-learning-probability-for-machine-learning",
        
          title: "Learning Probability for Machine Learning",
        
        description: "An interactive exploration of fundamental probability concepts and the Central Limit Theorem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/probability-for-ml/";
          
        },
      },{id: "news-paper-pspc-is-accepted-to-ojid-2024",
          title: 'Paper PSPC is accepted to OJID 2024.',
          description: "",
          section: "News",},{id: "news-paper-pspc-got-spotlighted-in-ojid-2024",
          title: 'Paper PSPC got spotlighted in OJID 2024.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
