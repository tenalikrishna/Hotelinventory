import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{
Color: string='red';
  constructor( private element: ElementRef , private renderer: Renderer2) {
    // console.log(this.element.nativeElement);

   }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.Color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.Color);
  }
@HostListener('mouseenter') onMouseEnter(){
  this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
}
@HostListener('mouseleave') onMouseLeave(){
  this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
}
}
