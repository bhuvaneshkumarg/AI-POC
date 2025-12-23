import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  getReply(message: string) {
    const body = {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    };

    return this.http.post<any>(this.apiUrl, body, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    })
        .pipe(
            map(res => res.choices[0].message.content)
        );
  }
}
