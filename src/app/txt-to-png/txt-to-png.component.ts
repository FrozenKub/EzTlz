import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-txt-to-png',
  templateUrl: './txt-to-png.component.html',
  styleUrls: ['./txt-to-png.component.scss']
})
export class TxtToPngComponent implements OnInit {

  constructor() { }

  data = ''
  input = ''
  fontInput = 'Arial'
  textToImage = require('text-to-image');

  async ngOnInit(): Promise<void> {
  }

  async convertTextToPng() {
    this.data = await this.textToImage.generate(this.input,
      {
        bgColor: 'rgb(0 0 0 / 0)',
        fontFamily: this.fontInput,
        textAlign: "center"
      });

  }

}
