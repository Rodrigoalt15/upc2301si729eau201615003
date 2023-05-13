import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ParticipantService } from 'src/app/marathon/services/participant.service';
import { MarathonCenterService } from 'src/app/marathon/services/marathon-center.service';
import { Center } from 'src/app/marathon/models/center.model';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'centerName', 'ranking', 'recordTime'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private participantService: ParticipantService, private marathonCenterService: MarathonCenterService) {
  }

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this.participantService.getParticipants().subscribe(participants => {
      this.marathonCenterService.getMarathonCenters().subscribe(centers => {
        participants.forEach(participant => {
          const center = centers.find((c: Center) => c.id === participant.centerId);
          participant.centerName = center ? center.name : '';
        });

        this.dataSource = new MatTableDataSource(participants);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}