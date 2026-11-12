import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  imports: [RouterLink, LucideArrowRight],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
