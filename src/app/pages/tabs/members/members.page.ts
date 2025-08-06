import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle,IonSelect, IonToolbar, IonButtons, IonButton, IonSearchbar, IonCol, IonSelectOption, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, menuOutline,notifications } from 'ionicons/icons';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonSearchbar,IonSelect,IonRow,IonCol,IonSelectOption, IonTitle, IonButtons, IonButton, IonToolbar, CommonModule, FormsModule, IonIcon, IonSearchbar, IonCol, IonSelect, IonSelectOption]
})
export class MembersPage implements OnInit {

  constructor() {
    addIcons({
      menuOutline,
      notifications,
      addCircle
    })
   }

  ngOnInit() {
  }

}
