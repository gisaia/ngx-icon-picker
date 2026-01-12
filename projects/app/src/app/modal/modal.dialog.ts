import { Component, OnInit, TemplateRef } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal.dialog.html',
    standalone: false
})
export class ModalDialogComponent implements OnInit {
  modalRef: BsModalRef;
  myFormGroup: UntypedFormGroup;
  iconCss = new UntypedFormControl();
  fallbackIcon = 'glyphicon glyphicon-book';
  icon: string;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.myFormGroup = new UntypedFormGroup({iconCss: this.iconCss});
  }

  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }

}
