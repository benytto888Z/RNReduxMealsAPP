import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
    new Category('c1', 'Italien', '#f5428d'),
    new Category('c2', 'Rapide & Facile', '#f54242'),
    new Category('c3', 'Hamburgers', '#f5a442'),
    new Category('c4', 'Allemand', '#f5d142'),
    new Category('c5', 'Léger & Charmant', '#368dff'),
    new Category('c6', 'Exotique', '#41d95d'),
    new Category('c7', 'Petit déjeuner', '#9eecff'),
    new Category('c8', 'Asiatique', '#b9ffb0'),
    new Category('c9', 'Français', '#ffc7ff'),
    new Category('c10', 'Été', '#47fced')
];


export const MEALS = [
    new Meal(
        'm1',
        ['c1', 'c2'],
        'Spaghetti à la Sauce Tomate',
        'abordable',
        'simple',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        20,
        [
            '4 Tomates',
            '1 Cuillère à Soupe d\'Huile d\'Olive',
            '1 Oignon',
            '250g Spaghetti',
            'Épices',
            'Fromage (facultatif)'
        ],
        [
            "Coupez les tomates et l'oignon en petits morceaux.",
            " Faites bouillir de l'eau - ajoutez-y du sel une fois ébullition. ",
            " Mettez les spaghettis dans l'eau bouillante - ils devraient être cuits dans environ 10 à 12 minutes. ",
            " En attendant, faites chauffer de l'huile d'olive et ajoutez l'oignon coupé. ",
            "Après 2 minutes, ajoutez les morceaux de tomate, le sel, le poivre et vos autres épices",
            "La sauce sera faite une fois que les spaghettis seront.",
            "N'hésitez pas à ajouter du fromage sur le plat fini."
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm2',
        ['c2'],
        'Toast Hawaii',
        'abordable',
        'simple',
        'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
        10,
        [
            '1 Tranche de Pain Blanc',
            '1 Tranche de Jambom',
            '1 Tranche d\'Ananas',
            '1-2 Tranches de Fromage',
            'Beurre'
        ],
        [
            'Beurrer un côté du pain blanc',
            'Étendre le jambon, l\'ananas et le fromage sur le pain blanc',
            'Cuire le pain grillé pendant environ 10 minutes au four à 200 ° C'
        ],
        false,
        false,
        false,
        false
    ),

    new Meal(
        'm3',
        ['c3'],
        'Hamburger classic',
        'cher',
        'facile',
        'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
        45,
        [
            '300g Cattle Hack',
            '1 Tomate',
            '1 Concombre',
            '1 Oignon',
            'Ketchup',
            '2 pains à hamburger'
        ],
        [
            '2 galettes de forme',
            'Faire frire les galettes pendant environ 4 minutes de chaque côté',
            'Faites frire rapidement les rouleaux pendant environ 1 minute de chaque côté',
            'Bruch aux rouleaux de ketchup',
            'Servir un burger avec tomate, concombre et oignon'
        ],
        false,
        false,
        false,
        true
    ),

    new Meal(
        'm4',
        ['c4'],
        'Wiener Schnitzel',
        'luxueux',
        'difficile ',
        'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
        60,
        [
            '8 escalopes de veau',
            '4 œufs',
            '200g de chapelure',
            '100g de farine',
            '300ml de beurre ',
            "100g d'huile végétlale ",
            'Sel',
            'Tranches de citron'
        ],
        [
            'Attendrissez le veau à environ 2 à 4 mm et salez des deux côtés.',
            'Sur une assiette plate, mélangez brièvement les œufs avec une fourchette.',
            "Enrober légèrement les escalopes de farine, puis tremper dans l'œuf et enfin enrober de chapelure.",
            "Faites chauffer le beurre et l'huile dans une grande poêle (laissez la graisse devenir très chaude) et faites frire les escalopes jusqu'à ce qu'elles soient dorées des deux côtés.",
            "Assurez-vous de mélanger la casserole régulièrement afin que les escalopes soient entourées d'huile et que la chapelure devienne duveteuse.",
            "Retirez et égouttez sur du papier absorbant. Faites frire le persil dans l'huile restante et égoutter.",
            'Placez les escalopes sur une assiette chaude et servez garni de persil et de tranches de citron.'
        ],
        false,
        false,
        false,
        false
    ),

    new Meal(
        'm5',
        ['c2', 'c5', 'c10'],
        'Salade au saumon fumé',
        'luxueux',
        'Facile',
        'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
        15,
        [
            'Roquette',
            "Mâche",
            'Persil',
            'Fenouil',
            '200g de saumon fumé',
            'Moutarde',
            'Vinaigre balsamique',
            "Huile d'olive",
            'Sel et poivre '
        ],
        [
            'Lavez et coupez la salade et les herbes',
            'Couper le saumon en dés',
            "Transformer la moutarde, le vinaigre et l'huile d'olive en dessert",
            'Préparer la salade',
            'Ajouter les cubes de saumon et la vinaigrette'
        ],
        true,
        false,
        true,
        true
    ),

    new Meal(
        'm6',
        ['c6', 'c10'],
        "Délicieuse mousse d'orange",
        'abordable',
        'Moyen',
        'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
        240,
        [
            '4 feuilles de gélatine',
            "150ml de jus d'orange",
            '80g de sucre',
            '300g de yaourt',
            '200g de crème',
            "Épluchure d'orange"
        ],
        [
            'Dissoudre la gélatine en pot.',
             "Ajouter du jus d'orange et du sucre.",
             'Retirez la casserole du poêle',
             'Ajoutez 2 cuillères à soupe de yaourt.',
             'Incorporer la gélatine au reste du yaourt.',
             'Refroidissez tout dans le réfrigérateur.',
             "Fouettez la crème et soulevez-la sous la masse d'orange.",
             'Refroidissez à nouveau pendant au moins 4 heures.',
             "Servir avec un zeste d'orange."
        ],
        true,
        false,
        true,
        false
    ),

    new Meal(
        'm7',
        ['c7'],
        'Crêpes',
        'abordable',
        'Facile',
        'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
        20,
        [
            '1 1/2 tasse de farine tout usage.',
            '3 1/2 cuillères à café de poudre à pâte.',
            '1 cuillère à café de sel.',
            '1 cuillère à soupe de sucre blanc.',
            '1 1/4 tasse de lait',
            '1 oeuf',
            '3 cuillères à soupe de beurre fondu'
        ],
        [
            'Dans un grand bol, tamisez ensemble la farine, la levure chimique, le sel et le sucre.',
            "Faites un puits au centre et versez le lait, l'œuf et le beurre fondu; mélanger jusqu'à consistance lisse.",
            "Chauffez une plaque chauffante ou une poêle légèrement huilée à feu moyen-élevé.",
            'Versez ou scoop la pâte dans la plaque chauffante, en utilisant environ 1/4 tasse pour chaque crêpe.Cuire sur les deux côtés et servir chaud.'
        ],
        true,
        false,
        true,
        false
    ),

    new Meal(
        'm8',
        ['c8'],
        'Poulet au curry Indian',
        'cher',
        'difficile',
        'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
        35,
        [
            '4 poitrines de poulet.',
            '1 oignon.',
            "2 gousses d'ail.",
            '1 morceau de gingembre.',
            "4 cuillères à soupe d'amandes.",
            '1 cuillère à café de poivre de Cayenne.',
            '500 ml de lait de coco'
        ],
        [
            'Tranchez et faites frire la poitrine de poulet.',
            "Transformez l'oignon, l'ail et le gingembre en pâte et faites tout sauter.",
            'Ajouter des épices et faire sauter.',
            "Ajouter la poitrine de poulet + 250 ml d'eau et cuire le tout pendant 10 minutes.",
            'Ajouter du lait de coco.',
            'Servir avec du riz'
        ],
        true,
        false,
        false,
        true
    ),

    new Meal(
        'm9',
        ['c9'],
        'Soufflé au chocolat',
        'abordable',
        'moyen',
        'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
        45,
        [
            "1 cuillère à café de beurre fondu",
            "2 cuillères à soupe de sucre blanc",
            "2 onces de chocolat noir à 70%, en morceaux",
            "1 cuillère à soupe de beurre",
            "1 cuillère à soupe de farine tout usage",
            "4 1/3 cuillères à soupe de lait froid",
            "1 pincée de sel",
            "1 pincée de piment de Cayenne",
            "1 gros jaune d'oeuf",
            "2 gros blancs d'œufs",
            "1 pincée de crème de tartre",
            "1 cuillère à soupe de sucre blanc"
        ]
        [
            'Préchauffez le four à 190 ° C. Tapisser une plaque à pâtisserie bordée de papier parchemin. ',
            "Badigeonnez légèrement le fond et les côtés de 2 ramequins avec 1 cuillère à café de beurre fondu puis couvrez le fond et les côtés jusqu'au bord.",
            "Ajoutez 1 cuillère à soupe de sucre blanc aux ramequins. Faites tourner les ramequins jusqu'à ce que le sucre recouvre toutes les surfaces.",
            "Placez les morceaux de chocolat dans un bol en métal.",
            "Placez le bol sur une casserole d'environ 3 tasses d'eau chaude à feu doux.",
            "Faites fondre 1 cuillère à soupe de beurre dans une poêle à feu moyen. Saupoudrez de farine. Fouetter jusqu'à ce que la farine soit incorporée au beurre et que le mélange épaississe.",
            "Incorporer le lait froid en fouettant jusqu'à ce que le mélange devienne lisse et épaississe. Transférer le mélange dans un bol avec du chocolat fondu.",
            "Ajoutez du sel et du poivre de Cayenne. Bien mélanger. Ajouter le jaune d'oeuf et mélanger pour combiner.",
            "Laissez le bol au-dessus de l'eau chaude (sans frémissement) pour garder le chocolat au chaud pendant que vous fouettez les blancs d'œufs.",
            "Placer 2 blancs d'oeufs dans un bol à mélanger; ajouter la crème de tartre. Fouetter jusqu'à ce que le mélange commence à épaissir et qu'un filet du fouet reste à la surface environ 1 seconde avant de disparaître dans le mélange.",
            "Ajoutez 1/3 de sucre et fouettez. Ajoutez un peu plus de sucre environ 15 secondes.",
            "fouetter le reste du sucre. Continuez à fouetter jusqu'à ce que le mélange soit à peu près aussi épais que la crème à raser et retienne les pics mous, 3 à 5 minutes.",
            "Transférer un peu moins de la moitié des blancs d'oeufs au chocolat.",
            "Mélanger jusqu'à ce que les blancs d'oeufs soient bien incorporés dans le chocolat.",
            "Ajouter le reste des blancs d'œufs; pliez doucement dans le chocolat avec une spatule, en soulevant par le bas et en repliant.",
            "Arrêtez de mélanger après la disparition du blanc d'oeuf. Répartir le mélange entre 2 ramequins préparés. Placer les ramequins sur une plaque à pâtisserie préparée.",
            "Cuire au four préchauffé jusqu'à ce que les échauffourées soient gonflées et aient dépassé le dessus des jantes, de 12 à 15 minutes."
        ],
        true,
        false,
        true,
        false
    ),
    new Meal(
        'm10',
        ['c2', 'c5', 'c10'],
        "Salade d'asperges aux tomates cerises",
        'luxueux',
        'Facile',
        'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
        30,
        [
            "Asperges blanches et vertes",
            "30g de pignons de pin",
            "300g de tomates cerises",
            'Salade',
            "Sel, poivre et huile d'olive"
        ],
        [
            "Lavez, éplucher et couper les asperges",
            "Cuire à l'eau salée",
            "Salez et poivrez les asperges",
            "Rôtir les pignons de pin",
            "Coupez les tomates en deux",
            "Mélangez avec asperges, salade et vinaigrette",
            "Servir avec une baguette"
        ],
        true,
        true,
        true,
        true
    )
];
