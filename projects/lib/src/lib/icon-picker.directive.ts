import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';

import { IconPickerComponent } from './icon-picker.component';

@Directive({
  selector: '[iconPicker]',
  standalone: true
})
export class IconPickerDirective implements OnInit, OnChanges {
  @Input() public iconPicker: string;
  @Input() public ipPlaceHolder = 'Search icon...';
  @Input() public ipPosition = 'right';
  @Input() public ipFallbackIcon = 'fas fa-user';
  @Input() public ipHeight = 'auto';
  @Input() public ipMaxHeight = '200px';
  @Input() public ipWidth = '230px';
  @Input() public ipIconSize = '16px';
  @Input() public ipIconVerticalPadding = '6px'; // Top / Bottom
  @Input() public ipIconHorizontalPadding = '10px'; // Left / Right
  @Input() public ipIconPack = ['bs', 'fa5'];
  @Input() public ipKeepSearchFilter = 'false';
  // Default design with bootstrap
  @Input() public ipButtonStyleClass = 'btn btn-default';
  @Input() public ipDivSearchStyleClass = '';
  @Input() public ipInputSearchStyleClass = 'form-control input-sm';

  @Output() public iconPickerSelect = new EventEmitter<string>(true);

  private dialog: any;
  private created: boolean;
  private ignoreChanges = false;

  public constructor(
    private vcRef: ViewContainerRef,
    private el: ElementRef) {
    this.created = false;
  }

  @HostListener('click')
  public onClick() {
    this.openDialog();
  }

  public ngOnChanges(changes: any): void {
    if (changes.iconPicker) {
      this.ignoreChanges = false;
    }
  }

  public ngOnInit() {
    this.iconPicker = this.iconPicker || this.ipFallbackIcon || 'fa fa-user-plus';
    this.iconPickerSelect.emit(this.iconPicker);
  }

  public openDialog() {
    if (!this.created) {
      this.created = true;
      const vcRef = this.vcRef;
      const cmpRef = vcRef.createComponent(IconPickerComponent);
      cmpRef.instance.setDialog(this, this.el, this.iconPicker, this.ipPosition, this.ipHeight, this.ipMaxHeight,
        this.ipWidth, this.ipPlaceHolder, this.ipFallbackIcon, this.ipIconPack, this.ipIconSize,
        this.ipIconVerticalPadding, this.ipIconHorizontalPadding, this.ipButtonStyleClass, this.ipDivSearchStyleClass,
        this.ipInputSearchStyleClass, this.ipKeepSearchFilter);
      this.dialog = cmpRef.instance;

      if (this.vcRef !== vcRef) {
        cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.dialog.openDialog(this.iconPicker);
    }
  }

  public iconSelected(icon: string) {
    this.iconPickerSelect.emit(icon);
  }

}
