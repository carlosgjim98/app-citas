import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { codeErrors } from 'src/app/utils/utils';
import { Camera, CameraResultType } from '@capacitor/camera';
import { PushNotifications } from '@capacitor/push-notifications';
import { ActionSheetController, NavController } from '@ionic/angular';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    standalone: false
})
export class ProfilePage implements OnInit {

  public user: User;
  public form: FormGroup;
  public base64img: any;
  public isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private utilities: UtilitiesService,
    public auth: AuthenticationService,
    public actionsheetCtrl: ActionSheetController,
    private navCtrl : NavController,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      avatar: new FormControl('')
    });

    this.apiService.getEntity('user').subscribe((user: User) => {
      this.user = user;
      this.form.patchValue(user);
      this.isLoading = false;
    }, error => {
      this.utilities.showToast("Error obteniendo el usuario");
      this.isLoading = false;
    });


  }



  public submitForm(): void {
    this.apiService.updateUser(this.form.value).subscribe((user: User) => {
      this.utilities.showToast('Usuario actualizado correctamente');
    }, (error) => {
      this.utilities.showToast(codeErrors(error));
    });
  }

  redirect(){
    this.navCtrl.navigateForward("/configurar-mis-datos")
  }

  async adjuntarImagen() {

    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Seleccionar archivo',
      mode: 'ios',
      buttons: [
        {
          text: 'Galería',

          handler: () => {
            this.utilities.adjuntarImagen(true).then((response)=>{
              console.log("RESPONSE ADD IMAGE CHAT", response);

              this.user.avatar = response.url;
              this.base64img = response.blob;
              
            }, (error) =>{

            });
          }
        },
        {
          text: 'Cámara',
          handler: () => {
            this.utilities.adjuntarImagenCamera(true).then((response)=>{
              console.log("RESPONSE ADD IMAGE CAMERA CHAT", response);
              this.user.avatar = response.url;
              this.base64img = response.blob;
            }, (error) =>{
              
            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
