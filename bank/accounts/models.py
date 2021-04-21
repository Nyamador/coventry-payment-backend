from django.db import models
import uuid

import string
import random


def random_string_gen(size=4, chars=string.ascii_lowercase + string.digits):
    """
		params: size : Size of randomly generated string
				chars : abcdefghijklmnopqrstuvwxyz0123456789
	"""
    return "".join(random.choice(chars) for _ in range(size))


class Otp(models.Model):
    reference = models.UUIDField(default=uuid.uuid4, editable=False)
    value = models.CharField("OTP Value", default=random_string_gen,max_length=5)
    expiry = models.PositiveSmallIntegerField("Expiry in Minutes", default=5)
    date_created = models.DateField("Date Created", auto_now_add=True)

    def __str__(self):
        return str(self.reference)

