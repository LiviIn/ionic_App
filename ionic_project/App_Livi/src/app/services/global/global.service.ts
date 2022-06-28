import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
// import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isLoading: boolean = false;

  constructor(
    private alertCtrl: AlertController,
    private tostCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  async showAlert(message: string, header?, buttonArray?){
    await this.alertCtrl.create({
      header: header ? header : 'Authentication failed',
      message: message,
      buttons: buttonArray ? buttonArray: ['Okay'],
    })
    .then(alertEl => alertEl.present());
  }

  async showToast(msg, color, position, duration = 3000){
    const toast = await this.tostCtrl.create({
      message: msg,
      duration: duration,
      color: color,
      position: position
    });
    toast.present();
  }

  errorToast(msg?, duration = 4000) {
    this.showToast(
      msg ? msg : 'No Internet Connection',
      'danger',
      'bottom',
      duration
    )
  }

  successToast(msg) {
    this.showToast(msg, 'success','bottom');
  }

  showLoader(msg?, spinner?){
    this.isLoading = true;
    return this.loadingCtrl.create({
      message: msg,
      spinner: spinner? spinner : 'bubbles'
    }).then(res =>{
      res.present().then(() =>{
        if(!this.isLoading){
          res.dismiss().then(() =>{
            console.log('abort presenting');
          })
        }
      })
    }).catch(err =>{
      console.log('show loading error: ', err)
    })
  }

  hideLoader(){
    this.isLoading = false;
    return this.loadingCtrl.dismiss()
    .then(() => console.log('dismissed'))
    .catch(err => console.log('error hide loader: ', err));
  }

  async createModal(options){
    const modal = await this.modalCtrl.create(options);
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    if(data) return data;
  }

  modalDismiss(val?){
    let data: any = val ? val: null;
    console.log('data: ', data)
    this.modalCtrl.dismiss(data);
  }

  getIcon(title) {
    const name = title.toLowerCase();
    switch(name) {
      case 'home': return 'home-outline';
      case 'work': return 'briefcase-outline';
      default: return 'location-outline';
    }
  }
}
