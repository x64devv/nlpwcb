This is a demo of a what app chat bot that uses natural language processing. It uses whatsapp-web.js and nlp.js.
whatsapp-web.js uses whats app web under the hood and remember to enable multidevice in your whatsapp. This is just a basic model capable of answering general conversation questions.

to get setup with this project you can follow the following steps.

1. Install whatsapp-web.js library 

    ```zsh
    npm install whatsapp-web.js
    ```

2. Install qrcode scanner to be able to connect the our whatsapp to the bot
    ```zsh
    npm install qrcode-terminal
    ```

3. Install nlp.js
    ```zsh
    npm install @nlpjs/basic
    ```

4. Running the bot 
    ```zsh
    node index.js
    ```


5 Scan qrcode the start a conversation
