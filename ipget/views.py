from django.shortcuts import render
from .forms import GetLinkForm
import requests


def main(request):
    global info
    if request.method == "POST":
        form = GetLinkForm(request.POST)
        ip_address = request.POST['ip']
        response = requests.get(f'https://ipapi.co/{ip_address}/json/').json()
        info = response
        print(info)

    else:
        form = GetLinkForm()
        info = ''

    # My Ip
    def get_ip():
        response = requests.get('https://api64.ipify.org?format=json').json()
        return response["ip"]

    def get_location():
        ip_address = get_ip()
        response = requests.get(f'https://ipapi.co/{ip_address}/json/').json()

        return response

    print(get_location())
    return render(request, './main.html', {"input": form, 'info': info, 'my_ip': get_location()})

