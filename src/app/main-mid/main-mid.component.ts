import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../image';


@Component({
  selector: 'app-main-mid',
  templateUrl: './main-mid.component.html',
  styleUrls: ['./main-mid.component.scss']
})
export class MainMidComponent implements OnInit {
  img: Image = {};
  images: Image[] = [
    {image: 'https://images.indianexpress.com/2021/07/GettyImages-healthy-eating-1200.jpg'},
    {image: 'https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/mdf_eioxrd/2020_12_05/8_eatwden.jpg'},
    {image: 'https://haiphongtours.com/wp-content/uploads/2021/01/Lich-trinh-food-tour-an-sap-Hai-Phong-trong-1-ngay-800x533.jpg'},
    {image: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_eioxrd/2020_12_05/6_1.jpg'},
    {image: 'https://media.travelmag.vn/resize/800x598/files/lenhu/2020/07/28/nem-cua-be-hai-phong-2145.jpg'},
    {image: 'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/09_2019/food-tour-hai-phong-1.jpg'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8jqhjL3SF0h9izYijO2wYHCQZMUxUU19VA&usqp=CAU'},
    {image: 'https://tikibook.com/upload/news/012020/food-centre-hai-phong-0.jpg'},
    {image: 'https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg'},
  ];

  constructor() {
  }

  ngOnInit() {
    this.add();
  }

  add() {
    this.images.push(this.img);
    this.img = {};
  }

  @Input()
  set image(va: string) {
    this.img.image = va;
  }

}
