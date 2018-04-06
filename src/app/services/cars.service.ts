import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService extends DataService {
  constructor(http: HttpClient) {
    super('./../../assets/data/MOCK_DATA.json', http)
  }


}
