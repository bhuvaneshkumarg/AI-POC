import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PdfFileDto} from "./pdf-excel-convertion/input-page/input-page/input-page.component";

@Injectable({
  providedIn: 'root'
})
export class PdfExcelConvertionService {

  private readonly baseUrl = 'http://localhost:8085/api/';

  constructor(private http: HttpClient) { }

  exportExcel(companyName: string, startDate: string, endDate: string) {

    const params = new HttpParams()
        .set('companyName', companyName)
        .set('startDate', startDate)
        .set('endDate', endDate);

    return this.http.get(`${this.baseUrl}/export-excel`, {
      params,
      responseType: 'blob'   // IMPORTANT for file download
    });
  }

  getPdfList(
      companyName: string,
      startDate: string,
      endDate: string
  ): Observable<PdfFileDto[]> {

    const params = new HttpParams()
        .set('companyName', companyName)
        .set('startDate', startDate)
        .set('endDate', endDate);

    return this.http.get<PdfFileDto[]>(this.baseUrl + "pdf-list", { params });
  }

  // pdf.service.ts
  downloadPdf(fileName: string) {
    return this.http.get(
        this.baseUrl + "download",
        {
          params: { fileName },
          responseType: 'blob'
        }
    );
  }

}
