import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconPickerComponent } from './icon-picker.component';
import { IconPickerDirective } from './icon-picker.directive';
import { IconPickerService } from './icon-picker.service';
import { SearchIconPipe } from './search-icon.pipe';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        IconPickerDirective,
        SearchIconPipe,
        IconPickerComponent
    ],
    providers: [
        IconPickerService
    ],
    exports: [
        IconPickerDirective
    ]
})
export class IconPickerModule {
}
