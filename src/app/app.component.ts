import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import angular from 'angular';
import { ng1Module } from '../ng1-app/ng1-app';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng1-migration-example';

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    angular.bootstrap(this.elRef.nativeElement, [ng1Module.name]);
  }
}
