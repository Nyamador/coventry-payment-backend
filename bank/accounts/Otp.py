import requests
import json

def generate_otp(number, expiry=5, sender):
    url = "https://sms.arkesel.com/api/otp/generate"

    data = {
        "expiry": 5,
        "length": 6,
        "medium": "sms",
        "message": f"Use this code as your {sender} OTP, %otp_code%",
        "number": number,
        "sender_id": sender",
        "type": "numeric"
    }

    payload = json.dumps(data)
    headers = {
        'api-key': 'R0plZk5zR3ZPTHJHZU1uSUtHSHo=',
        'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()

def verify_otp(number, otp):
    url = "https://sms.arkesel.com/api/otp/verify"

    {
        "code": otp,
        "number": number"
    }    

    payload = json.dumps(data)
    headers = {
        'api-key': 'R0plZk5zR3ZPTHJHZU1uSUtHSHo=',
        'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()
