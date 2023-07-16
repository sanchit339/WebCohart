# implemented pyhton code too 🤞 

import urllib.request
import json

def log_response_body(json_body):
    print(json_body)

def callback(response):
    json_response = json.loads(response.read().decode('utf-8'))
    log_response_body(json_response)

url = 'http://localhost:3000/handleSum?counter=100'
req = urllib.request.Request(url, method='GET')

with urllib.request.urlopen(req) as response:
    callback(response)
