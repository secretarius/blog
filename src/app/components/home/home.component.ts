import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newBlogPost!: FormGroup;
  submitted = false;
  returnUrl!: string;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  accept = '.jpeg,.jpg,.png';


  @ViewChild('addStoryDialog', {static: true}) addStoryDialog!: TemplateRef<any>;
  openAddStoryDialog() {
    this.dialog.open(this.addStoryDialog);
  }

  ngOnInit(): void {
    this.newBlogPost = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      file: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;
    this.postService.addPost(this.newBlogPost.value).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate([this.returnUrl]);
      },
      error: (error) => {
        console.log(error);
      },
    })
    this.newBlogPost.reset()
  }

}
