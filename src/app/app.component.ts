import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './modules/spinner.service';
import {Router} from "@angular/router";

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
isSpinnerVisible$: Observable<boolean>;

constructor(private spinnerService: SpinnerService, private router: Router) {
    this.isSpinnerVisible$ = this.spinnerService.spinnerVisibility$;
}

    ngOnInit(): void {
        this.router.navigate(['/']);
    }
}