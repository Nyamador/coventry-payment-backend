import string
import random


def random_string_gen(size=4, chars=string.ascii_lowercase + string.digits):
    """
		params: size : Size of randomly generated string
				chars : abcdefghijklmnopqrstuvwxyz0123456789
	"""
    return "".join(random.choice(chars) for _ in range(size))
