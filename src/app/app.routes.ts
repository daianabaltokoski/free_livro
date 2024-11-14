import { Routes } from '@angular/router';
import { MaisLidosComponent } from './mais-lidos/mais-lidos.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { ComoLerComponent } from './como-ler/como-ler.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { LoginComponent } from './login/login.component';
import { LivroComponent } from './livro/livro.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'mais-lidos', component: MaisLidosComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'como-ler', component: ComoLerComponent },
  { path: 'pesquisar', component: PesquisarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'livro/:id', component: LivroComponent }
];
