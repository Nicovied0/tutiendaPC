import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface LoginResponse {
    token: string;
    profile:any
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'https://cpu-central-back.vercel.app/api/auth';

    constructor(private http: HttpClient) { }

    register(name: string, email: string, password: string): Observable<any> {
        const body = { name, email, password };
        return this.http.post(`${this.baseUrl}/register`, body);
    }

    async login(email: string, password: string): Promise<LoginResponse> {
        const body = { email, password };

        try {
            const tokenResponse = await this.http.post<LoginResponse>(`${this.baseUrl}/login`, body).toPromise();
            localStorage.setItem('token', tokenResponse!.token);

            const headers = { 'token': `${tokenResponse!.token}` };

            const profileResponse = await this.http.get<LoginResponse>(`${this.baseUrl}/profile`, { headers }).toPromise();
            localStorage.setItem('profile', JSON.stringify(profileResponse?.profile));
            window.location.reload()
            return profileResponse!;
        } catch (error) {
            console.error('Login failed:', error);
            throw error; 
        }
    }

    adminUser() {
        const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')
        if (usuarioLogeado.role === 'admin' || usuarioLogeado.role === 'superAdmin') {
            return true;
        }
        return false;
    }

}
