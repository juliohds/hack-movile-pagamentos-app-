import { Component } from "@angular/core";
import {
  ActionSheetController,
  ActionSheet,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { BrokerDetailPage } from "../broker-detail/broker-detail";
import { PropertyService } from "../../providers/property-service-mock";

@Component({
  selector: "page-property-detail",
  templateUrl: "property-detail.html"
})
export class PropertyDetailPage {
  property: any;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public propertyService: PropertyService,
    public toastCtrl: ToastController
  ) {
    this.property = this.navParams.data;
    propertyService
      .findById(this.property.id)
      .then(property => (this.property = property));
  }

  openBrokerDetail(broker) {
    this.navCtrl.push(BrokerDetailPage, broker);
  }

  favorite(property) {
    this.propertyService.favorite(property).then(property => {
      let toast = this.toastCtrl.create({
        message: "Item Adicionado no seu favoritos",
        cssClass: "mytoast",
        duration: 1000
      });
      toast.present(toast);
    });
  }

  share(property) {
    let actionSheet: ActionSheet = this.actionSheetCtrl.create({
      title: "Compartilhar via",
      buttons: [
        {
          text: "Twitter",
          handler: () => console.log("Compartilhar via twitter")
        },
        {
          text: "Facebook",
          handler: () => console.log("Compartilhar via facebook")
        },
        {
          text: "Email",
          handler: () => console.log("Compartilhar via email")
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => console.log("Cancelar")
        }
      ]
    });

    actionSheet.present();
  }
}
