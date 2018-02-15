import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appTest]'
})

export class Test {
	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'yellow';
	}
}