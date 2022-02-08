import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public getData(key: string): [] {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  public setData(key: string, data: object = {}): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
