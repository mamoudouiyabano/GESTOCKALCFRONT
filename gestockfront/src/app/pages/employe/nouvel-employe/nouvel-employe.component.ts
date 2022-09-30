import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-employe',
  templateUrl: './nouvel-employe.component.html',
  styleUrls: ['./nouvel-employe.component.scss']
})
export class NouvelEmployeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['employes']);
  }

}
