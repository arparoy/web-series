export interface WebLink {
  name: string;
  url: string;
  description: string;
}

export interface WebLinkCategory {
  id: string;
  title: string;
  icon: string;
  links: WebLink[];
}

export const webLinkCategories: WebLinkCategory[] = [
  {
    id: 'series-download',
    title: 'Best for Series Download',
    icon: 'download',
    links: [
      { name: 'StreamBox', url: 'https://streambox-alpha.vercel.app', description: 'Main hub — 100+ web series & movies in 1080p HD' },
      { name: 'Palang Tod: Zaroorat', url: 'https://palang-tod-zaroorat-ten.vercel.app', description: 'Ullu Originals — S1 & S2, 1080p WEB-DL with screenshots' },
      { name: 'Charmsukh – Jane Anjane Mein', url: 'https://charmsukh-jane-anjane-mein.vercel.app', description: 'Ullu Originals — Full series S1-S7 download' },
      { name: 'Riti Riwaj – Mann Marzi', url: 'https://riti-riwaj-mann-marzi.vercel.app', description: 'Ullu Originals — 1080p, Priya Mishra, Gehana Vasisth' },
      { name: 'Meetii Kalher Collection', url: 'https://meetiikalhercollection.vercel.app', description: 'Exclusive collection — Google Drive & Mega downloads' },
      { name: 'Arpa Roy (Google Sites)', url: 'https://sites.google.com/view/arpa-roy/home', description: 'Arpa Roy OnlyFans collection — Google Drive video archive' },
      { name: 'Manvi Chugh Web Series', url: 'https://manvichughwebseries.blogspot.com', description: 'Manvi Chugh web series blog' },
      { name: 'Jaye Summers', url: 'https://jayesummers.blogspot.com', description: 'Jaye Summers content blog' },
      { name: 'UKVAU', url: 'https://ukvau.blogspot.com', description: 'Web series collection blog' },
      { name: 'Story Watch Flix', url: 'https://storywatchflix.blogspot.com', description: 'Story watch flix blog' },
      { name: 'Aylx Star Story', url: 'https://aylxstarstory.blogspot.com', description: 'Aylx Star story blog' },
      { name: 'World Actress Flix', url: 'https://worldactressflix.blogspot.com', description: 'World actress flix blog' },
      { name: 'Arpa Roy Blog', url: 'https://arparoy.blogspot.com', description: 'Arpa Roy official blog' },
      { name: 'Arpa Roy Collection', url: 'https://arparoycollection.blogspot.com', description: 'Arpa Roy collection blog' },
      { name: 'Nikita Vai Reels', url: 'https://nikitavaidreels.blogspot.com', description: 'Nikita Vai reels blog' },
    ],
  },
  {
    id: 'read-story',
    title: 'Read Story',
    icon: 'book',
    links: [
      { name: 'Storyline Store Book', url: 'https://storylinestorebook.blogspot.com', description: 'Storyline collection blog' },
      { name: 'Eliza Ibarra Story', url: 'https://elizaibarrastory.blogspot.com', description: 'Eliza Ibarra story blog' },
      { name: 'Story Flix Tam', url: 'https://storyflixtam.blogspot.com', description: 'Story flix tam blog' },
      { name: 'Story Time Arpa', url: 'https://storytimearpa.blogspot.com', description: 'Story time Arpa blog' },
      { name: 'Pratiksha Story', url: 'https://pratikshastory.blogspot.com', description: 'Pratiksha story blog' },
      { name: 'Rekha Mona Sarkar', url: 'https://rekhamonasarkar.blogspot.com', description: 'Rekha Mona Sarkar story blog' },
      { name: 'Stories Loves 69', url: 'https://storiesloves69.blogspot.com', description: 'Stories loves blog' },
      { name: 'Flex Story Blog', url: 'https://flexstoryblog.blogspot.com', description: 'Flex story blog' },
    ],
  },
  {
    id: 'random-web-visit',
    title: 'Random Web Visit',
    icon: 'shuffle',
    links: [
      { name: 'Tix Webs', url: 'https://tixwebs.blogspot.com', description: 'Tix webs blog — random content' },
      { name: 'Insta Reels Girl', url: 'https://instareelsgirl.blogspot.com', description: 'Insta reels girl blog — random content' },
    ],
  },
];
