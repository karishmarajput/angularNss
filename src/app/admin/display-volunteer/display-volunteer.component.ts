import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpAdminService } from 'src/services/http-admin.service';

interface Volunteer {
  id: string;
  vec: string;
  name: string;
  DOB: string;
}

@Component({
  selector: 'app-display-volunteer',
  templateUrl: './display-volunteer.component.html',
  styleUrls: ['./display-volunteer.component.css']
})
export class DisplayVolunteerComponent implements OnInit {
  volunteer: Volunteer[] = [];
  filteredVolunteers: Volunteer[] = [];
  pageSize = 10;
  currentPage = 0;
  searchText = '';

  constructor(private http: HttpClient, private router: Router,private HttpAdminService: HttpAdminService,) {}

  ngOnInit(): void {
    this.getVolunteers();
  }

  goToAddVolunteer(): void {
    this.router.navigate(['/adminDashboard/addVolunteer']);
  }

  getVolunteers(): void {
    this.HttpAdminService.getVolunteers().subscribe(
      (response: any) => {
        this.volunteer = response.data.volunteers;
        this.filteredVolunteers = this.volunteer.slice();
        this.currentPage = 0;
      },
      (error: any) => {
        console.log('Error: ', error);
      }
    );
  }

  getPaginatedVolunteers(): Volunteer[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredVolunteers.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredVolunteers.length / this.pageSize);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.getTotalPages() - 1) {
      this.currentPage++;
    }
  }

  filterVolunteers(): void {
    const searchText = this.searchText.toLowerCase().trim();
    if (searchText === '') {
      this.filteredVolunteers = this.volunteer.slice();
    } else {
      this.filteredVolunteers = this.volunteer.filter(
        volunteer =>
          volunteer.vec.toLowerCase().includes(searchText) ||
          volunteer.name.toLowerCase().includes(searchText)
      );
    }
    this.currentPage = 0;
  }

  clearSearch(): void {
    this.searchText = '';
    this.filteredVolunteers = this.volunteer.slice();
    this.currentPage = 0;
  }
}
