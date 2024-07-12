import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
    {
      id: 3,
      title: 'Lorem Ipsun Dolor',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Error aut numquam inventore, eligendi asperiores temporibus distinctio. Minus, exercitationem assumenda perspiciatis, dolor animi saepe non.',
      show: true,
    },
    // Adicione mais cards conforme necessário
  ];

  cards = [
    {
      id: 1,
      title: 'Ianca Placimo',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      image: '../../../assets/img/person.png',
    },
    {
      id: 2,
      title: 'Andreas Delucca',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      image: '../../../assets/img/person.png',
    },
    {
      id: 3,
      title: 'Kang Inhey',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      image: '../../../assets/img/person.png',
    },
    {
      id: 4,
      title: 'Vincenzo Cassano',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      image: '../../../assets/img/person.png',
    },
    {
      id: 5,
      title: 'Kang He-In',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      image: '../../../assets/img/person.png',
    },
    {
      id: 6,
      title: 'Miles Morales',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      image: '../../../assets/img/person.png',
    },
  ];

  currentIndex = 0;

  next() {
    if (this.currentIndex + 3 < this.cards.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  visibleCards() {
    return this.cards.slice(this.currentIndex, this.currentIndex + 3);
  }
}
