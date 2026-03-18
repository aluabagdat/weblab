import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,

  imports: [
    CommonModule,
    ProductCardComponent
  ],

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [

    {
    id: 1,
    name: 'Наушники Apple AirPods Pro 2 с MagSafe (USB-C) белый',
    description: 'Активное шумоподавление, режим адаптивной прозрачности и персонализированное пространственное аудио.',
    price: 129990,
    rating: 5.0,
    image: 'assets/images/airpods.jpg',

    images: [
      'assets/images/airpods.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 15 256Gb черный',
    description: 'Dynamic Island, камера 48 Мп и разъем USB-C в прочном корпусе из цветного стекла и алюминия.',
    price: 699990,
    rating: 4.9,
    image: 'assets/images/iphone.jpg',

    images: [
      'assets/images/iphone.jpg',
      'assets/images/iphone.jpg',
      'assets/images/iphone.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-dual-sim-6-gb-256-gb-chernyi-114963265/?c=750000000'
  },
  {
    id: 3,
    name: 'Рация Baofeng UV-5R черный',
    description: 'Профессиональная портативная рация с широким диапазоном частот и мощным аккумулятором.',
    price: 18990,
    rating: 4.8,
    image: 'assets/images/radio.jpg', 
    images: [
        'assets/images/radio.jpg',
        'assets/images/radio.jpg',
        'assets/images/radio.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/ratsija-wln-kd-c1-garnitura-aishop-109359537/?c=750000000'
  },
  {
    id: 4,
    name: 'Микрофон петличный беспроводной Lightning черный',
    description: 'Компактная система для записи звука на iPhone. Идеально для блогеров и интервью.',
    price: 9990,
    rating: 4.6,
    image: 'assets/images/microphone.jpg', 
    images: [
        'assets/images/microphone.jpg',
        'assets/images/microphone.jpg', 
        'assets/images/microphone.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/mikrofon-boya-by-v2-lightning-chernyi-109270575/?c=750000000'
  },
  {
    id: 5,
    name: 'Трекер Apple AirTag белый',
    description: 'Умный трекер для поиска вещей через приложение "Локатор" на устройствах Apple.',
    price: 14990,
    rating: 5.0,
    image: 'assets/images/airtag.jpg', 
    images: [
        'assets/images/airtag.jpg', 
        'assets/images/airtag.jpg', 
        'assets/images/airtag.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airtag-4-pack-belyi-101701962/?c=750000000'
  },
  {
    id: 6,
    name: 'Камера CAM LK-007 розовый',
    description: 'Миниатюрная Wi-Fi камера в стильном розовом корпусе для мониторинга помещений.',
    price: 15500,
    rating: 4.2,
    image: 'assets/images/camera.jpg', 
    images: [
        'assets/images/camera.jpg', 
        'assets/images/camera.jpg', 
        'assets/images/camera.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/cam-lk-007-rozovyi-138160041/?c=750000000'
  },
  {
    id: 7,
    name: 'Проектор Magcubic HY300 черный',
    description: 'Смарт-проектор на Android с поддержкой 4K и встроенными динамиками для домашнего кинотеатра.',
    price: 28900,
    rating: 4.7,
    image: 'assets/images/projector.jpg', 
    images: [
        'assets/images/projector.jpg',
        'assets/images/projector.jpg',
        'assets/images/projector.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/proektor-406-hy300-karaoke-chernyi-132903827/?c=750000000'
  },
  {
    id: 8,
    name: 'Смарт-очки M01Pro черный',
    description: 'Очки с Bluetooth-гарнитурой и защитой от синего света для комфортной работы и звонков.',
    price: 12500,
    rating: 4.4,
    image: 'assets/images/glasses.jpg', 
    images: [
        'assets/images/glasses.jpg', 
        'assets/images/glasses.jpg', 
        'assets/images/glasses.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/smart-ochki-30410332-081679475-chernyi-144729442/?c=750000000'
  },
  {
    id: 9,
    name: 'Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
    description: 'Стильные смарт-часы с функциями отслеживания активности и уведомлений.',
    price: 145000,
    rating: 4.9,
    image: 'assets/images/watch.jpg', 
    images: [
        'assets/images/watch.jpg', 
        'assets/images/watch.jpg', 
        'assets/images/watch.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
  },
  {
    id: 10,
    name: 'Смарт-кольцо SR08 черный',
    description: 'Инновационный гаджет для мониторинга сна, пульса и физической активности на вашем пальце.',
    price: 18000,
    rating: 4.5,
    image: 'assets/images/ring.jpg', 
    images: [
        'assets/images/ring.jpg', 
        'assets/images/ring.jpg', 
        'assets/images/ring.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/smart-kol-tso-sr08-chernyi-134589130/?c=750000000'
  }

  ];

}
