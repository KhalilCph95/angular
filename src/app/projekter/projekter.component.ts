import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-projekter',
  templateUrl: './projekter.component.html',
  styleUrls: ['./projekter.component.scss']
})
export class ProjekterComponent implements OnInit {

  constructor (private httpService: HttpClient) { }
  arrProjekter: string [];

  ngOnInit () {
    this.httpService.get('./assets/MOCK_DATA.json').subscribe(
      data => {
        this.arrProjekter = data as string [];
        // console.log(this.arrProjekter[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
