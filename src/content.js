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
    nav: ['Destinations', 'Experiences', 'Book a guide'],
    kicker: 'China, beyond the obvious',
    title: ['Explore', 'Western China'],
    intro: 'Two cities. One unforgettable journey.',
    explore: 'Discover',
    scroll: 'Scroll to discover',
    teaserKicker: 'Two cities, two distinct rhythms',
    teaserTitle: ['Meet China', 'from the inside.'],
    teaserBody: 'Ease into Chengdu over tea and bold Sichuan flavours, then follow the rivers to Chongqing, where hills, bridges and neon reshape the night. ZigZag China shows you both cities like a local.',
    begin: 'Discover both cities',
    sectionLabel: '01 — Choose your pace',
    city: {
      Chengdu: { eyebrow: 'Tea houses · Sichuan flavours · giant pandas', title: 'Chengdu', body: 'Tea houses at dawn, lively food streets and a city that knows how to slow down.', action: 'Experience Chengdu' },
      Chongqing: { eyebrow: 'Neon nights · two rivers · hillside streets', title: 'Chongqing', body: 'Neon-lit rivers, hillside streets and views that make the city feel almost impossible.', action: 'See Chongqing after dark' },
    },
    routeKicker: 'Curated for curious travellers', routeTitle: ['Go beyond', 'the highlights.'], viewRoutes: 'Explore all itineraries',
    routes: ['A first taste of Sichuan', 'Chengdu & Chongqing in seven days', 'Chongqing after dark'], routeDetails: ['Ease into Chengdu with neighbourhood tea houses, local snacks and a first taste of Sichuan cuisine.', 'A thoughtfully paced week that pairs Chengdu’s relaxed mornings with Chongqing’s electric nights.', 'See Chongqing come alive through riverside viewpoints, hidden lanes, hot pot and neon-lit streets.'],
    searchKicker: 'Find your experience', searchPlaceholder: 'Try “hot pot”, “pandas” or “night views”', noMatches: 'No matching experiences yet.',
    cityComing: (city) => `Our ${city} guide is coming soon.`, routeAdded: (route) => `${route} has been added to your trip.`,
    proofKicker: 'Travel deeper from day one', proofTitle: ['Two cities.', 'One local perspective.'], proofBody: 'ZigZag China turns a list of famous sights into a trip that feels personal—with local context, thoughtful pacing and places worth remembering.', proofStats: [['02', 'remarkable cities'], ['03', 'languages'], ['∞', 'ways to explore']], proofAction: 'Plan with a local',
    experienceKicker: 'Choose your mood', experienceTitle: ['Follow your', 'curiosity.'], experienceCards: [['Tea houses & slow mornings', 'Chengdu', '01'], ['Pandas & bamboo forests', 'Chengdu', '02'], ['Hot pot after dark', 'Chongqing', '03'], ['Chongqing from above', 'Chongqing', '04']], footerText: 'Private, locally guided experiences in Chengdu and Chongqing.', footerAction: 'Plan your visit', waitlistTitle: 'Be first to see our new itineraries.', waitlistBody: 'Leave your email for field-tested routes and honest city notes.', waitlistPlaceholder: 'Email address', waitlistButton: 'Keep me posted', waitlistSuccess: 'You’re on the list. We’ll be in touch.',
    journey: 'My trip', emptyJourney: 'Your trip is empty', journeyHint: 'Choose an itinerary to start planning.', clearJourney: 'Clear all', close: 'Close', experienceDetail: 'A local favourite chosen for its atmosphere, story and sense of place—not just the photo.', addExperience: 'Add to my trip',
  },
  FR: {
    pageTitle: 'ZigZag China — Découvrez Chengdu et Chongqing', skipToContent: 'Aller au contenu',
    share: 'Partager mon voyage', shared: 'Lien copié',
    practicalKicker: 'Avant votre arrivée', practicalTitle: ['Soyez prêt', 'avant d’atterrir.'], practicalCards: [['Se déplacer', 'Trains rapides, métro et liaisons aéroport expliqués simplement.'], ['Paiement & mobile', 'Les essentiels pour payer, se connecter et rester joignable.'], ['Le rythme local', 'Quelques repères pour bien manger et explorer la ville.']],
    close: 'Fermer', experienceDetail: 'Une façon soigneusement choisie de découvrir la ville dans ce qu’elle a de plus mémorable.', addExperience: 'Ajouter à mon voyage',
    nav: ['Destinations', 'Expériences', 'Réserver un guide'],
    kicker: 'Une autre Chine', title: ['Découvrez', 'la Chine de l’Ouest'], intro: 'Deux villes. Mille façons de vivre le voyage.', explore: 'Explorer', scroll: 'Défiler pour explorer',
    teaserKicker: 'Un voyage, deux énergies', teaserTitle: ['Laissez la ville', 'vous surprendre.'], teaserBody: 'Commencez par le rythme paisible de Chengdu, puis suivez les rivières vers les nuits électriques de Chongqing. ZigZag China vous ouvre les portes des deux villes.', begin: 'Commencer l’exploration', sectionLabel: '01 — Trouvez votre rythme',
    city: { Chengdu: { eyebrow: 'Brumes · thé · panda géant', title: 'Chengdu', body: 'Matins paisibles, tables épicées et ruelles anciennes.', action: 'Explorer la ville douce' }, Chongqing: { eyebrow: 'Néons · rivières · ville-montagne', title: 'Chongqing', body: 'Rivières de lumière et ville construite sur plusieurs niveaux.', action: 'Entrer dans la ville de nuit' } },
    routeKicker: 'Pour les voyageurs curieux', routeTitle: ['Choisissez la', 'route panoramique.'], viewRoutes: 'Voir tous les itinéraires', routes: ['Premiers goûts du Sichuan', 'Deux villes en une semaine', 'Chongqing après la nuit'], searchKicker: 'Rechercher un voyage', searchPlaceholder: 'Essayez « fondue », « pandas » ou « vues nocturnes »', noMatches: 'Aucun résultat pour le moment.', cityComing: (city) => `L’exploration de ${city} arrive bientôt`, routeAdded: (route) => `${route} ajouté à votre voyage`, proofKicker: 'Une meilleure façon d’arriver', proofTitle: ['Deux villes.', 'Une première impression inoubliable.'], proofBody: 'ZigZag China transforme le voyage dans l’ouest de la Chine en une histoire que l’on ressent avant de réserver, puis en un itinéraire simple à vivre.', proofStats: [['02', 'villes iconiques'], ['03', 'langues'], ['∞', 'façons de voyager']], proofAction: 'Créer votre voyage', experienceKicker: 'Choisissez votre envie', experienceTitle: ['Voyagez à', 'l’instinct.'], experienceCards: [['Thé & matins paisibles', 'Chengdu', '01'], ['Pandas & nature', 'Chengdu', '02'], ['Fondue après la nuit', 'Chongqing', '03'], ['La ville vue d’en haut', 'Chongqing', '04']], footerText: 'Un guide attentif de Chengdu et Chongqing pour les voyageurs curieux.', footerAction: 'Commencer à planifier', waitlistTitle: 'Recevez les premiers itinéraires.', waitlistBody: 'Laissez votre email pour recevoir nos parcours testés et nos notes de ville.', waitlistPlaceholder: 'Votre adresse email', waitlistButton: 'Rejoindre la liste', waitlistSuccess: 'Vous êtes inscrit — à très bientôt.', journey: 'Mon voyage', emptyJourney: 'Votre voyage est vide', journeyHint: 'Choisissez un itinéraire pour commencer.', clearJourney: 'Tout effacer',
  },
  '中': {
    pageTitle: 'ZigZag China — 成都与重庆私人地陪', skipToContent: '跳转到内容',
    share: '分享我的行程', shared: '行程链接已复制',
    practicalKicker: '出发之前', practicalTitle: ['落地之前', '先准备好。'], practicalCards: [['如何出行', '高铁、地铁和机场交通，一次看懂。'], ['支付与网络', '支付方式、网络连接和通讯准备。'], ['本地节奏', '关于吃饭、移动和探索城市的小提示。']],
    close: '关闭', experienceDetail: '精选一处入口，让你从最难忘的角度认识这座城市。', addExperience: '加入我的行程',
    nav: ['目的地', '旅行体验', '预约地陪'], kicker: '探索不一样的中国', title: ['发现', '中国西部'], intro: '两座城市，无数种旅行感受。', explore: '探索', scroll: '向下探索', teaserKicker: '一次旅程，两种气质', teaserTitle: ['让这座城市', '带给你惊喜。'], teaserBody: '从成都的悠闲节奏出发，沿着江河一路向东，进入重庆灯火通明的夜晚。ZigZag China 带你打开两座城市的第一扇窗。', begin: '开始探索', sectionLabel: '01 — 找到你的旅行节奏', city: { Chengdu: { eyebrow: '晨雾 · 茶 · 大熊猫', title: '成都', body: '慢下来的清晨、热辣的餐桌、古老的街巷和柔软的城市气质。', action: '探索慢生活城市' }, Chongqing: { eyebrow: '霓虹 · 江河 · 山城', title: '重庆', body: '流动的灯火、层叠的高架，以及一座向山而生的城市。', action: '进入山城夜色' } }, routeKicker: '为好奇的旅行者准备', routeTitle: ['走一条', '风景路线。'], viewRoutes: '查看全部路线', routes: ['第一次品尝四川', '一周双城之旅', '重庆夜游路线'], searchKicker: '搜索旅行内容', searchPlaceholder: '试试“火锅”、“熊猫”或“夜景”', noMatches: '暂时没有匹配内容。', cityComing: (city) => `${city}探索内容即将开放`, routeAdded: (route) => `已将“${route}”加入行程`, proofKicker: '更聪明的抵达方式', proofTitle: ['两座城市。', '一眼难忘的第一印象。'], proofBody: 'ZigZag China 让中国西部之旅在预订前就变得鲜活，并为旅行者提供真正可执行的路线。', proofStats: [['02', '座标志性城市'], ['03', '种语言'], ['∞', '种旅行方式']], proofAction: '规划你的旅程', experienceKicker: '选择你的旅行感受', experienceTitle: ['凭直觉', '去旅行。'], experienceCards: [['茶与慢清晨', '成都', '01'], ['熊猫与自然', '成都', '02'], ['深夜火锅', '重庆', '03'], ['俯瞰山城灯火', '重庆', '04']], footerText: '为好奇的旅行者准备的成都与重庆旅行指南。', footerAction: '开始规划', waitlistTitle: '抢先获得第一批路线。', waitlistBody: '留下邮箱，接收实地测试后的旅行路线和城市笔记。', waitlistPlaceholder: '你的邮箱地址', waitlistButton: '加入名单', waitlistSuccess: '已加入名单，期待和你一起出发。', journey: '我的行程', emptyJourney: '行程还是空的', journeyHint: '选择一条路线，开始规划你的旅行。', clearJourney: '清空全部',
  },
};

