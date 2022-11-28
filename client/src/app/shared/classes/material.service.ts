import { ElementRef } from "@angular/core";

declare var M: any;

export class MaterialService {
    static toast(message: string) {
        M.toast({html: message})
    }

    static initializeFloatingButton(ref: ElementRef) {
        M.FloatingActionButton.init(ref.nativeElement) // with this we can have here our target el
    }
}
