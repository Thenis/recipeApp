import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') mousedown() {
        this.isOpen = !this.isOpen;
    }
}