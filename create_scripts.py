import datetime
import random as r


def stringgenerator(length):
    return ''.join([chr(r.randint(65, 90)) for _ in xrange(length)])


def boolgenerator():
    return r.getrandbits(1)


def timegenerator():
    return datetime.time(r.randint(0, 23), r.randint(0, 59), r.randint(0, 59))


def durationgenerator():
    return datetime.timedelta(seconds=r.randint(3600, 86400))
