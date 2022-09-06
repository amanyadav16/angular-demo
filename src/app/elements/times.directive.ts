import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private vc:ViewContainerRef,
    private tr:TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times:number){
    this.vc.clear();
    for(let i=0;i<times;i++){
       this.vc.createEmbeddedView(this.tr,{
        index:i
       });
    }
  }
}
