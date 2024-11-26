import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL do JSON Server

  constructor(private http: HttpClient) { }

  // Procurar usuário pelo e-mail
  findUserByEmail(email: string): Promise<any | null> {
    const url = `${this.apiUrl}?email=${email}`;

    return new Promise((resolve, reject) => {
      this.http.get<any[]>(url).subscribe({
        next: (users) => resolve(users.length > 0 ? users[0] : null),
        error: (err) => reject(err),
      });
    });
  }

  // Cadastrar um novo usuário
  async registerUser(user: { name: string; email: string; password: string }): Promise<{ message: string, classError: string }> {
    try {
      const existingUser = await this.findUserByEmail(user.email);

      if (existingUser) {
        return { message: 'Usuário já existe.', classError: 'alert-warning' };
      }

      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl, user).subscribe({
          next: () => resolve({ message: 'Usuário cadastrado com sucesso!', classError: 'alert-success' }),
          error: (err) => reject('Erro ao registrar usuário.'),
        });
      });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      return { message: 'Erro ao registrar usuário.', classError: 'alert-danger' };
    }
  }
}
