const INITIAL_STATE = {
  sections: [
    {
      title: 'soy-candles',
      imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/83492802_154024859387368_931297262238171136_o.jpg?_nc_cat=102&_nc_ohc=HGMXHa8M9hQAX8khLgF&_nc_ht=scontent.fiev22-2.fna&oh=c0bdd889e2622d0e1dfcf56fd57c3318&oe=5F01A1A3',
      id: 1,
      linkUrl: 'shop/soy-candles'
    },
    {
      title: 'gel-candles',
      imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/80681661_143344003788787_5156130495368527872_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=5svjTFau6Z0AX8wZsFp&_nc_ht=scontent.fiev22-1.fna&oh=366e620cb421522704528592100ee27b&oe=5EF27497',
      id: 2,
      linkUrl: 'shop/gel-candles'
    },
    {
      title: 'massage-candles',
      imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/85174422_156877245768796_3287311416524013568_o.jpg?_nc_cat=106&_nc_ohc=Cb_5oVQvMkQAX895dpy&_nc_ht=scontent.fiev22-1.fna&oh=bf7d1b67179cc257d7b6d5482a306842&oe=5EB5D9DC',
      id: 3,
      linkUrl: 'shop/massage-candles'
    },
    {
      title: 'soaps',
      imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/85100290_160931925363328_6440395205148409856_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=eHO5R8veQyYAX9RJsD6&_nc_ht=scontent.fiev22-1.fna&oh=224f161d9729f256cf0eff1648e80751&oe=5EFA13E3',
      size: 'large',
      id: 4,
      linkUrl: 'shop/soaps'
    },
    {
      title: 'bath-bombs',
      imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/83997676_155247985931722_337861575115276288_o.jpg?_nc_cat=101&_nc_ohc=xlBasfF1434AX9gvMns&_nc_ht=scontent.fiev22-2.fna&oh=69914a5cba6697b5bd02553ed2ffb985&oe=5EC334E9',
      size: 'large',
      id: 5,
      linkUrl: 'shop/bath-bombs'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