content.EN.experienceDetails = ['Start with a quiet tea house, a bowl of something warm and the slower rhythm that makes Chengdu feel like itself.', 'Pair a gentle panda morning with bamboo-covered hills and the neighbourhood flavours worth staying for.', 'Follow Chongqing’s riverside lights into a table of bubbling broth, local spice and the city’s after-dark energy.', 'Move between hillside streets, bridges and high viewpoints to see how this mountain city stacks up after sunset.'];
content.FR.experienceDetails = ['Commencez par une maison de thé paisible, quelques bouchées locales et le rythme doux qui fait le charme de Chengdu.', 'Une matinée auprès des pandas, des collines couvertes de bambous et les saveurs de quartier qui méritent le détour.', 'Suivez les lumières des rivières de Chongqing jusqu’à une table de fondue épicée et l’énergie de la ville après la nuit.', 'Passez des ruelles en pente aux ponts et aux belvédères pour comprendre la ville-montagne lorsque les lumières s’allument.'];
content['中'].experienceDetails = ['从一间安静的茶馆、一碗热气腾腾的食物和成都特有的慢节奏开始。', '在熊猫与竹林之间度过一个轻松的早晨，再去寻找值得停留的街区风味。', '沿着重庆江岸的灯火入夜，在翻滚的汤锅、地道的香辣和山城夜色中相遇。', '穿过坡道、桥梁和高处的观景点，看这座山城如何在日落之后层层亮起。'];

