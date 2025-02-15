import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BrokerService } from "../../providers/broker-service-mock";
import { BrokerDetailBoletoPage } from "../broker-detail-boleto/broker-detail-boleto";

@Component({
  selector: "page-broker-list",
  templateUrl: "broker-list.html"
})
export class BrokerListPage {
  brokers: Array<any>;

  constructor(public navCtrl: NavController, public service: BrokerService) {
    service.findAll().then(data => (this.brokers = data));
  }

  openBrokerDetail(broker) {
    this.navCtrl.push(BrokerDetailBoletoPage, broker);
  }
}
