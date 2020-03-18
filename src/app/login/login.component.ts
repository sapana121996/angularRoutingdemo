import { Component, OnInit } from '@angular/core';
import { Routes,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name='';
  password='';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogin()
  {
    if(this.name.length==0)
    alert('enter name');
    else if(this.password.length==0)
    {
      alert('enter password');
    }
    else if(this.name==="sapana")
    {
      this.router.navigate(['/welcome-page']);
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }
}