content.FR.routeDetails = ['Une première approche entre maisons de thé, cuisine de rue et saveurs de Chengdu.', 'Un rythme équilibré sur sept jours, des matins de Chengdu aux nuits de Chongqing.', 'Un itinéraire nocturne entre vues sur les rivières, fondue et lumières de la ville-montagne.'];
content['中'].routeDetails = ['从茶馆、小吃和成都的第一口味道开始，轻松进入旅程。', '用七天平衡成都的清晨与重庆的夜晚，体验一趟双城旅程。', '沿着江岸夜景、火锅和山城灯火，走进重庆的夜晚。'];
content.EN.booking = { kicker: 'Private local guiding', title: ['See more than', 'the guidebook.'], body: 'Tell us when you’re visiting and what kind of day you would enjoy. We’ll confirm availability and shape a private experience around you.', action: 'Plan a day with us', paymentLabel: 'Payment', payment: 'PAYPAL' };
content.FR.booking = { kicker: 'Guide privé', title: ['Découvrez la ville', 'avec une vraie connaisseuse.'], body: 'Indiquez vos dates et le type de journée souhaité. Les informations de paiement seront transmises après confirmation des disponibilités.', action: 'Demander une journée privée', payment: 'PAYPAL' };
content.FR.booking.paymentLabel = 'Paiement';
content['中'].booking = { kicker: '私人地陪', title: ['跟熟悉这座城市的人', '一起出发。'], body: '告诉我们你的日期和想要的旅行方式。确认时间后，我们会私下提供支付信息。', action: '预约私人地陪', paymentLabel: '支付方式', payment: 'PAYPAL' };
