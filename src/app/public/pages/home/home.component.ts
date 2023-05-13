import { Component, OnInit } from '@angular/core';
import { MarathonCenterService } from 'src/app/marathon/services/marathon-center.service';
import { ParticipantService } from 'src/app/marathon/services/participant.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  winner: any;

  constructor(private participantService: ParticipantService,
    private marathonCenterService: MarathonCenterService) { }

  ngOnInit(): void {
    this.getWinner();
  }

  getWinner() {
    this.participantService.getParticipants().subscribe((participants) => {
      const winner = participants.find((participant) => participant.ranking === 1);

      if (winner) {
        this.marathonCenterService.getMarathonCenter(winner.centerId).subscribe((center) => {
          winner.centerName = center.name;
          this.winner = winner;
        });
      }
    });
  }
}