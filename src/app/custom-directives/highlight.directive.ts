import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appHighlight') set searchString(sString: string) {
    let content = (this.element.nativeElement.innerText as string).replace(
      new RegExp(sString, 'gi'),
      (match) => {
        return '<span class="highlightText">' + match + '</span>';
      }
    );
    this.renderer.setProperty(this.element.nativeElement, 'innerHTML', content);
  }
}
