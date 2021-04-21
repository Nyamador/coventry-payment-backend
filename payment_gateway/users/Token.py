from rest_framework.authentication import TokenAuthentication


class PublicKeyToken(TokenAuthentication):
    keyword = "Public_Key"