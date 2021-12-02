import { Component, OnInit } from '@angular/core';

import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-hashulator',
  templateUrl: './hashulator.component.html',
  styleUrls: ['./hashulator.component.scss']
})
export class HashulatorComponent implements OnInit {

  hashVal: string | undefined
  inputState: string | undefined
  result: string | undefined = 'Place for your result :)'

  constructor() { }

  ngOnInit(): void {
  }

  hashingFunc()
  {

    switch (this.hashVal)
    {
      case 'SHA512':
        // @ts-ignore
        this.result = CryptoJS.SHA512(this.inputState).toString(CryptoJS.enc.Hex)
        break;
      case 'SHA384':
        // @ts-ignore
        this.result = CryptoJS.SHA384(this.inputState).toString(CryptoJS.enc.Hex)
        break;
      case 'SHA256':
        // @ts-ignore
        this.result = CryptoJS.SHA256(this.inputState).toString(CryptoJS.enc.Hex)
        break;
      case 'SHA224':
        // @ts-ignore
        this.result = CryptoJS.SHA224(this.inputState).toString(CryptoJS.enc.Hex)
        break;
      case 'SHA3':
        // @ts-ignore
        this.result = CryptoJS.SHA3(this.inputState).toString(CryptoJS.enc.Hex)
        break;
      case 'SHA1':
        // @ts-ignore
        this.result = CryptoJS.SHA1(this.inputState).toString(CryptoJS.enc.Hex)
        break;
      default:
        console.log('Alarm')

    }

  }

}
