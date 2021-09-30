import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  formData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formData = this.formBuilder.group({
      showOnMap: ''
    })

  }

  ngOnInit(): void {
    this.formData.valueChanges.subscribe(
      r => {

        if (this.formData.value['showOnMap']) {
          this.router.navigateByUrl('search-residence/map');
        } else {
          this.router.navigateByUrl('search-residence');


        }
      }
    );
  }

}
