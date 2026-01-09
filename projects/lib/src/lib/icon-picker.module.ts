import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconPickerComponent } from './icon-picker.component';
import { IconPickerDirective } from './icon-picker.directive';
import { IconPickerService } from './icon-picker.service';
import { SearchIconPipe } from './search-icon.pipe';
import { TextDirective } from './text.directive';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        IconPickerDirective,
        TextDirective,
        SearchIconPipe
    ],
    providers: [
        IconPickerService
    ],
    declarations: [
        IconPickerComponent,
    ],
    exports: [
        IconPickerDirective
    ]
})
export class IconPickerModule {
}
