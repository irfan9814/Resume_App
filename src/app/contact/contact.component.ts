import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() faEnvelope='';
  @Input() faPhone='';
  @Input() faGithub='';
  @Input() mobile='';
  @Input() email='';
  @Input() linkedin='';
  @Input() githuburl='';
  @Input() linkedinurl='';


  constructor() { }

  ngOnInit(): void {
  }

}
