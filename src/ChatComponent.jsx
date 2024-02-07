import React, { useState, useEffect } from 'react';
import './ChatComponent.css'; // スタイルシートをインポート

function ChatComponent() {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState(''); // 入力されたメッセージのステート
  const [isExpanded, setIsExpanded] = useState(false); // チャットウィンドウの表示状態
  const [isLoading, setIsLoading] = useState(false); // ローディング状態のステート

  useEffect(() => {
    const newWs = new WebSocket('wss://m4xpu5zuwa.execute-api.ap-northeast-1.amazonaws.com/production/');
    
    newWs.onopen = (event) => {
      console.log('Connection opened:', event);
      setWs(newWs); // 接続が開いたらステートを更新
    };

    newWs.onmessage = (event) => {
      setIsLoading(false); // ローディング状態をfalseに設定
      console.log('Message received:', event.data);
      try {
        const receivedMessage = event.data; // メッセージをパース
        setMessages(prevMessages => [...prevMessages, receivedMessage]);
      } catch (error) {
        console.error('Failed to parse the message:', error);
      }
    };

    newWs.onerror = (event) => {
      console.error('WebSocket error:', event);
    };

    newWs.onclose = (event) => {
      console.log('Connection closed:', event);
      setWs(null); // 接続が閉じたらステートをクリア
    };

    return () => {
      if (newWs.readyState === WebSocket.OPEN) {
        newWs.close();
      }
    };
  }, []);

  const sendMessage = (messageContent) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      setIsLoading(true); // メッセージ送信時にローディング状態をtrueに設定
      const messageToSend = JSON.stringify({
        action: 'sendMessage',
        data: [{
          role: "user",
          content: messageContent
        }]
      });
      ws.send(messageToSend);
      // 送信したメッセージをmessagesステートにも追加します。
      setMessages(prevMessages => [...prevMessages, messageContent]);
      setInputMessage(''); // 送信後に入力フィールドをクリア
    }
  };

  const handleSendMessage = () => {
    sendMessage(inputMessage); // ユーザーが入力したメッセージを送信
    setInputMessage(''); // 送信後に入力フィールドをクリア
  };

  const handleMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <div className={`chat-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={() => setIsExpanded(!isExpanded)} className="toggle-button">
        {isExpanded ? '▼ チャットを閉じる' : '▲ ChatGPT'}
      </button>
      {isLoading && <div className="loading">考え中...</div>}
      {isExpanded && (
        <div>
          <div className="messages-list">
            {messages.map((message, index) => (
              <div key={index} className="message">{message}</div>
            ))}
          </div>
          <div className="message-input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={handleMessageChange}
              placeholder="メッセージを入力..."
              className="message-input"
            />
            <button onClick={handleSendMessage} className="send-button">送信</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatComponent;