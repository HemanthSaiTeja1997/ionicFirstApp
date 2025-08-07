import { Component, OnInit } from '@angular/core';
import { IonCard,IonItem ,IonThumbnail,IonLabel,IonButton,IonCol,IonText,IonRow,IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  standalone:true,
  imports: [IonCard,IonItem,IonThumbnail,IonLabel,IonRow,IonText,IonCol ,IonButton,IonIcon]
})
export class MemberComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
