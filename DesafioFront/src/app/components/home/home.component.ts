import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from '../../carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carouselData: any[] = [];
  currentIndex = 0;
  cards = [
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

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.getCarouselData();
  }

  getCarouselData(): void {
    this.carouselService.getCarouselData().subscribe(
      (data) => {
        this.carouselData = data;
        console.log('Dados do carrossel carregados com sucesso !!');
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
