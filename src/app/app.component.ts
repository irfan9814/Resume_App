import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icon = {
  faEnvelope : faEnvelope,
  faPhone : faPhone,
  faGithub : faGithub,
  faLinkedin : faLinkedin
  }

  resume = {
  name:'Md Irfan Ansari',
  title : 'My-Resume-App',
  mobile: '8266907591',
  githuburl : 'abcd',
  linkedinurl : 'xyz',
  email : 'mdirfanansari98@gmail.com',
  objective :`To build good application and help the company to grow.`,
  skills : [
    'HTML', 'CSS', 'JavaScript', 'Angular 2+'
  ],
  education : [
    {
      "school": "Aligarh Muslim University, Aligarh",
      "degree" : "12th",
      "from": "2013",
      "to": "2015"
      },
      {
      "school": "Aligarh Muslim University, Aligarh",
      "degree": "BTech",
      "from": "2016",
      "to": "2020"
      }
  ],
  projects : [
      'Developed an Ecommerce Website',
      'Made a Resume App by using Angular'
  ]
  }
}
