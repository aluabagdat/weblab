import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'iPhone 15',
    price: 699000,
    description: 'Apple iPhone 15 128GB',
    image: 'assets/iphone15.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-dual-sim-6-gb-256-gb-chernyi-114963265/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 5,
    liked: false,
    categoryId: 1,
    rating: 4
  },
  {
    id: 2,
    name: 'Samsung Galaxy A56',
    price: 499000,
    description: 'Samsung Galaxy A56 256GB',
    image: 'assets/samsung.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 1,
    rating: 4
  },
  {
    id: 3,
    name: 'Iphone 17 Pro',
    price: 329000,
    description: 'Apple Iphone 17 Pro 256 GB',
    image: 'assets/iphone17.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 2,
    categoryId: 1,
    rating: 4
  },
  {
    id: 4,
    name: 'Redmi A5',
    price: 289000,
    description: 'Redmi A5 128 GB',
    image: 'assets/redmia5.jpg',
    link: 'https://kaspi.kz/shop/p/redmi-a5-4-gb-128-gb-chernyi-137034687/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 1,
    rating: 4
  },
  {
    id: 5,
    name: ' Samsung Galaxy A17',
    price: 349000,
    description: ' Samsung Galaxy A17 128GB',
    image: 'assets/samsungg17.jpg',
    link: 'https://kaspi.kz/shop/p/oneplus-11-256gb-107270381/',
    likes: 3,
    categoryId: 1,
    rating: 4
  },

  {
    id: 6,
    name: 'MacBook Air 13',
    price: 499000,
    description: 'Apple MacBook Air  13 1024GB"',
    image: 'assets/macbookair.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 2,
    rating: 4
  },
  {
    id: 7,
    name: 'MacBook Pro 14',
    price: 799000,
    description: 'Apple MacBook Pro 14 1024 GB"',
    image: 'assets/macbookpro14.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-16-gb-ssd-1024-gb-macos-mphj3-108646061/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 2,
    rating: 4
  },
  {
    id: 8,
    name: 'ASUS TUF Gaming',
    price: 529000,
    description: 'ASUS TUF Gaming F15',
    image: 'assets/asusgaming.jpg',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00jd0-147782981/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 2,
    rating: 4
  },
  {
    id: 9,
    name: 'HP Pavilion',
    price: 389000,
    description: 'HP Pavilion 15',
    image: 'assets/hppavilion.jpg',
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ci-15-6-16-gb-ssd-1024-gb-dos-7p438ea-uuq-111968153/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 2,
    rating: 4
  },
  {
    id: 10,
    name: 'Lenovo IdeaPad',
    price: 329000,
    description: 'Lenovo IdeaPad 3',
    image: 'assets/lenovo.jpg',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-15ijl7-15-6-8-gb-ssd-512-gb-bez-os-82lx00g9rk-144403511/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 2,
    rating: 4
  },

  {
    id: 11,
    name: 'AirPods Pro 2',
    price: 129000,
    description: 'Apple AirPods Pro (2nd gen)',
    image: 'assets/airpods2.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-106273684/',
    likes: 0,
    categoryId: 3,
    rating: 4
  },
  {
    id: 12,
    name: 'Sony WH-1000XM5',
    price: 179000,
    description: 'Sony noise canceling headphones',
    image: 'assets/sonypods.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_accessories_travel_gear_desktop&gbraid=0AAAAAC7-v7gawJkCeT-bm-0hoR3Ll3zZr&gclid=CjwKCAiAzOXMBhASEiwAe14Sae45TGLkXiIJxM-vxR8AjC9Le7QL5oO1aE6dncRqcKiF0fjo-Pf1bxoC-_EQAvD_BwE',
    likes: 0,
    categoryId: 3,
    rating: 4
  },
  {
    id: 13,
    name: 'JBL Tune 510BT',
    price: 34990,
    description: 'Wireless JBL headphones',
    image: 'assets/jbl.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-sinii-101419792/?c=750000000',
    likes: 0,
    categoryId: 3,
    rating: 4
  },
  {
    id: 14,
    name: 'AirPods 4',
    price: 69990,
    description: 'AirPods 4',
    image: 'assets/airpods1.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
    likes: 0,
    categoryId: 3,
    rating: 4
  },
  {
    id: 15,
    name: 'AirPods Max',
    price: 24990,
    description: 'AirPods Max',
    image: 'assets/airpodsmax.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-serebristyi-100949286/?c=750000000',
    likes: 0,
    categoryId: 3,
    rating: 4
  },

  {
    id: 16,
    name: 'iPad 10',
    price: 229000,
    description: 'Apple iPad 10th gen',
    image: 'assets/ipad1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000',
    likes: 0,
    categoryId: 4,
    rating: 4
  },
  {
    id: 17,
    name: 'iPad Pro M2',
    price: 529000,
    description: 'Apple iPad Pro 11 M2',
    image: 'assets/ipad2.jpg',
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
    likes: 0,
    categoryId: 4,
    rating: 4
  },
  {
    id: 18,
    name: 'Samsung Galaxy Tab A9',
    price: 349000,
    description: 'Samsung Galaxy Tab A9',
    image: 'assets/galaxya9.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000',
    likes: 0,
    categoryId: 4,
    rating: 4
  },
  {
    id: 19,
    name: 'Xiaomi Pad 6',
    price: 189000,
    description: 'Xiaomi Pad 6',
    image: 'assets/xiaomi.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
    likes: 0,
    categoryId: 4,
    rating: 4
  },
  {
    id: 20,
    name: 'Lenovo Tab P11',
    price: 159000,
    description: 'Lenovo Tab P11',
    image: 'assets/lenovopl.jpg',
    link: 'https://kaspi.kz/shop/p/lenovo-tb336fu-tab-11-djuim-8-gb-256-gb-seryi-149944785/?c=750000000',
    likes: 0,
    categoryId: 4,
    rating: 4
  }
];
