export const languages = [
  { code: 'EN', short: 'EN' },
  { code: 'FR', short: 'FR' },
  { code: '中', short: 'ZH' },
];

export const languageNames = {
  EN: { EN: 'English', FR: 'French', '中': 'Chinese' },
  FR: { EN: 'Anglais', FR: 'Français', '中': 'Chinois' },
  '中': { EN: '英语', FR: '法语', '中': '中文' },
};

export const content = {
  EN: {
    pageTitle: 'ZigZag China — Private Guides in Chengdu & Chongqing', skipToContent: 'Skip to content',
    share: 'Share my journey', shared: 'Journey link copied',
    practicalKicker: 'Good to know', practicalTitle: ['Know before', 'you go.'], practicalCards: [['Getting around', 'From airport transfers to high-speed rail and the metro—what to use, when and how.'], ['Payments & connectivity', 'What works in China, what to set up before arrival and how to stay online.'], ['Everyday etiquette', 'Simple local tips for ordering, getting around and feeling at ease.']],
    nav: ['About Us', 'Destinations', 'Experiences', 'Book Your Trip'],
    kicker: 'Private local guiding · Chengdu + Chongqing',
    title: ['See Chengdu & Chongqing', 'beyond the guidebook.'],
    intro: 'Private, custom days led by a local team—for international travelers who want real neighborhoods, unforgettable food and a pace that feels personal.',
    heroPrimary: 'Check your dates', heroSecondary: 'Explore private experiences',
    explore: 'Discover',
    scroll: 'Scroll to discover',
    teaserKicker: 'Two cities, two distinct rhythms',
    teaserTitle: ['Meet China', 'from the inside.'],
    teaserBody: 'Ease into Chengdu over tea and bold Sichuan flavors, then follow the rivers to Chongqing, where hills, bridges and neon reshape the night. ZigZag China shows you both cities like a local.',
    begin: 'Discover both cities',
    sectionLabel: '01 — Choose your pace',
    city: {
      Chengdu: { eyebrow: 'Giant pandas · Tea houses · Sichuan flavors', title: 'Chengdu', body: 'Tea houses at dawn, lively food streets and a city that knows how to slow down.', action: 'Experience Chengdu' },
      Chongqing: { eyebrow: 'Spicy hotpot · Vibrant nights · Rivers & bridges', title: 'Chongqing', body: 'Neon-lit rivers, hillside streets and views that make the city feel almost impossible.', action: 'See Chongqing after dark' },
    },
    routeKicker: 'Curated for curious travelers', routeTitle: ['Go beyond', 'the highlights.'], viewRoutes: 'Explore all itineraries',
    routes: ['A first taste of Sichuan', 'Chengdu & Chongqing in seven days', 'Chongqing after dark'], routeDetails: ['Ease into Chengdu with neighborhood tea houses, local snacks and a first taste of Sichuan cuisine.', 'A thoughtfully paced week that pairs Chengdu’s relaxed mornings with Chongqing’s electric nights.', 'See Chongqing come alive through riverside viewpoints, hidden lanes, hot pot and neon-lit streets.'],
    searchKicker: 'Find your experience', searchPlaceholder: 'Try “hot pot”, “pandas” or “night views”', noMatches: 'No matching experiences yet.',
    cityComing: (city) => `Our ${city} guide is coming soon.`, routeAdded: (route) => `${route} has been added to your trip.`,
    proofKicker: 'Travel deeper from day one', proofTitle: ['Two cities.', 'One local perspective.'], proofBody: 'ZigZag China turns a list of famous sights into a trip that feels personal—with local context, thoughtful pacing and places worth remembering.', proofStats: [['02', 'remarkable cities'], ['03', 'languages'], ['∞', 'ways to explore']], proofAction: 'Plan with a local',
    experienceKicker: 'Choose your mood', experienceTitle: ['Follow your', 'curiosity.'], filterAll: 'All experiences', experienceCards: [['Tea houses & slow mornings', 'Chengdu', '01'], ['Pandas & bamboo forests', 'Chengdu', '02'], ['Hot pot after dark', 'Chongqing', '03'], ['Chongqing from above', 'Chongqing', '04']], footerText: 'Private, locally guided experiences in Chengdu and Chongqing.', footerAction: 'Plan your visit', waitlistTitle: 'Be first to see our new itineraries.', waitlistBody: 'Leave your email for field-tested routes and honest city notes.', waitlistPlaceholder: 'Email address', waitlistButton: 'Keep me posted', waitlistSuccess: 'You’re on the list. We’ll be in touch.',
    aboutKicker: 'About Us', aboutTitle: ['Travel your way.', 'With a local perspective.'], aboutBody: 'Choose from the essential tastes, rhythms and views of Chengdu and Chongqing, then combine them into a private journey shaped around your pace.', aboutAction: 'Meet the cities', aboutSections: [['About Us', 'ZigZag China takes its name from the winding, layered streets of Chongqing and Chengdu. Rather than rushing between well-known landmarks along a straight-line tourist route, we zigzag through hidden alleyways, old neighborhoods, and local hotspots across these two dynamic cities in southwestern China.'], ['Why Choose Us?', 'Our “zigzag” journey invites you to wander off the standard tourist trail, dive into authentic urban culture, and experience the slow-paced local lifestyle of Chengdu and the dramatic, multi-layered urban charm of Chongqing. We do not merely show you sights—we lead you into the everyday rhythm of the city.'], ['What to Expect?', 'Expect custom-tailored private journeys through Chengdu and Chongqing, with handcrafted cultural, culinary, heritage, and urban landscape experiences for international visitors. Dive into iconic landmarks, hidden neighborhoods, and authentic local life.']],
    journey: 'My trip', emptyJourney: 'Your trip is empty', journeyHint: 'Choose an itinerary to start planning.', clearJourney: 'Clear all', close: 'Close', experienceDetail: 'A local favorite chosen for its atmosphere, story and sense of place—not just the photo.', addExperience: 'Add to my trip',
    a11y: { home: 'ZigZag China home', openMenu: 'Open menu', closeMenu: 'Close menu', mainNav: 'Main navigation', chooseLanguage: 'Choose language', experiences: 'Filter private experiences' },
  },
  FR: {
    pageTitle: 'ZigZag China — Découvrez Chengdu et Chongqing', skipToContent: 'Aller au contenu',
    share: 'Partager mon voyage', shared: 'Lien copié',
    practicalKicker: 'Avant votre arrivée', practicalTitle: ['Soyez prêt', 'avant d’atterrir.'], practicalCards: [['Se déplacer', 'Trains rapides, métro et liaisons aéroport expliqués simplement.'], ['Paiement & mobile', 'Les essentiels pour payer, se connecter et rester joignable.'], ['Le rythme local', 'Quelques repères pour bien manger et explorer la ville.']],
    close: 'Fermer', experienceDetail: 'Une façon soigneusement choisie de découvrir la ville dans ce qu’elle a de plus mémorable.', addExperience: 'Ajouter à mon voyage',
    nav: ['À propos', 'Destinations', 'Expériences', 'Réserver votre voyage'],
    kicker: 'Guide local privé · Chengdu + Chongqing', title: ['Découvrez Chengdu et Chongqing', 'au-delà des guides.'], intro: 'Des journées privées et sur mesure, guidées par une équipe locale—pour les voyageurs internationaux en quête de vrais quartiers, de saveurs inoubliables et d’un rythme personnel.', heroPrimary: 'Vérifier vos dates', heroSecondary: 'Voir les expériences privées', explore: 'Explorer', scroll: 'Défiler pour explorer',
    teaserKicker: 'Un voyage, deux énergies', teaserTitle: ['Laissez la ville', 'vous surprendre.'], teaserBody: 'Commencez par le rythme paisible de Chengdu, puis suivez les rivières vers les nuits électriques de Chongqing. ZigZag China vous ouvre les portes des deux villes.', begin: 'Commencer l’exploration', sectionLabel: '01 — Trouvez votre rythme',
    city: { Chengdu: { eyebrow: 'Pandas géants · maisons de thé · saveurs du Sichuan', title: 'Chengdu', body: 'Matins paisibles, tables épicées et ruelles anciennes.', action: 'Explorer les expériences de Chengdu' }, Chongqing: { eyebrow: 'Fondue épicée · rivières & ponts lumineux', title: 'Chongqing', body: 'Rivières de lumière et ville construite sur plusieurs niveaux.', action: 'Explorer les expériences de Chongqing' } },
    routeKicker: 'Pour les voyageurs curieux', routeTitle: ['Choisissez la', 'route panoramique.'], viewRoutes: 'Voir tous les itinéraires', routes: ['Premiers goûts du Sichuan', 'Deux villes en une semaine', 'Chongqing après la nuit'], searchKicker: 'Rechercher un voyage', searchPlaceholder: 'Essayez « fondue », « pandas » ou « vues nocturnes »', noMatches: 'Aucun résultat pour le moment.', cityComing: (city) => `L’exploration de ${city} arrive bientôt`, routeAdded: (route) => `${route} ajouté à votre voyage`, proofKicker: 'Une meilleure façon d’arriver', proofTitle: ['Deux villes.', 'Une première impression inoubliable.'], proofBody: 'ZigZag China transforme le voyage dans le sud-ouest de la Chine en une histoire que l’on ressent avant de réserver, puis en un itinéraire simple à vivre.', proofStats: [['02', 'villes iconiques'], ['03', 'langues'], ['∞', 'façons de voyager']], proofAction: 'Créer votre voyage', experienceKicker: 'Choisissez votre envie', experienceTitle: ['Voyagez à', 'l’instinct.'], filterAll: 'Toutes les expériences', experienceCards: [['Thé & matins paisibles', 'Chengdu', '01'], ['Pandas & nature', 'Chengdu', '02'], ['Fondue après la nuit', 'Chongqing', '03'], ['La ville vue d’en haut', 'Chongqing', '04']], footerText: 'Un guide attentif de Chengdu et Chongqing pour les voyageurs curieux.', footerAction: 'Commencer à planifier', waitlistTitle: 'Recevez les premiers itinéraires.', waitlistBody: 'Laissez votre email pour recevoir nos parcours testés et nos notes de ville.', waitlistPlaceholder: 'Votre adresse email', waitlistButton: 'Rejoindre la liste', waitlistSuccess: 'Vous êtes inscrit — à très bientôt.', journey: 'Mon voyage', emptyJourney: 'Votre voyage est vide', journeyHint: 'Choisissez un itinéraire pour commencer.', clearJourney: 'Tout effacer', a11y: { home: 'Accueil ZigZag China', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', mainNav: 'Navigation principale', chooseLanguage: 'Choisir la langue', experiences: 'Filtrer les expériences privées' },
  },
  '中': {
    pageTitle: 'ZigZag China — 成都与重庆私人地陪', skipToContent: '跳转到内容',
    share: '分享我的行程', shared: '行程链接已复制',
    practicalKicker: '出发之前', practicalTitle: ['落地之前', '先准备好。'], practicalCards: [['如何出行', '高铁、地铁和机场交通，一次看懂。'], ['支付与网络', '支付方式、网络连接和通讯准备。'], ['本地节奏', '关于吃饭、移动和探索城市的小提示。']],
    close: '关闭', experienceDetail: '精选一处入口，让你从最难忘的角度认识这座城市。', addExperience: '加入我的行程',
    nav: ['关于我们', '目的地', '旅行体验', '预约行程'], kicker: '私人本地向导 · 成都 + 重庆', title: ['走进成都与重庆', '攻略之外的真实日常。'], intro: '由本地团队带领，为国际旅行者定制私人行程：真实的街区、难忘的风味，以及适合你的节奏。', heroPrimary: '查询日期', heroSecondary: '查看私人体验', explore: '探索', scroll: '向下探索', teaserKicker: '一次旅程，两种气质', teaserTitle: ['让这座城市', '带给你惊喜。'], teaserBody: '从成都的悠闲节奏出发，沿着江河一路向东，进入重庆灯火通明的夜晚。ZigZag China 带你打开两座城市的第一扇窗。', begin: '开始探索', sectionLabel: '01 — 找到你的旅行节奏', city: { Chengdu: { eyebrow: '大熊猫 · 茶馆 · 四川风味', title: '成都', body: '慢下来的清晨、热辣的餐桌、古老的街巷和柔软的城市气质。', action: '查看成都体验' }, Chongqing: { eyebrow: '麻辣火锅 · 江河与桥梁', title: '重庆', body: '流动的灯火、层叠的高架，以及一座向山而生的城市。', action: '查看重庆体验' } }, routeKicker: '为好奇的旅行者准备', routeTitle: ['走一条', '风景路线。'], viewRoutes: '查看全部路线', routes: ['第一次品尝四川', '一周双城之旅', '重庆夜游路线'], searchKicker: '搜索旅行内容', searchPlaceholder: '试试“火锅”、“熊猫”或“夜景”', noMatches: '暂时没有匹配内容。', cityComing: (city) => `${city}探索内容即将开放`, routeAdded: (route) => `已将“${route}”加入行程`, proofKicker: '更聪明的抵达方式', proofTitle: ['两座城市。', '一眼难忘的第一印象。'], proofBody: 'ZigZag China 让中国西南之旅在预订前就变得鲜活，并为旅行者提供真正可执行的路线。', proofStats: [['02', '座标性城市'], ['03', '种语言'], ['∞', '种旅行方式']], proofAction: '规划你的旅程', experienceKicker: '选择你的旅行感受', experienceTitle: ['凭直觉', '去旅行。'], filterAll: '全部体验', experienceCards: [['茶与慢清晨', '成都', '01'], ['熊猫与自然', '成都', '02'], ['深夜火锅', '重庆', '03'], ['俯瞰山城灯火', '重庆', '04']], footerText: '为国际旅行者准备的成都与重庆私人定制体验。', footerAction: '开始规划', waitlistTitle: '抢先获得第一批路线。', waitlistBody: '留下邮箱，接收实地测试后的旅行路线和城市笔记。', waitlistPlaceholder: '你的邮箱地址', waitlistButton: '加入名单', waitlistSuccess: '已加入名单，期待和你一起出发。', journey: '我的行程', emptyJourney: '行程还是空的', journeyHint: '选择一条路线，开始规划你的旅行。', clearJourney: '清空全部', a11y: { home: 'ZigZag China 首页', openMenu: '打开菜单', closeMenu: '关闭菜单', mainNav: '主要导航', chooseLanguage: '选择语言', experiences: '筛选私人体验' },
  },
};

content.EN.experienceDetails = ['Start with a quiet tea house, a bowl of something warm and the slower rhythm that makes Chengdu feel like itself.', 'Pair a gentle panda morning with bamboo-covered hills and the neighborhood flavors worth staying for.', 'Follow Chongqing’s riverside lights into a table of bubbling broth, local spice and the city’s after-dark energy.', 'Move between hillside streets, bridges and high viewpoints to see how this mountain city stacks up after sunset.'];
content.FR.experienceDetails = ['Commencez par une maison de thé paisible, quelques bouchées locales et le rythme doux qui fait le charme de Chengdu.', 'Une matinée auprès des pandas, des collines couvertes de bambous et les saveurs de quartier qui méritent le détour.', 'Suivez les lumières des rivières de Chongqing jusqu’à une table de fondue épicée et l’énergie de la ville après la nuit.', 'Passez des ruelles en pente aux ponts et aux belvédères pour comprendre la ville-montagne lorsque les lumières s’allument.'];
content['中'].experienceDetails = ['从一间安静的茶馆、一碗热气腾腾的食物和成都特有的慢节奏开始。', '在熊猫与竹林之间度过一个轻松的早晨，再去寻找值得停留的街区风味。', '沿着重庆江岸的灯火入夜，在翻滚的汤锅、地道的香辣和山城夜色中相遇。', '穿过坡道、桥梁和高处的观景点，看这座山城如何在日落之后层层亮起。'];

content.FR.aboutKicker = 'À propos';
content.FR.aboutTitle = ['Voyagez à votre façon.', 'Avec un regard local.'];
content.FR.aboutBody = 'Choisissez les saveurs, les rythmes et les points de vue essentiels de Chengdu et Chongqing, puis composez un voyage privé à votre rythme.';
content.FR.aboutAction = 'Découvrir les villes';
content.FR.aboutSections = [['À propos', 'ZigZag China tire son nom des rues sinueuses et superposées de Chongqing et Chengdu. Plutôt que de courir entre les monuments connus sur un itinéraire touristique en ligne droite, nous zigzaguons entre ruelles cachées, anciens quartiers et lieux de vie locaux dans ces deux villes dynamiques du sud-ouest de la Chine.'], ['Pourquoi nous choisir ?', 'Notre voyage en zigzag vous invite à sortir des sentiers touristiques, à plonger dans la culture urbaine authentique et à vivre le rythme paisible de Chengdu, ainsi que le charme urbain spectaculaire et à plusieurs niveaux de Chongqing. Nous ne vous montrons pas seulement des sites : nous vous faisons entrer dans le quotidien de la ville.'], ['À quoi s’attendre ?', 'Des voyages privés sur mesure à Chengdu et Chongqing. Des expériences culturelles, culinaires, patrimoniales et urbaines, imaginées pour les visiteurs internationaux. Découvrez les monuments emblématiques, les quartiers cachés et la vie locale authentique.']];
content['中'].aboutKicker = '关于我们';
content['中'].aboutTitle = ['按你的方式', '看见一座城市。'];
content['中'].aboutBody = '从成都与重庆的味道、节奏和风景出发，自由组合基础体验，定制一段适合你的私人旅程。';
content['中'].aboutAction = '认识两座城市';
content['中'].aboutSections = [['关于我们', 'ZigZag China 的名字，来自重庆与成都蜿蜒、层叠的街道。我们不追赶笔直的热门景点路线，而是穿行于隐秘的小巷、老街区和本地生活热点，探索这两座充满活力的中国西南城市。'], ['为什么选择我们？', '我们的“之”字形旅程邀请你离开标准游客路线，深入真实的城市文化，感受成都从容缓慢的本地生活，以及重庆戏剧性、多层次的城市魅力。我们不只是带你看景点，更带你走进城市的日常节奏。'], ['你可以期待什么？', '成都与重庆的私人定制旅程。为国际旅行者精心设计文化、美食、历史和城市景观体验。深入标志性地标、隐秘街区与真实的本地生活。']];

content.FR.routeDetails = ['Une première approche entre maisons de thé, cuisine de rue et saveurs de Chengdu.', 'Un rythme équilibré sur sept jours, des matins de Chengdu aux nuits de Chongqing.', 'Un itinéraire nocturne entre vues sur les rivières, fondue et lumières de la ville-montagne.'];
content['中'].routeDetails = ['从茶馆、小吃和成都的第一口味道开始，轻松进入旅程。', '用七天平衡成都的清晨与重庆的夜晚，体验一趟双城旅程。', '沿着江岸夜景、火锅和山城灯火，走进重庆的夜晚。'];
content.EN.booking = { kicker: 'Private local guiding', title: ['See more than', 'the guidebook.'], body: 'Tell us when you’re visiting and what kind of day you would enjoy. We’ll confirm availability and shape a private experience around you.', action: 'Plan a day with us', selectedLabel: 'Selected experience', clearSelection: 'Remove', paymentLabel: 'Payment timing', payment: 'No payment today. Secure PayPal payment is requested only after availability, itinerary and price are confirmed.' };
content.FR.booking = { kicker: 'Guide privé', title: ['Découvrez la ville', 'avec une vraie connaisseuse.'], body: 'Indiquez vos dates et le type de journée souhaité. Les informations de paiement seront transmises après confirmation des disponibilités.', action: 'Demander une journée privée', selectedLabel: 'Expérience choisie', clearSelection: 'Retirer', paymentLabel: 'Moment du paiement', payment: 'Aucun paiement aujourd’hui. Le paiement sécurisé par PayPal est demandé uniquement après confirmation des disponibilités, de l’itinéraire et du prix.' };
content['中'].booking = { kicker: '私人地陪', title: ['跟熟悉这座城市的人', '一起出发。'], body: '告诉我们你的日期和想要的旅行方式。确认时间后，我们会私下提供支付信息。', action: '预约私人地陪', selectedLabel: '已选体验', clearSelection: '移除', paymentLabel: '付款时间', payment: '今天无需付款。只有在确认日期、行程和价格后，才会发起安全的 PayPal 付款。' };

content.EN.credentials = {
  pageTitle: 'Business Credentials | ZigZag China',
  kicker: 'Business credentials',
  title: ['Licensed in China.', 'Guided with local care.'],
  intro: 'ZigZag China is operated by a registered Chongqing travel company licensed for domestic and inbound tourism in China.',
  licenseType: 'PRC Travel Agency License',
  detailsLabel: 'Travel agency licence details',
  operatorLabel: 'Legal operator',
  permitNumberLabel: 'License number',
  scopeLabel: 'Licensed scope',
  representativeLabel: 'Legal representative',
  scope: 'Domestic tourism and inbound tourism',
  privacyKicker: 'Document privacy',
  privacyTitle: 'Essential details, clearly presented.',
  privacyBody: 'To reduce misuse of official documents, we publish the information needed to identify the licensed operator without offering a full-resolution certificate, QR code, investor details or a full registered address for download.',
  verificationLink: 'Official verification portal',
  credentialsLink: 'Business Credentials',
  footerLicence: 'PRC Travel Agency License L-CQ-101179 · Domestic & Inbound Tourism',
};

content.FR.credentials = {
  pageTitle: 'Accréditations professionnelles | ZigZag China',
  kicker: 'Accréditations professionnelles',
  title: ['Agence agréée en Chine.', 'Un accueil profondément local.'],
  intro: 'ZigZag China est exploité par une agence de voyages enregistrée à Chongqing et autorisée à organiser du tourisme national et réceptif en Chine.',
  licenseType: 'Licence chinoise d’agence de voyages',
  detailsLabel: 'Informations sur la licence',
  operatorLabel: 'Exploitant légal',
  permitNumberLabel: 'Numéro de licence',
  scopeLabel: 'Activités autorisées',
  representativeLabel: 'Représentante légale',
  scope: 'Tourisme national et tourisme réceptif',
  privacyKicker: 'Protection du document',
  privacyTitle: 'Les informations essentielles, sans données superflues.',
  privacyBody: 'Afin de limiter tout usage abusif, nous publions les informations nécessaires pour identifier l’agence agréée, sans proposer au téléchargement le certificat en haute définition, son code QR, les informations sur les investisseurs ni l’adresse complète du siège.',
  verificationLink: 'Portail officiel de vérification',
  credentialsLink: 'Accréditations',
  footerLicence: 'Licence d’agence de voyages L-CQ-101179 · Tourisme national et réceptif',
};

content['中'].credentials = {
  pageTitle: '经营资质 | ZigZag China',
  kicker: '经营资质',
  title: ['依法经营。', '安心认识中国西南。'],
  intro: 'ZigZag China 由重庆注册旅行社运营，依法经营境内旅游与入境旅游业务。',
  licenseType: '中华人民共和国旅行社业务经营许可证',
  detailsLabel: '旅行社经营许可信息',
  operatorLabel: '法定经营主体',
  permitNumberLabel: '许可证编号',
  scopeLabel: '许可经营范围',
  representativeLabel: '法定代表人',
  scope: '境内旅游业务、入境旅游业务',
  privacyKicker: '证件保护',
  privacyTitle: '只公开核验所需的信息。',
  privacyBody: '为降低官方证件被盗用的风险，本页仅公开识别持证经营主体所需的信息，不提供高清许可证、二维码、投资人信息或完整注册地址下载。',
  verificationLink: '前往官方核验平台',
  credentialsLink: '查看经营资质',
  footerLicence: '旅行社业务经营许可证 L-CQ-101179 · 境内旅游与入境旅游',
};
