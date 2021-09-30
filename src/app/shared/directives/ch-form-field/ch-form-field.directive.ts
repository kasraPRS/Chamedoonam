import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChFormField]'
})
export class ChFormFieldDirective implements OnInit {
  private inputClass = 'ch-pink-form-field';

  constructor(
    private renderer: Renderer2, private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.inputClass)
  }
}
