import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  Dummydata: any = [
    {
      id: 1,
      Name: "shirt",
      image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rMJNehzsmcIWGeZQBuHnqCam-MAPR5rGwg&usqp=CAU',
      image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRQfMNwlhk2mxS1rXkfXaMSmyKbOpEPs1zQ&usqp=CAU',
      descri: "We are providing best shirt in lahore",
      qty: 10
    },
    {
      id: 2,
      Name: "bags",
      image1: 'https://images-eu.ssl-images-amazon.com/images/I/41G+irUEbQL._AC._SR360,460.jpg',
      image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNOByQZoenf34_2vK7a56s_27FmEgPvOwcQ&usqp=CAU',
      descri: "We are providing best bags in lahore",
      qty: 0
    },
    {
      id: 3,
      Name: "Shoes",
      image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6yZSbHCu1BXBiRBtUJbhp1Um--d3G2UJ1A&usqp=CAU',
      image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-b-wVw083lhOd0zY3bM4oEmpi4B48zNg4w&usqp=CAU',
      descri: "We are providing best shoes in lahore",
      qty: 3
    },
    {
      id: 4,
      Name: "watch",
      
      image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL9UcV40cVWjhlnz_7W5J6TTtNyH6SjSoRA&usqp=CAU',
      image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL9UcV40cVWjhlnz_7W5J6TTtNyH6SjSoRA&usqp=CAU',
      descri: "We are providing best watch in lahore",
      qty: 12
    } ,   
    {
      id: 5,
      Name: "Glasses",
      image1: 'https://images.unsplash.com/photo-1591886892231-62ce71610839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80',
      image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4hNIkli0mra0LmkFAEUDCZEtQZqyuBmudA&usqp=CAU',
      descri: "We are providing best Glasses in lahore",
      qty: 0
    },
    {
      id: 6,
      Name: "Handfree",
      image1: 'https://s.alicdn.com/@sc04/kf/Hc2edf93014c346c0886d1317173b2ecaj.png_120x120xz.jpg',
      image2: 'https://s.alicdn.com/@sc04/kf/H23017c5a1c094353a6e5f2e6ebfc9f415.jpg_120x120xz.jpg',
      descri: "We are providing best Handfree in lahore",
      qty: 12
    }
  ]
  getdata() {
    return this.Dummydata
  }
  constructor() { }
}
