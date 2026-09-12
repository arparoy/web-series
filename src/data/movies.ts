export interface DownloadLink {
  label: string;
  url: string;
}

export interface Movie {
  slug: string;
  title: string;
  year: string;
  rating: string | null;
  duration: string;
  quality: string;
  genres: string[];
  description: string;
  cast: string[];
  director?: string;
  language?: string;
  fileSize?: string;
  platform?: string;
  coverImage: string;
  screenshots: string[];
  downloadLinks: DownloadLink[];
  sourceUrl: string;
  trailerUrl?: string;
  featured?: boolean;
  trending?: boolean;
}

const SB = 'https://streambox-alpha.vercel.app/movies';
const GH = 'https://raw.githubusercontent.com/arparoy/storeimg/refs/heads/main/public/movies';

export const movies: Movie[] = [
  {
    slug: 'arpa-roy',
    title: 'Arpa Roy',
    year: '2026',
    rating: '9.9',
    duration: '1.5k+ Pictures & Videos',
    quality: '1080p',
    genres: ['Hot', 'Romantic', 'Action'],
    description:
      'Arpa Roy is a stunning model based in Poland, known for her modern style, captivating beauty, and confident presence. With her striking features, elegant charm, and glamorous personality, she has built a strong reputation for creating bold and visually captivating content. Her attractive figure, graceful expressions, and versatile modeling style allow her to stand out across a wide range of creative projects. Every gallery showcases a unique blend of confidence, fashion, and artistic expression, reflecting her dedication to delivering high-quality visual content.',
    cast: ['Arpa Roy'],
    director: 'Arpa Roy',
    fileSize: '1.5 GB',
    coverImage: `${SB}/arparoy.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Google Photos 1', url: 'https://photos.app.goo.gl/58Uhkd1dQih1nBbq7' },
      { label: 'Google Drive', url: 'https://drive.google.com/drive/folders/1-UfHRkgA0m27qQoTtk25UE-t4IGoVtIR' },
      { label: 'Mega', url: 'https://mega.nz/folder/4tRwCbiR#tesGos_lBQYgzG45zJqN5g' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/arpa-roy',
    trailerUrl: 'https://www.youtube.com/watch?v=kBnoNBWFWvM',
    featured: true,
    trending: true,
  },
  {
    slug: 'palang-tod-zaroorat',
    title: 'Palang Tod: Zaroorat',
    year: '2022',
    rating: null,
    duration: 'S1 & S2',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Romance', 'Erotic'],
    platform: 'Ullu Originals',
    description:
      'Kamlesh is paralyzed and cared for by Savita. Their relationship takes a bold turn, leading to emotional and physical complexities. In Season 2, things become more intense when Umesh discovers their secret and starts blackmailing Savita, creating tension and drama.',
    cast: ['Sharanya Jit Kaur', 'Neeraj Singh Rajput', 'Ravi Mishra', 'Vaidehee Bhave', 'Bhavesh Kantaria', 'Gaurav Raaj'],
    language: 'Hindi',
    fileSize: 'Various',
    coverImage: 'https://palang-tod-zaroorat-ten.vercel.app/screenshots/1.jpg',
    screenshots: Array.from({ length: 70 }, (_, i) => `https://palang-tod-zaroorat-ten.vercel.app/screenshots/${i + 1}.jpg`),
    downloadLinks: [
      { label: 'Download', url: 'https://palang-tod-zaroorat-ten.vercel.app' },
      { label: 'Backup Download', url: 'https://palang-tod-zaroorat-ten.vercel.app' },
    ],
    sourceUrl: 'https://palang-tod-zaroorat-ten.vercel.app',
    trending: true,
  },
  {
    slug: 'charmsukh-jane-anjane-mein',
    title: 'Charmsukh – Jane Anjane Mein',
    year: '2021',
    rating: null,
    duration: 'S1 – S7',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Romance', 'Erotic'],
    platform: 'Ullu Originals',
    description:
      'A story filled with unexpected twists, relationships, and secrets. The Charmsukh series follows the complex dynamics of a household where desires and temptations lead to surprising consequences across seven seasons.',
    cast: [],
    language: 'Hindi',
    fileSize: 'Various',
    coverImage: 'https://charmsukh-jane-anjane-mein.vercel.app/1.jpg',
    screenshots: Array.from({ length: 7 }, (_, i) => `https://charmsukh-jane-anjane-mein.vercel.app/${i + 1}.jpg`),
    downloadLinks: [
      { label: 'Download Full Series (S1-S7)', url: 'https://charmsukh-jane-anjane-mein.vercel.app' },
    ],
    sourceUrl: 'https://charmsukh-jane-anjane-mein.vercel.app',
    trending: true,
  },
  {
    slug: 'riti-riwaj-mann-marzi',
    title: 'Riti Riwaj – Mann Marzi',
    year: '2021',
    rating: null,
    duration: 'Movie',
    quality: '1080p',
    genres: ['Drama', 'Romance'],
    platform: 'Ullu Originals',
    description:
      'A drama-romance film exploring traditional customs and personal desires. The story delves into the conflict between societal expectations and individual choices.',
    cast: ['Priya Mishra', 'Gehana Vasisth'],
    language: 'Hindi',
    fileSize: 'Various',
    coverImage: 'https://riti-riwaj-mann-marzi.vercel.app/1.jpg',
    screenshots: Array.from({ length: 28 }, (_, i) => `https://riti-riwaj-mann-marzi.vercel.app/${i + 1}.jpg`),
    downloadLinks: [
      { label: 'Download Full Movie', url: 'https://riti-riwaj-mann-marzi.vercel.app' },
    ],
    sourceUrl: 'https://riti-riwaj-mann-marzi.vercel.app',
  },
  {
    slug: 'wajah-tum-ho',
    title: 'Wajah Tum Ho',
    year: '2016',
    rating: '4.4',
    duration: '2h 16m',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Mystery', 'Romance'],
    description:
      'A mystery thriller revolving around a television channel that becomes the center of a series of live-streamed murders. As the investigation unfolds, hidden secrets, betrayals, and shocking connections come to light, leading to an intense battle to uncover the mastermind.',
    cast: ['Sharman Joshi', 'Sana Khaan', 'Gurmeet Choudhary'],
    director: 'Vishal Pandya',
    language: 'Hindi',
    fileSize: '3.8 GB',
    coverImage: `${SB}/wajah-tum-ho-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download 1080p WEB-DL', url: 'https://streambox-alpha.vercel.app/movie/wajah-tum-ho' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/wajah-tum-ho',
    trailerUrl: 'https://www.youtube.com/watch?v=sBueTW-W7Qc',
    trending: true,
  },
  {
    slug: 'chawl-house-season-1',
    title: 'Chawl House Season 1',
    year: '2022',
    rating: null,
    duration: 'Season 1',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Romance'],
    description:
      'Set in a crowded Mumbai chawl, Chawl House follows the lives of a joint family where privacy is a luxury. As a newly married couple struggles to find personal space, unexpected attractions, family dynamics, and hidden desires create a series of dramatic and emotional moments.',
    cast: ['Sneha Paul', 'Dakshith Kumar', 'Esha Tewari', 'Jyostna Trivedi', 'Meenu Sharma', 'Ravi Parmar', 'Nikhil Khera', 'Dheeresh Mishra'],
    language: 'Hindi',
    fileSize: 'Various',
    coverImage: `${SB}/chawl-house-season-1-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/chawl-house-season-1' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/chawl-house-season-1',
  },
  {
    slug: 'red-light',
    title: 'Red Light',
    year: '2024',
    rating: null,
    duration: 'Season 1',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Thriller'],
    platform: 'Ullu Originals',
    description:
      'When Prabha follows her husband to Rajkot, she unknowingly enters a brothel, setting off a dangerous chain of events. As Rahul races against time to rescue her, hidden truths, emotional struggles, and life-threatening challenges unfold in this suspense-filled ULLU drama.',
    cast: ['Aayat Khan', 'Alina Sen', 'Jagjeet Chachal'],
    director: 'Unknown',
    language: 'Hindi',
    coverImage: `${GH}/red-light.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/red-light' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/red-light',
  },
  {
    slug: 'wine',
    title: 'Wine',
    year: '2026',
    rating: null,
    duration: 'Season 1',
    quality: '1080p WEB-DL',
    genres: ['18+', 'Drama', 'Romance'],
    description:
      'When Ritika collides with a man completely opposite to her nature, their initial hatred slowly turns into a dangerous attraction. As emotions intensify, she begins questioning her life and relationships, but is he really who he claims to be?',
    cast: ['Navina Bole', 'Gautam Handa', 'Nishad Vaidya', 'Mahi Khan'],
    director: 'Unknown',
    language: 'Hindi',
    coverImage: `${GH}/wine.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/wine' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/wine',
  },
  {
    slug: 'tu-dekh-meri-photo',
    title: 'Tu Dekh Meri Photo',
    year: '2025',
    rating: null,
    duration: 'Season 1',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Romance'],
    description:
      "Nandini's marriage is arranged without seeing the groom. As secrets, lies, and betrayal unfold, she becomes trapped in a web of deception before her wedding. Will she uncover the truth before it's too late?",
    cast: ['Puja Rao', 'Pihu Singh', 'Anita Jaiswal', 'Abhinay Singh', 'Ravi Mishra', 'Manish Mishra'],
    director: 'N/A',
    language: 'Hindi',
    coverImage: `${SB}/tu-dekh-meri-photo-s1-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download 1080p', url: 'https://streambox-alpha.vercel.app/movie/tu-dekh-meri-photo-s1' },
      { label: 'Mega Drive', url: 'https://streambox-alpha.vercel.app/movie/tu-dekh-meri-photo-s1' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/tu-dekh-meri-photo-s1',
  },
  {
    slug: 'banni-ka-kissa',
    title: 'Banni Ka Kissa',
    year: '2022',
    rating: null,
    duration: 'Web Series',
    quality: '720p WEB-DL',
    genres: ['Drama', 'Romance'],
    description:
      'The eldest of three brothers marries a much younger woman. When he fails to satisfy her, she turns her attention toward his younger brothers, putting the family\'s relationships to the test.',
    cast: ['Purnima Jain'],
    director: 'N/A',
    language: 'Hindi',
    coverImage: `${SB}/banni-ka-kissa-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/banni-ka-kissa' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/banni-ka-kissa',
  },
  {
    slug: 'room-service',
    title: 'Room Service',
    year: '2023',
    rating: null,
    duration: 'Web Series',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Romance'],
    description:
      'A Hindi drama-romance web series featuring intertwined relationships, unexpected encounters, and emotional twists.',
    cast: ['Mahi Khan', 'Priyanka Upadhayay', 'Zoya', 'Sarvesh'],
    director: 'N/A',
    language: 'Hindi',
    coverImage: `${SB}/room-service-kundi-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/room-service-kundi' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/room-service-kundi',
  },
  {
    slug: 'akeli-season-1',
    title: 'Akeli Season 1',
    year: '2023',
    rating: null,
    duration: 'Season 1',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Romance'],
    description:
      'A young woman living alone develops a romantic relationship with a man she meets. As their bond deepens, the story explores how their relationship changes over time.',
    cast: [],
    language: 'Hindi',
    coverImage: `${SB}/akeli-season-1-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/akeli-season-1' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/akeli-season-1',
  },
  {
    slug: 'vashikaran-season-1',
    title: 'Vashikaran Season 1',
    year: '2024',
    rating: null,
    duration: 'Season 1',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Supernatural'],
    description:
      'A married woman seeks help from a spiritual healer to improve her troubled marriage. After using a mystical remedy, unexpected consequences create new complications within the family.',
    cast: [],
    language: 'Hindi',
    coverImage: `${SB}/vashikaran-season-1-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/vashikaran-season-1' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/vashikaran-season-1',
  },
  {
    slug: 'langot-season-1',
    title: 'Langot Season 1',
    year: '2023',
    rating: null,
    duration: 'Season 1',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Romance'],
    description:
      'An elder brother leaves home for work and entrusts family responsibilities to his younger brother, leading to unexpected emotional conflicts and complicated relationships.',
    cast: [],
    language: 'Hindi',
    coverImage: `${SB}/langot-season-1-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/langot-season-1' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/langot-season-1',
  },
  {
    slug: 'lovely-ghosh-call-me-sherni',
    title: 'Lovely Ghosh (Call Me Sherni)',
    year: '2026',
    rating: null,
    duration: 'Collection',
    quality: '1080p',
    genres: ['Collection'],
    description:
      'A curated collection featuring publicly shared photos, reels, videos, and other social media content associated with Lovely Ghosh (Call Me Sherni). This archive brings together highlights from her online presence in one place.',
    cast: ['Lovely Ghosh'],
    coverImage: `${GH}/lovely-ghosh-call-me-sherni.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/lovely-ghosh-call-me-sherni' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/lovely-ghosh-call-me-sherni',
  },
  {
    slug: 'meetii-kalher',
    title: 'Meetii Kalher',
    year: '2026',
    rating: null,
    duration: 'Collection',
    quality: '1080p',
    genres: ['Collection'],
    description:
      "A curated collection featuring Meetii Kalher's premium content, including photos, videos, albums, and social media media archives gathered into a single collection. Step into a curated, intimate experience — exclusive videos, artistic photography, and premium content crafted for true fans.",
    cast: ['Meetii Kalher'],
    coverImage: `${GH}/meetii-kalher.jpg`,
    screenshots: [
      'https://meetiikalhercollection.vercel.app/Meetii%20Kalher%20Demo%201.jpeg',
      'https://meetiikalhercollection.vercel.app/Meetii%20Kalher%20Demo%202.jpeg',
      'https://meetiikalhercollection.vercel.app/Meetii%20Kalher%20Demo%203.jpg',
    ],
    downloadLinks: [
      { label: 'Download Pictures', url: 'https://drive.google.com/drive/folders/1-BqnjOM2k0mD7ze_3pg1Iih71qV4GTp3' },
      { label: 'Download Videos', url: 'https://drive.google.com/drive/folders/1-Byk-qOEXmQkFxys84xsb9xAztCQiZ0Y' },
      { label: 'Download Pictures & Video Archive', url: 'https://drive.google.com/file/d/1UTZdX0wBZOMC1GaG0mGQkQDWnAd40NAX/view?usp=drivesdk' },
      { label: 'Mega Download Archive', url: 'https://mega.nz/folder/4tRwCbiR#tesGos_lBQYgzG45zJqN5g' },
      { label: 'View Pictures', url: 'https://photos.app.goo.gl/58Uhkd1dQih1nBbq7' },
      { label: 'View Videos', url: 'https://photos.app.goo.gl/FpSkcoLHXuPkYdiD9' },
    ],
    sourceUrl: 'https://meetiikalhercollection.vercel.app',
    trending: true,
  },
  {
    slug: 'hiral-radadiya',
    title: 'Hiral Radadiya',
    year: '2026',
    rating: null,
    duration: 'Collection',
    quality: '1080p WEB-DL',
    genres: ['Collection', 'Drama', 'Romance', 'Thriller'],
    description:
      'Complete Hiral Radadiya Web Series Collection featuring her most popular web series, short films, and exclusive releases in 1080p WEB-DL quality. Browse the complete collection with direct download buttons for each title.',
    cast: ['Hiral Radadiya'],
    director: 'Various',
    coverImage: `${GH}/hiral-radadiya.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/hiral-radadiya' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/hiral-radadiya',
  },
  {
    slug: 'manvi-chugh',
    title: 'Manvi Chugh',
    year: '2026',
    rating: null,
    duration: 'Collection',
    quality: '1080p WEB-DL',
    genres: ['Collection'],
    description:
      'Complete Manvi Chugh Web Series Collection featuring her popular web series and original releases in 1080p WEB-DL quality. Browse the complete collection with direct Google Drive download buttons for every title.',
    cast: ['Manvi Chugh'],
    coverImage: `${GH}/manvi-chugh.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/manvi-chugh' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/manvi-chugh',
  },
  {
    slug: 'simran-kaur',
    title: 'Simran Kaur',
    year: '2026',
    rating: null,
    duration: 'Collection',
    quality: 'HD',
    genres: ['Collection'],
    description:
      "A collection featuring Simran Kaur's public photos, videos, and social media content in high quality. Browse the complete collection with direct download links.",
    cast: ['Simran Kaur'],
    coverImage: `${GH}/simran-kaur.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/simran-kaur' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/simran-kaur',
  },
  {
    slug: 'sassy-poonam',
    title: 'Sassy Poonam',
    year: '2026',
    rating: null,
    duration: 'Collection',
    quality: 'HD',
    genres: ['Collection'],
    description:
      "A collection featuring Sassy Poonam's public photos, videos, reels, and social media content in high quality. Browse the complete collection with direct download links.",
    cast: ['Sassy Poonam'],
    coverImage: `${GH}/sassy-poonam.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/sassy-poonam' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/sassy-poonam',
  },
  {
    slug: 'adria-rae',
    title: 'Adria Rae',
    year: '2025',
    rating: null,
    duration: 'Various',
    quality: '1080p WEB-DL',
    genres: ['Collection'],
    description: 'Collection of Adria Rae videos available in 1080p Full HD quality.',
    cast: ['Adria Rae'],
    coverImage: `${GH}/adria-rae.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/adria-rae' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/adria-rae',
  },
  {
    slug: 'lilly-bell',
    title: 'Lilly Bell',
    year: '2025',
    rating: null,
    duration: 'Various',
    quality: '1080p WEB-DL',
    genres: ['Collection'],
    description: 'Collection of Lilly Bell videos available in 1080p Full HD quality.',
    cast: ['Lilly Bell'],
    coverImage: `${GH}/lilly-bell.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/lilly-bell' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/lilly-bell',
  },
  {
    slug: 'eliza-ibarra',
    title: 'Eliza Ibarra',
    year: '2025',
    rating: null,
    duration: 'Various',
    quality: '1080p WEB-DL',
    genres: ['Collection'],
    description: 'Collection of Eliza Ibarra videos available in 1080p Full HD quality.',
    cast: ['Eliza Ibarra'],
    coverImage: `${GH}/eliza-ibarra.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/eliza-ibarra' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/eliza-ibarra',
  },
  {
    slug: 'mia-khalifa',
    title: 'Mia Khalifa',
    year: '2025',
    rating: null,
    duration: 'Various',
    quality: '1080p WEB-DL',
    genres: ['Collection'],
    description: 'Collection of Mia Khalifa videos available in 1080p Full HD quality.',
    cast: ['Mia Khalifa'],
    coverImage: `${GH}/mia-khalifa.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/mia-khalifa' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/mia-khalifa',
  },
  {
    slug: 'kenzie-madison',
    title: 'Kenzie Madison',
    year: '2025',
    rating: null,
    duration: 'Various',
    quality: '1080p WEB-DL',
    genres: ['Collection'],
    description: 'Collection of Kenzie Madison videos available in 1080p Full HD quality.',
    cast: ['Kenzie Madison'],
    coverImage: `${GH}/kenzie-madison.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/kenzie-madison' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/kenzie-madison',
  },
  {
    slug: 'bunny-colby',
    title: 'Bunny Colby',
    year: '2025',
    rating: null,
    duration: 'Various',
    quality: '1080p WEB-DL',
    genres: ['Collection'],
    description: 'Collection of Bunny Colby videos available in 1080p Full HD quality.',
    cast: ['Bunny Colby'],
    coverImage: `${GH}/bunny-colby.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/bunny-colby' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/bunny-colby',
  },
  {
    slug: '20-minutes-video',
    title: '20 Minutes Video',
    year: '2024',
    rating: '8.0',
    duration: '20m',
    quality: '1080p',
    genres: ['Short'],
    description: 'In this 20-minute video featuring a person in a floral black outfit seated on a couch — a husband and wife job video.',
    cast: [],
    coverImage: `${GH}/husband_want_me.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download', url: 'https://streambox-alpha.vercel.app/movie/must-watch-husband-did-his-job' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/must-watch-husband-did-his-job',
  },
  {
    slug: 'telephone-booth-ullu-short-film',
    title: 'Telephone Booth – ULLU Short Film',
    year: '2022',
    rating: null,
    duration: 'Short Film',
    quality: '1080p WEB-DL',
    genres: ['Drama', 'Short'],
    platform: 'Ullu Originals',
    description:
      'A couple in a long-distance relationship stays connected through a telephone booth, but when their private conversations are exposed, they become victims of fraud and must find a way out of the situation.',
    cast: [],
    language: 'Hindi',
    coverImage: `${SB}/telephone-booth-cover.jpg`,
    screenshots: [],
    downloadLinks: [
      { label: 'Download 1080p WEB-DL', url: 'https://streambox-alpha.vercel.app/movie/telephone-booth-ullu-short-film' },
    ],
    sourceUrl: 'https://streambox-alpha.vercel.app/movie/telephone-booth-ullu-short-film',
  },
];

export function getMovieBySlug(slug: string): Movie | undefined {
  return movies.find((m) => m.slug === slug);
}

export function getRelatedMovies(slug: string, limit = 6): Movie[] {
  const movie = getMovieBySlug(slug);
  if (!movie) return movies.slice(0, limit);
  return movies
    .filter((m) => m.slug !== slug)
    .sort((a, b) => {
      const aShared = a.genres.filter((g) => movie.genres.includes(g)).length;
      const bShared = b.genres.filter((g) => movie.genres.includes(g)).length;
      return bShared - aShared;
    })
    .slice(0, limit);
}

export const allGenres = Array.from(new Set(movies.flatMap((m) => m.genres))).sort();
