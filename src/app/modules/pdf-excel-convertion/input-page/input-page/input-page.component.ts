import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {PdfExcelConvertionService} from "../../../pdf-excel-convertion.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

export interface PdfFileDto {
  companyName: string;
  fileDate: string;
  fileName: string;
  gcsPath: string;
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})

export class InputPageComponent implements OnInit {

  clientList = [
    { value: 'STG', label: 'System Technology Group' },
    { value: 'Mahindra', label: 'Mahindra' },
    { value: 'Getronics', label: 'Getronics' },
    { value: 'Capgemini', label: 'Capgemini' }
  ];

  selectedValue: string = this.clientList[0].value;
  fromDate: Date = new Date();
  toDate: Date = new Date();
  pdfList: PdfFileDto[] = [];
  loading = false;
  showPdfList = false;

  progressValue = 0;
  progressMessage = '';



  constructor(private datePipe: DatePipe,private pdfExcelService : PdfExcelConvertionService) { }

  ngOnInit(): void {
    this.showPdfList = false;
  }



  start(){
    this.startProgress();
    const formattedFromDate = this.datePipe.transform(this.fromDate, 'yyyy-MM-dd');
    const formattedToDate = this.datePipe.transform(this.toDate, 'yyyy-MM-dd');

    console.log(this.selectedValue);
    console.log(formattedFromDate);
    console.log(formattedToDate);

    this.loading = true;
    this.showPdfList = true;

    this.progressMessage = 'Fetching PDF files...';

    this.pdfExcelService.getPdfList(
        this.selectedValue,               // companyName
        formattedFromDate, formattedToDate        // endDate
    ).subscribe({
      next: (res) => {
        this.progressValue = 50;
        this.progressMessage = 'PDF files fetched successfully';
        this.pdfList = res;
        this.loading = false;


        this.progressValue = 80;
        this.progressMessage = 'Excel conversion completed';

        this.finishProcess();
      },
      error: () => {
        this.loading = false;
        this.resetProgress();
      }
    });





  }

  resetProgress(): void {
    this.progressValue = 0;
    this.progressMessage = 'Process failed';
    this.showPdfList = false;
  }

  startProgress(): void {
    this.progressValue = 10;
    this.progressMessage = 'Starting process...';
  }

  finishProcess(): void {
    setTimeout(() => {
      this.progressValue = 100;
      this.progressMessage = 'Process completed successfully';
    }, 500);
  }


  download(file: PdfFileDto): void {

    this.pdfExcelService.downloadPdf(file.fileName).subscribe({
      next: (blob) => {

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = file.fileName;   // same name as backend
        a.click();

        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Download failed', err);
      }
    });
  }

}
