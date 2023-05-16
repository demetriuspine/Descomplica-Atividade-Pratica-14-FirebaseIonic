import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-modal',
  template: `
  <ion-header>
      <ion-toolbar>
        <ion-title>Confirmation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="modal-content">
        <p>Are you sure you want to delete this product?</p>
      </div>

      <ion-footer>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button color="danger" (click)="deleteProduct()">Delete</ion-button>
          </ion-buttons>

          <ion-buttons slot="end">
            <ion-button (click)="closeModal()">Cancel</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    </ion-content>
  `,
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  @Input()
  productId!: string;

  constructor(private modalController: ModalController) { }

  deleteProduct() {
    this.modalController.dismiss('delete');
  }

  closeModal() {
    this.modalController.dismiss();
  }
}