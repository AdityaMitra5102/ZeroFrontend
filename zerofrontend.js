let metaTag = document.getElementsByTagName('ai')[0];
let text = metaTag.getAttribute('prompt');

let metaTag2 = document.getElementsByTagName('gemini')[0];
let AIapiKey = metaTag2.getAttribute('key');
const instruct="Give the output as a single file with inline HTML, JS and CSS only. Give only the code. No explanation or any other text is needed."

let formData = {"contents":[{"parts":[{"text":instruct},{"text":text}]}]};

const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="+AIapiKey;

      fetch(url,
      {
      headers: {"Content-Type": "application/json"},
       body: JSON.stringify(formData),
        method: "post" 
      }).then(function (response) {
          return response.json();
        })
        .then(function (text) {
        	const text2=text["candidates"][0]["content"]["parts"][0]["text"];
        	let lines=text2.split('\n');
        	lines.shift();
        	lines.pop();
        	const text3=lines.join('\n');
          document.body.innerHTML=text3;
        	});
