import { Component, OnInit, ViewChild } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { QRcodeService } from './qrcode.service';
import {Subscription} from '../subscription/subscription';
import { User } from '../registration/User1';
import {TicketService} from '../ticket/ticket.service';
import {TicketComponent} from '../ticket/ticket.component';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRcodeComponent implements OnInit {

  scannedData:String;
  subs=new Subscription();
  valid:string;
  hidee:boolean;
  user=new User();
  cam:boolean;
  constructor(private QRcodeService:QRcodeService,private TicketService:TicketService) {
      
    
   }

  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ; 

  ngOnInit() {
    this.scancode();
    
  }

    scancode(){
      this.cam=false;
      this.hidee=true;
      this.valid=null;
      this.qrScannerComponent.getMediaDevices().then(devices => {
        console.log(devices);
        const videoDevices: MediaDeviceInfo[] = [];
        for (const device of devices) {
            if (device.kind.toString() === 'videoinput') {
                videoDevices.push(device);
            }
        }
        if (videoDevices.length > 0){
            let choosenDev;
            for (const dev of videoDevices){
                if (dev.label.includes('front')){
                    choosenDev = dev;
                    break;
                }
            }
            if (choosenDev) {
                this.qrScannerComponent.chooseCamera.next(choosenDev);
            } else {
                this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
            }
        }
    });
  
    this.qrScannerComponent.capturedQr.subscribe(result => {
        console.log(result);
        this.verifySubscribption(result);
  
    },(err)=>{
      console.log("error reading");
    });

    }


    verifySubscribption(data:string){
      this.QRcodeService.verifysubscription(data).subscribe((res)=>{

          if(res.text()==""){
            this.cam=true;
            this.valid="Not Valid";

          } else 
          {
            this.user=res.json();
            this.valid="Valid";
            this.hidee=false;
            this.cam=true;
          }
          
      },(err)=>{
          console.log(err);
          this.cam=true;
          this.valid="Not Valid";
      });

    }
  }

