import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private histories: string[];
  private maxHistory: number = 10;

  constructor() { }

  addHistory(address: string): void {
    if (this.histories.length < this.maxHistory) {
      this.histories.push(address);
    }
    else {
      this.removeFirstHistory();
      this.histories.push(address);
    }
  }

  removeFirstHistory(): void {
    this.histories.shift();
  }

  getLastHistory(): string {
    return this.histories[this.histories.length - 1];
  }
}
