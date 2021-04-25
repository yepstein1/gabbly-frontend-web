
import './App.css';
import React, {useState} from 'react';
function App() {
    const [text, setText] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [language, setLanguage] = useState("")

    return (
        <div className="App">
            <label for="textmessage">Enter Text you want to send</label> &nbsp;
            <input type="text" class="textmessage" value={text} onChange={(e) => setText(e.target.value)}></input>
            <br/>
            <label for="fromNumber"> Enter Number you want to send message from</label> &nbsp;
            <input type="text" class="fromNumber" value={from} onChange={(e) => setFrom(e.target.value)}></input>

            <br/>
            <label for="toNumber">Enter Number you want message sent to</label> &nbsp;
            <input type="text" class="toNumber" value={to} onChange={(e) => setTo(e.target.value)}></input>
            <br/>
            <label for="languageSelect">Select language</label> &nbsp;
            <select class="languageSelect" onChange={(e) => setLanguage(e.target.value)}>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="ar">Arabic</option>
                <option value="he">Hebrew</option>
            </select>

            <button onClick={() => {
                const data = {
                    'text': text,
                    'from': from,
                    'to': to,
                    'language': language
                }
                fetch("https://d034nfeoml.execute-api.us-east-1.amazonaws.com/myStage/sam-app-helloFromLambdaFunction-1W88HQIV5IN",
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }
                ).then(response => response.json()).then(data => {
                    console.log('Success:', data);
                })
                    .catch((error) => {
                        console.error('Error:', error);
                    })


            }

            }>Send and translate
            </button>


        </div>
  );
}

export default App;
