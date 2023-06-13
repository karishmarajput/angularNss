import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Event {
  id: string;
  name: string;
  eventDate: string;
  imagePath: string;
  content: string;
  category: string;
  noOfBeneficiar: number;
}

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];

  pageSize = 10;
  currentPage = 0;
  searchText = '';
  selectedCategory = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getEvents();
  }

  goToAddEvent() {
    this.router.navigate(['/adminDashboard/addEvent']);
  }

  getEvents() {
    this.http.get('http://localhost:3000/api/events').subscribe(
      (response: any) => {
        this.events = response.data.events;
        this.filteredEvents = this.events.slice();
      },
      (error: any) => {
        console.log('Error: ', error);
      }
    );
  }

  getPaginatedEvents(): Event[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredEvents.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredEvents.length / this.pageSize);
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

  filterEvents(): void {
    const searchText = this.searchText.toLowerCase().trim();
    const categoryFilter = this.selectedCategory.toLowerCase().trim();

    this.filteredEvents = this.events.filter(event => {
      const nameMatches = event.name.toLowerCase().includes(searchText);
      const eventDateMatches = event.eventDate.toLowerCase().includes(searchText);
      const categoryMatches = event.category.toLowerCase().includes(categoryFilter);

      if (searchText === '' && categoryFilter === '') {
        return true;
      } else if (searchText === '' && categoryFilter !== '') {
        return categoryMatches;
      } else if (searchText !== '' && categoryFilter === '') {
        return nameMatches || eventDateMatches;
      } else {
        return (nameMatches || eventDateMatches) && categoryMatches;
      }
    });

    this.currentPage = 0;
  }

  clearSearch(): void {
    this.searchText = '';
    this.selectedCategory = '';
    this.filteredEvents = this.events.slice();
    this.currentPage = 0;
  }

  getUniqueCategories(): string[] {
    const categories: string[] = [];
    this.events.forEach(event => {
      if (!categories.includes(event.category)) {
        categories.push(event.category);
      }
    });
    return categories;
  }
}
