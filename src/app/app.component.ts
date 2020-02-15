import { Component } from '@angular/core';
import { freeApiService } from './services.ts/freeApiService';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lstComments: Comments[];
  lstPosts: Posts[];

  objPosts: Posts;
  objPuts: Posts;
  objPatchs:Posts;
  message: string;

  constructor(private freeapiservice: freeApiService) { }

  ngOnInit() {
    this.freeapiservice.getComments().subscribe(data => { this.lstComments = data });
    this.freeapiservice.getCommentsByParamameters().subscribe(data => { this.lstPosts = data });

    var opost = new Posts();
    opost.body = "titlebody";
    opost.title = "titletitle";
    opost.userId = 5;
    this.freeapiservice.post(opost).subscribe(data => { this.objPosts = data });

    var opost = new Posts();
    opost.title = "title is updating";
    opost.body = "body updated";
    opost.userId = 5;
    this.freeapiservice.put(opost).subscribe(data => { this.objPuts = data });


    var opost=new Posts();
    opost.title="patched the title";
    this.freeapiservice.patch(opost).subscribe(data=>{this.objPatchs=data});


    this.freeapiservice.delete().subscribe(data => { this.message = "Resources deleted Successfully." });
  }
}
