import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from '../../carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardsC = [
    {
      id: 1,
      title: 'Lorem Ipsun Dolor',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Error aut numquam inventore, eligendi asperiores temporibus distinctio. Minus, exercitationem assumenda perspiciatis, dolor animi saepe non.',
      show: true,
    },
    {
      id: 2,
      title: 'Lorem Ipsun Dolor',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Error aut numquam inventore, eligendi asperiores temporibus distinctio. Minus, exercitationem assumenda perspiciatis, dolor animi saepe non.',
      show: true,
    },
  ];

  //   {
  //     id: 1,
  //     title: 'Ianca Placimo',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     image: '../../../assets/img/person.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Andreas Delucca',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     image: '../../../assets/img/person.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'Kang Inhey',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     image: '../../../assets/img/person.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'Vincenzo Cassano',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     image: '../../../assets/img/person.png',
  //   },
  //   {
  //     id: 5,
  //     title: 'Kang He-In',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     image: '../../../assets/img/person.png',
  //   },
  //   {
  //     id: 6,
  //     title: 'Miles Morales',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     image: '../../../assets/img/person.png',
  //   },
  // ];
  carouselData: any[] = [];
  cards: any[] = [];
  currentIndex = 0;
  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.getCarouselData();
  }

  getCarouselData(): void {
    this.carouselService.getCarouselData().subscribe(
      (data) => {
        this.carouselData = data;
        this.cards = data;
        console.log('Dados do carrossel:', this.carouselData);
        console.log('Dcard:', this.cards);
      },
      (error) => {
        console.error('Erro ao obter dados do carrossel:', error);
      }
    );
  }

  next(): void {
    if (this.carouselData.length > 0) {
      this.currentIndex =
        (this.currentIndex + 1) % (this.carouselData.length - 2); // Subtrai 2 para garantir que haja itens suficientes para exibir
    }
  }

  prev(): void {
    if (this.carouselData.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.carouselData.length) %
        (this.carouselData.length - 2); // Subtrai 2 para garantir que haja itens suficientes para exibir
    }
  }
}
