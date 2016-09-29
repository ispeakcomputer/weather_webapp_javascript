import requests

url = 'http://ip-api.com/json'

response = requests.get(url)

print response.text
