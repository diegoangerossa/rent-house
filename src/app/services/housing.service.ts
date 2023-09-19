import { Injectable } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  constructor(private httpClient: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.httpClient.get<HousingLocation[]>(this.url);
  }

  getHousingLocationById(Id: number): Observable<HousingLocation> {
    return this.httpClient.get<HousingLocation>(`${this.url}/${Id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
