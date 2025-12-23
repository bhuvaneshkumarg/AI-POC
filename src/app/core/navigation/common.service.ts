// import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
//
// @Injectable({
//   providedIn: 'root'
// })
//
// export interface UserDetails {
//   userId: Number;
//   roleId: string;
//   userName:string;
//   roleName:string;
//   loginId:string;
//   fullLegalName:string;
// }
// export class CommonService {
//
//   constructor(private http: HttpClient) {
//
//   }
//
//   // getCurrentLoginUser():any{
//   //   const userDetails:UserDetails ={
//   //     userId: 0,
//   //     roleId: null,
//   //     userName:sessionStorage.getItem('userName') ?? '',
//   //     roleName:sessionStorage.getItem('roleName') ?? '',
//   //     loginId:sessionStorage.getItem('userName') ?? '',
//   //     fullLegalName:sessionStorage.getItem('fulllegalName') ?? '',
//   //   };
//   //   let currentSessionToken = this.currentSessionToken();
//   //   if (currentSessionToken) {
//   //     let dd=  currentSessionToken.split( ".",2)
//   //     const currentUser = JSON.parse(atob(dd[1]))
//   //     if(currentUser && currentUser.userId)
//   //       userDetails.userId = currentUser.userId
//   //     userDetails.userName = currentUser.userId;
//   //     userDetails.roleId = currentUser.roleId
//   //     userDetails.fullLegalName=currentUser.name
//   //     userDetails.loginId = currentUser.userId
//   //   }
//   //   return userDetails;
//   // }
//   // public currentSessionToken(): any {
//   //   let currentTokenId = (sessionStorage.getItem('hrms.tokenId'));
//   //   if (currentTokenId) {
//   //     return currentTokenId;
//   //   } else {
//   //     return null;
//   //   }
//   //
//   // }
//   //
//   // formatDate(date) {
//   //   var monthNames = [
//   //     "Jan", "Feb", "Mar",
//   //     "Apr", "May", "Jun", "Jul",
//   //     "Aug", "Sep", "Oct",
//   //     "Nov", "Dec"
//   //   ];
//   //
//   //   var day = date.getDate();
//   //   var monthIndex = date.getMonth();
//   //   var year = date.getFullYear();
//   //   return monthNames[monthIndex] + ' ' + day + ', ' + year;
//   // }
//   //
//   // getFirstDateOfPreviousMonth(): Date {
//   //   let today = new Date();
//   //   today.setDate(1)
//   //   today.setMonth(today.getMonth() - 1)
//   //   return today;
//   // }
//   //
//   // getTimeFromDate(date: Date) {
//   //   // var date = new Date(timestamp * 1000);
//   //   if (date) {
//   //     const hours = date.getHours();
//   //     const minutes = date.getMinutes();
//   //     const seconds = date.getSeconds();
//   //     return this.pad(hours) + ':' + this.pad(minutes) + ':' + this.pad(seconds);
//   //   } else {
//   //     return null;
//   //   }
//   // }
//   //
//   // convertTime12to24(time12h: String) {
//   //   // var date = new Date(timestamp * 1000);
//   //   const [time, modifier] = time12h.split(' ');
//   //   let [hours, minutes] = time.split(':');
//   //   if (hours === '12') {
//   //     hours = '00';
//   //   }
//   //   if (modifier === 'PM') {
//   //     hours = (parseInt(hours, 10) + 12).toString();
//   //   }
//   //   return `${hours}:${minutes}`;
//   // }
//   //
//   // convertTime24to12(time: String) {
//   //   // var date = new Date(timestamp * 1000);
//   //   let hour = parseInt((time.split(':'))[0])
//   //   let min = (time.split(':'))[1]
//   //   let part = hour > 12 ? 'pm' : 'am';
//   //   min = (min+'').length == 1 ? `0${min}` : min;
//   //   hour = hour > 12 ? (hour - 12) : hour;
//   //   return `${(hour+'').length == 1 ? `0${hour}` : hour}:${min} ${part}`
//   // }
//   //
//   //
//   // pad(num) {
//   //   return ("0" + num).slice(-2);
//   // }
//   // setTimeFromDate(value: string) {
//   //   if (value) {
//   //     const date = new Date();
//   //     const time = value.split(':');
//   //     date.setHours(parseInt(time[0]), parseInt(time[1]), parseInt(time[2]));
//   //     return date;
//   //   } else {
//   //     return null;
//   //   }
//   // }
//   //
//   // formatSQlDate(date) {
//   //   if (date !== '') {
//   //     let day = date.getDate();
//   //     let month = date.getMonth() + 1;
//   //     day = (day < 10) ? '0' + day : day;
//   //     month = (month < 10) ? '0' + month : month;
//   //     const year = date.getFullYear();
//   //     return year + '-' + month + '-' + day;
//   //   } else {
//   //     return '';
//   //   }
//   // }
//   //
//   // formatZipcode5(value) {
//   //   if (value && value != 0) {
//   //     value = '00000' + value;
//   //     return value.substring(value.length - 5, value.length);
//   //   } else {
//   //     return '';
//   //   }
//   // }
//   //
//   // formatZipcode4(value) {
//   //   if (value && value != 0) {
//   //     value = '00000' + value;
//   //     return value.substring(value.length - 4, value.length);
//   //   } else {
//   //     return '0000';
//   //   }
//   // }
//   //
//   // formatDateWithTime(date) {
//   //
//   //   var monthNames = [
//   //     "Jan", "Feb", "Mar",
//   //     "Apr", "May", "Jun", "Jul",
//   //     "Aug", "Sep", "Oct",
//   //     "Nov", "Dec"
//   //   ];
//   //
//   //   var day = date.getDate();
//   //   var monthIndex = date.getMonth();
//   //   var year = date.getFullYear();
//   //   var hour = date.getHours();
//   //   if (hour.toString().length < 2) {
//   //     hour = '0' + hour;
//   //   }
//   //   var minute = date.getMinutes();
//   //   if (minute.toString().length < 2) {
//   //     minute = '0' + minute;
//   //   }
//   //   var sec = date.getSeconds();
//   //   if (sec.toString().length < 2) {
//   //     sec = '0' + sec;
//   //   }
//   //   return monthNames[monthIndex] + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ' :' + sec;
//   // }
//   //
//   //
//   // //conversion
//   // appendDecimalandCommaFormat(value):any{
//   //   if (value) {
//   //     let cc = value.toString().replaceAll(',', '')
//   //     const fxd  = Number(cc).toFixed(2);
//   //     if (!isNaN(Number(fxd))) {
//   //       return  fxd.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
//   //     }else{
//   //       const decimal = 0;
//   //       //  this.hrmsMessageBarService.showError('Please enter the valid amount')
//   //       return decimal.toFixed(2);
//   //     }
//   //   } else {
//   //     const decimal = 0;
//   //     return decimal.toFixed(2);
//   //   }
//   // }
//   // removeDecimalandCommaFormat(formattedAmount){
//   //   if (formattedAmount) {
//   //     return (formattedAmount + '').replace(/[^0-9.-]+/g, "")
//   //   }else{
//   //     return formattedAmount
//   //   }
//   // }
// }
