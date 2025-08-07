import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonSelect, IonToolbar, IonButtons, IonButton, IonSearchbar, IonCol, IonSelectOption, IonRow, IonList, IonItemDivider } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle,chevronForwardCircle, menuOutline, notifications } from 'ionicons/icons';
import { MemberComponent } from "src/app/components/member/member.component";
@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, IonHeader, IonSearchbar, IonSelect, IonRow, IonCol, IonSelectOption, IonTitle, IonButtons, IonButton, IonToolbar, CommonModule, FormsModule, IonIcon, IonSearchbar, IonCol, IonSelect, IonSelectOption, IonList, IonItemDivider, MemberComponent]
})
export class MembersPage implements OnInit {

  constructor() {
    addIcons({
      menuOutline,
      notifications,
      addCircle,
      chevronForwardCircle

    })
  }

  ngOnInit() {
  }

}
