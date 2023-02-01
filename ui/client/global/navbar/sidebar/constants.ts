export const links = [
  {
    main: {
      href: '/hakkinda',
      title: 'Hakkında',
    },
    links: [
      {
        href: '/hakkinda/kulupler',
        title: 'Kulüpler',
      },
      {
        href: '/hakkinda/ogretmenler',
        title: 'Öğretmenler',
      },
      {
        href: '/hakkinda/yonetim',
        title: 'Yönetim',
      },
    ],
  },
  {
    main: {
      href: '/kesfet/kisaca',
      title: 'Keşfet',
    },
    links: [
      {
        href: '/kesfet/kisaca',
        title: 'Kısaca Haydarpaşa',
      },
      {
        href: '/kesfet/fotograflarla',
        title: 'Fotoğraflarla Haydarpaşa',
      },
      {
        href: '/kesfet/sayilarla',
        title: 'Sayılarla Haydarpaşa',
      },
      {
        href: '/kesfet/sozlerle',
        title: 'Sözlerle Haydarpaşa',
      },
    ],
  },
  {
    main: {
      href: '/Akademik',
      title: 'Akademik',
    },
    links: [
      {
        href: '/akademik/cizerge',
        title: 'Ders Zaman Çizergesi',
      },
      {
        href: '/akademik/takvim',
        title: 'Akademik Takvim',
      },
      {
        href: '/akademik/haberler',
        title: 'Haberler',
      },
      {
        href: '/kesfet/sozlerle',
        title: 'Sözlerle Haydarpaşa',
      },
    ],
  },
];

export const sidebarVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      type: 'tween',
    },
  },
};
