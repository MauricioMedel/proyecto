import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'; // Ruta al archivo de entorno

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Método para enviar las credenciales a la API
  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
