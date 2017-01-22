const DEFAULT_STATE = {
  podcasts: [
    {
      title: 'France – France 24 - International News 24/7',
      url: 'http://www.france24.com/en/france/rss',
      image: 'http://www.france24.com/bundles/aefhermesf24/img/france24-logo.png?version=20170113125420',
    },
    {
      title: 'Africa – France 24 - International News 24/7',
      url: 'http://www.france24.com/en/africa/rss',
      image: 'http://www.france24.com/bundles/aefhermesf24/img/france24-logo.png?version=20170113125420',
    },
    {
      title: 'Middle East – France 24 - International News 24/7',
      url: 'http://www.france24.com/en/middle-east/rss',
      image: 'http://www.france24.com/bundles/aefhermesf24/img/france24-logo.png?version=20170113125420',
    }
  ]

};

export default (state = DEFAULT_STATE, action) => {

  return DEFAULT_STATE;

}
