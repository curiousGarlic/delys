const SHOP_DATA = {
  soycandles: {
    id: 1,
    title: 'Soy-Candles',
    routeName: 'soy-candles',
    items: [
      {
        id: 1,
        name: 'Trio from Heaven',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/83777372_153161262807061_8547848486639370240_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=Qj3I_f4WIQUAX9oyBZf&_nc_ht=scontent.fiev22-2.fna&oh=e3559fdf9ef6cebfb550116eda1f5242&oe=5EF9868B',
        price: 30
      },
      {
        id: 2,
        name: 'Honey Rose',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/79416349_137909437665577_8821951847771144192_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=a9HKmBYk-RgAX-hvBnb&_nc_ht=scontent.fiev22-1.fna&oh=e7e98e09c9f074cb7e70fa63e2411777&oe=5EB532D8',
        price: 18
      },
      {
        id: 31,
        name: 'Ocean calls',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/86272160_158687892254398_287796644584357888_o.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=rIB0NMeq6jsAX9vy8W1&_nc_ht=scontent.fiev22-1.fna&oh=218d2288462c9ed75f56122f105bff14&oe=5EBDC7E3',
        price: 20
      },
      {
        id: 4,
        name: 'Sandalwood Rose',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/81591437_142205420569312_7093921238543761408_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=f4TgdgWmlVQAX96Eovu&_nc_ht=scontent.fiev22-1.fna&oh=8b75201ad73db713045dc245c088861a&oe=5EC376B3',
        price: 25
      },
      {
        id: 5,
        name: 'Orange in Autumn',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/82052119_146239556832565_5073969209810092032_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=BStIzLB19_oAX-L3i0R&_nc_ht=scontent.fiev22-2.fna&oh=a7e73816a8112be0ff8f1767154ab05e&oe=5EF53D5E',
        price: 12
      },
      {
        id: 6,
        name: 'Forest dreams',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/81537487_152827242840463_6199457010245697536_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=aE1fq7DYIA4AX8QI129&_nc_ht=scontent.fiev22-2.fna&oh=d7578575837ddbb3b63fa40bb84d748f&oe=5EFB4DAB',
        price: 12
      },
      {
        id: 7,
        name: 'Vanille Dreams',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/79818610_137909104332277_4992188527073558528_o.jpg?_nc_cat=101&_nc_sid=05277f&_nc_ohc=zrrQ2oL_wfYAX95lejL&_nc_ht=scontent.fiev22-2.fna&oh=f10936d767a18fb06e997f6b9474b7c4&oe=5EF25A99',
        price: 18
      },
      {
        id: 8,
        name: 'Love of Rose',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/84945315_153706679419186_3366455818269491200_o.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=KprjdnqyK5sAX98d5kQ&_nc_ht=scontent.fiev22-1.fna&oh=f1216511ca819cfda078f5a9cf1846db&oe=5EBBFDCF',
        price: 12
      },
      {
        id: 9,
        name: 'When love gives a hug',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/84064729_154635539326300_507556952750948352_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=1kNg1hZR1-8AX8hbeA_&_nc_ht=scontent.fiev22-1.fna&oh=a59dde725e79eea8b520e485ee186465&oe=5EF9646B',
        price: 16
      },
      {
        id: 17,
        name: 'Pink feathers',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/86462533_158418768947977_9008882375114883072_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=tVRcjjbnZ14AX8QVU8a&_nc_ht=scontent.fiev22-2.fna&oh=1a8b149a0c95a627211d8f9cafad0696&oe=5EC6F9BC',
        price: 200
      },
      {
        id: 17,
        name: 'Rose blooms',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/86970057_159375215518999_5672376437542223872_o.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=cIqB_FWwtAcAX9xCqQn&_nc_ht=scontent.fiev22-1.fna&oh=cf9412f4ada042d958ce08ceb7e59006&oe=5EC4FD70',
        price: 200
      },
      {
        id: 17,
        name: 'Sister colors',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/87150587_160342035422317_5660794697451307008_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=KwqYhEdIuiQAX8AjvUD&_nc_ht=scontent.fiev22-1.fna&oh=aefa852a9ce66aae9ace9d18c5ce6fad&oe=5EC6374D',
        price: 200
      }
    ]
  },
  gelcandles: {
    id: 2,
    title: 'Gel-Candles',
    routeName: 'gel-candles',
    items: [
      {
        id: 10,
        name: 'Bubbles in light',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/81706390_143343947122126_5199480961791688704_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=u1WTPu90d-kAX_hc0Qs&_nc_ht=scontent.fiev22-2.fna&oh=b5dbfd14cd0fa59480a50682bfb6357b&oe=5F0172A8',
        price: 12
      },
      {
        id: 11,
        name: 'Snow in Christmas',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/80681661_143344003788787_5156130495368527872_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=5svjTFau6Z0AX8wZsFp&_nc_ht=scontent.fiev22-1.fna&oh=366e620cb421522704528592100ee27b&oe=5EF27497',
        price: 24
      },
      {
        id: 12,
        name: 'Secrets of the ocean revealed',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/85083464_156259425830578_692218934203514880_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=6CnClvGAVb8AX8m1LyY&_nc_ht=scontent.fiev22-2.fna&oh=38b411f30278f3aab6377b9de3c35630&oe=5EBAAA2C',
        price: 12
      },
      {
        id: 13,
        name: 'Pearls under snow',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/81637381_144001097056411_7615179381782085632_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=BPXb1KcTWoIAX-6Tk41&_nc_ht=scontent.fiev22-1.fna&oh=4078925d698980517509eefa0a42aec5&oe=5EBE6149',
        price: 9
      },
      {
        id: 14,
        name: 'New Year moods',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/81563596_143344037122117_502067374661304320_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=D_r8Y3yAATkAX-NMZ2_&_nc_ht=scontent.fiev22-1.fna&oh=433ac953cd14434bec18b413890f0591&oe=5EC6CDD3',
        price: 24
      },
      {
        id: 15,
        name: 'Champagne in gold',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/80723178_143343977122123_2316274578537578496_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=z69NMKHXHVwAX-TUF1v&_nc_ht=scontent.fiev22-2.fna&oh=9b4f6c6fe1f7ff2d6a9b1458c32d914a&oe=5EC2C61B',
        price: 160
      },
      {
        id: 16,
        name: 'Clear kiss',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/86651966_157813209008533_5015100923467268096_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=8MLlMjeMZMkAX_yzaB9&_nc_ht=scontent.fiev22-2.fna&oh=67d25389807e5b44efa70428d115141b&oe=5EBD88A2',
        price: 190
      }
    ]
  },
  massagecandles: {
    id: 3,
    title: 'Massage-Candles',
    routeName: 'massage-candles',
    items: [
      {
        id: 18,
        name: 'Clarity of love',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/83492802_154024859387368_931297262238171136_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=HGMXHa8M9hQAX8khLgF&_nc_ht=scontent.fiev22-2.fna&oh=c0bdd889e2622d0e1dfcf56fd57c3318&oe=5F01A1A3',
        price: 30
      },
      {
        id: 19,
        name: '5 shades of love',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/84738614_154337339356120_7324046767379447808_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=Rzs2q69Hk_MAX8XhWaW&_nc_ht=scontent.fiev22-1.fna&oh=3f9abf7c718e6dccc5dd66604b95f2eb&oe=5EF94F71',
        price: 90
      },
      {
        id: 20,
        name: 'Gifts of nature',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/85174422_156877245768796_3287311416524013568_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=Cb_5oVQvMkQAX895dpy&_nc_ht=scontent.fiev22-1.fna&oh=bf7d1b67179cc257d7b6d5482a306842&oe=5EB5D9DC',
        price: 90
      },
      {
        id: 21,
        name: 'Yin - Yang',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/84716005_155875775868943_5444380228937842688_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=Zegw_bCjd7AAX8XcYza&_nc_ht=scontent.fiev22-2.fna&oh=c619457b852f8c1a4da163bc6bb2be84&oe=5EF0DC5A',
        price: 165
      },
      {
        id: 22,
        name: 'Lemongrass and vanilla',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/83694853_154914682631719_1287850419061522432_o.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=TbLbzPTfVbAAX_k0Anv&_nc_ht=scontent.fiev22-1.fna&oh=1c02de28e268a69bc5418ffabbea06eb&oe=5EFEB82C',
        price: 185
      }
    ]
  },
  soaps: {
    id: 4,
    title: 'Soaps',
    routeName: 'soaps',
    items: [
      {
        id: 23,
        name: 'Coming soon!',
        imageUrl: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.0-9/85100290_160931925363328_6440395205148409856_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=eHO5R8veQyYAX9RJsD6&_nc_ht=scontent.fiev22-1.fna&oh=224f161d9729f256cf0eff1648e80751&oe=5EFA13E3',
        price: 0
      }
    ]
  },
  bathbombs: {
    id: 5,
    title: 'Bath-Bombs',
    routeName: 'bath-bombs',
    items: [
      {
        id: 30,
        name: 'Love bomb',
        imageUrl: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/83997676_155247985931722_337861575115276288_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=xlBasfF1434AX9gvMns&_nc_ht=scontent.fiev22-2.fna&oh=69914a5cba6697b5bd02553ed2ffb985&oe=5EC334E9',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
