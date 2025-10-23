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
        },{id: "post-hill-climbing-search-for-predicate-discovery",
        
          title: "Hill Climbing Search for Predicate Discovery",
        
        description: "An interactive visualization of the hill climbing algorithm used in grammar search invention for task planning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hill-climbing-search/";
          
        },
      },{id: "post-learning-probability-for-machine-learning",
        
          title: "Learning Probability for Machine Learning",
        
        description: "An interactive exploration of fundamental probability concepts and the Central Limit Theorem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/probability-for-ml/";
          
        },
      },{id: "news-paper-pspc-is-accepted-to-ojid-2024",
          title: 'Paper PSPC is accepted to OJID 2024.',
          description: "",
          section: "News",},{id: "news-paper-pspc-got-spotlighted-in-ojid-2024",
          title: 'Paper PSPC got spotlighted in OJID 2024.',
          description: "",
          section: "News",},{id: "news-join-princeton-university-as-a-ece-ph-d",
          title: 'Join Princeton University as a ECE Ph.D.',
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
