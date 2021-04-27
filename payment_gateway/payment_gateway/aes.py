from Crypto.Cipher import AES

KEY = b'\xd0\x9cNs\x9c\x08c\xd7\x81h\x08\xdd\xc8b5\xf8' #16 byte long key (os.urandom())

def encrypt_text(data):
    cipher = AES.new(KEY, AES.MODE_EAX)
    global nonce 
    nonce = cipher.nonce
    data = str(data)
    ciphertext, tag = cipher.encrypt_and_digest(str.encode(data))
    return {"ciphertext": ciphertext, "tag": tag}

def decrypt_text(ciphertext, tag):
    cipher = AES.new(KEY, AES.MODE_EAX, nonce=nonce)
    plaintext = cipher.decrypt(ciphertext)
    return plaintext.decode()
