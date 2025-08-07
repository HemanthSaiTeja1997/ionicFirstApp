import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonItem, IonThumbnail, IonLabel, IonButton, IonCol, IonText, IonRow, IonIcon } from "@ionic/angular/standalone";
import { Observable } from 'rxjs';
import { Member } from 'src/app/interfaces/member.interface';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  standalone: true,
  imports: [IonCard, IonItem, IonThumbnail, IonLabel, IonRow, IonText, IonCol, IonButton, IonIcon,CommonModule]
})
export class MemberComponent implements OnInit {

  listOfMembers:Member[]=[];
  constructor(private memberService: MemberService) { }

  ngOnInit() :void{ 
    this.getListOfMembers();    
  }

  getListOfMembers(): void {
   this.memberService.apiRequest<Member[]>('GET').subscribe({
    next:(res)=>{
      this.listOfMembers=res;
    },
  error: (err) => {
    console.error("Error fetching members", err);
  }
   })
  
  }
}
