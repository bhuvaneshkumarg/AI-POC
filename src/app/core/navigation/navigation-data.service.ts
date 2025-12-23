import { Injectable } from '@angular/core';
import {FuseNavigationItem} from "../../../@fuse/components/navigation";
import {cloneDeep} from "lodash";
import {of} from "rxjs";
import {defaultNavigation} from "./navigation-data";

@Injectable({
  providedIn: 'root'
})
export class NavigationDataService {

  private readonly _compactNavigation: FuseNavigationItem[] = defaultNavigation;
  private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;
  private readonly _futuristicNavigation: FuseNavigationItem[] = defaultNavigation;
  private readonly _horizontalNavigation: FuseNavigationItem[] = defaultNavigation;
  navigation: FuseNavigationItem[] = [];

  constructor(
  ) { }

  getNavElements() {
    // let userName = this._commonService.getCurrentLoginUser().userName;
    this.navigation = [];
    let channelArray: Array<string> = []
    // let i=0;
    this._compactNavigation.forEach((compactNavItem) => {

      // if(channelArray.indexOf(compactNavItem.role) > -1){
      //   //  this._compactNavigation.splice(i,1);
      //
      // }

      this.navigation.push(compactNavItem);
      //i++;
      console.log(compactNavItem)

    });

    const resp = {
      compact: cloneDeep(this._compactNavigation),
      default: cloneDeep(this._defaultNavigation),
      futuristic: cloneDeep(this._futuristicNavigation),
      horizontal: cloneDeep(this._horizontalNavigation)
    };
    // Return the response
    return of(resp) ;

  }
}
