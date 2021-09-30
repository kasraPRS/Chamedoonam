import { Directive, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Directive({
    selector: '[appCard]'
})

export class DpSelectDirective implements OnInit {
    private inputClass = 'dp-blue-select';

    constructor(private card: MatCardModule) {
    }

    ngOnInit(): void {
    }


}