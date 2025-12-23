import { TestBed } from '@angular/core/testing';

import { PdfExcelConvertionService } from './pdf-excel-convertion.service';

describe('PdfExcelConvertionService', () => {
  let service: PdfExcelConvertionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfExcelConvertionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
