"""This module has configurations for flask app."""

import logging
import os

CONFIG = {
    "development": "config.DevelopmentConfig",
    "testing": "config.TestingConfig",
    "production": "config.ProductionConfig",
    "default": "config.ProductionConfig"
}


class BaseConfig(object):
    """Base class for default set of configs."""

    DEBUG = False
    TESTING = False
    SECURITY_PASSWORD_HASH = 'pbkdf2_sha512'
    SECURITY_TRACKABLE = True
    LOGGING_FORMAT = "[%(asctime)s] [%(funcName)-30s] +\
                                    [%(levelname)-6s] %(message)s"
    LOGGING_LOCATION = 'web.log'
    LOGGING_LEVEL = logging.DEBUG
    SECURITY_TOKEN_MAX_AGE = 60 * 30
    SECURITY_CONFIRMABLE = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CACHE_TYPE = 'simple'
    SECURITY_PASSWORD_SALT = 'super-secret-stuff-here'
    COMPRESS_MIMETYPES = ['text/html', 'text/css', 'text/xml',
                          'application/json', 'application/javascript']

    WTF_CSRF_ENABLED = False
    COMPRESS_LEVEL = 6
    COMPRESS_MIN_SIZE = 500

    # Change it based on your admin user
    ADMIN_USER = 'admin'
    ADMIN_PASSWORD = 'admin'


class DevelopmentConfig(BaseConfig):
    """Default set of configurations for development mode."""

    DEBUG = True
    TESTING = False
    BASEDIR = os.path.abspath(os.path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'mysql://root:root@127.0.0.1:3307/scheduler'
    SECRET_KEY = 'not-so-super-secret'


class ProductionConfig(BaseConfig):
    """Default set of configurations for prod mode."""

    DEBUG = False
    TESTING = False
    BASEDIR = os.path.abspath(os.path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'mysql://root:root@127.0.0.1:3307/scheduler'
    SECRET_KEY = 'Super-awesome-secret-stuff'


class TestingConfig(BaseConfig):
    """Default set of configurations for test mode."""

    DEBUG = False
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'mysql://root:root@127.0.0.1:3307/scheduler'
    SECRET_KEY = '792842bc-c4df-4de1-9177-d5207bd9faa6'
