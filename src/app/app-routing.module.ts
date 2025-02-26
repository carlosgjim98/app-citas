import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then(m => m.CoverPagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then(m => m.CoverPagePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./pages/idiomas/idiomas.module').then(m => m.IdiomasPageModule)
  },
  {
    path: 'interior-chat',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule)
  },
  {
    path: 'interior-chat/:chat_id',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule)
  },
  { 
    path: 'interior-chat/:id_chat/:nombre_chat/:ultimo_mensaje', 
    //canActivate: [AuthGuard], 
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'test-plugins',
    loadChildren: () => import('./pages/test-plugins/test-plugins.module').then(m => m.TestPluginsPageModule)
  },
  {
    path: 'photo-crop',
    loadChildren: () => import('./pages/utils/photo-crop/photo-crop.module').then(m => m.PhotoCropPageModule)
  },
  {
    path: 'image-view',
    loadChildren: () => import('./pages/utils/image-view/image-view.module').then(m => m.ImageViewPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./pages/reminder/reminder.module').then(m => m.ReminderPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'eulas',
    loadChildren: () => import('./pages/eulas/eulas.module').then(m => m.EulasPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  
  {
    path: 'resultados',
    loadChildren: () => import('./pages/resultados/resultados.module').then(m => m.ResultadosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'suscripcion',

    loadChildren: () => import('./pages/suscripcion/suscripcion.module').then(m => m.SuscripcionPageModule)
  },
  {
    path: 'seleccion-fecha-resultados',
    loadChildren: () => import('./pages/seleccion-fecha-resultados/seleccion-fecha-resultados.module').then( m => m.SeleccionFechaResultadosPageModule)
  },
  {
    path: 'confirmar-cita',
    loadChildren: () => import('./pages/confirmar-cita/confirmar-cita.module').then( m => m.ConfirmarCitaPageModule)
  },
{
  path: 'suscripcion',
    loadChildren: () => import('./pages/suscripcion/suscripcion.module').then( m => m.SuscripcionPageModule)
  },
  {
    path: 'mis-citas',
    loadChildren: () => import('./pages/mis-citas/mis-citas.module').then( m => m.MisCitasPageModule)
  },
  {
    path: 'detalle-cita',
    loadChildren: () => import('./pages/detalle-cita/detalle-cita.module').then( m => m.DetalleCitaPageModule)

  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'configurar-mis-datos',
    loadChildren: () => import('./pages/configurar-mis-datos/configurar-mis-datos.module').then(m => m.ConfigurarMisDatosPageModule)
  },
  {
    path: 'mensajes-chat',
    loadChildren: () => import('./pages/mensajes-chat/mensajes-chat.module').then( m => m.MensajesChatPageModule)
  },
  {
    path: 'condiciones-venta',
    loadChildren: () => import('./pages/condiciones-venta/condiciones-venta.module').then( m => m.CondicionesVentaPageModule)
  },
  {
    path: 'formulario-de-compatibilidad',
    loadChildren: () => import('./pages/formulario-de-compatibilidad/formulario-de-compatibilidad.module').then( m => m.FormularioDeCompatibilidadPageModule)
  },
  {
    path: 'mi-suscripcion',
    loadChildren: () => import('./pages/mi-suscripcion/mi-suscripcion.module').then( m => m.MiSuscripcionPageModule)
  },
  {
    path: 'usuarios-bloqueados',
    loadChildren: () => import('./pages/usuarios-bloqueados/usuarios-bloqueados.module').then( m => m.UsuariosBloqueadosPageModule)
  },
  {
    path: 'condiciones-de-venta',
    loadChildren: () => import('./pages/condiciones-de-venta/condiciones-de-venta.module').then( m => m.CondicionesDeVentaPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },









  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
