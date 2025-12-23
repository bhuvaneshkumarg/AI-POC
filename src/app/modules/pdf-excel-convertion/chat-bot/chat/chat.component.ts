import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../../chat-service.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: any[] = [];
  userInput = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ from: 'user', text });
    this.userInput = '';

    this.chatService.getReply(text).subscribe( res => {
      this.messages.push({ from: 'bot', text: res });
    });
  }

}
