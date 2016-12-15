import logging
from flask import request
from flask_security import auth_token_required
from gevent.wsgi import WSGIServer

from factory import create_app, create_seed

logger = logging.getLogger(__name__)
app = create_app()


# Flask(__name__)


@app.before_first_request
def init():
    create_seed()


@app.route('/')
def hello_world():
    return "Hallo"


@app.route("/testauth")
@auth_token_required
def testauth():
    return 'sollte nicht sein'


@app.route('/employee/add', methods=['POST'])
def add_employee():
    print request.form

    return "Adding %s" % str(request.form)


@app.route('/employee/edit', methods=['POST'])
def edit_employee():
    return "Editing finished"


@app.route('/employee/edit/<int:id>', methods=['GET'])
def edit_employee_id(id):
    return "Editing %i" % id


@app.route('/employee/delete/<int:id>', methods=['POST'])
def delete_employee(id):
    # print request.
    return "Deleting %i" % id


def main():
    """Main entry point of the app."""
    try:
        http_server = WSGIServer(('127.0.0.1', 8081),
                                 app,
                                 log=logging,
                                 error_log=logging)

        http_server.serve_forever()
    except Exception as exc:
        logger.error(exc.message)
    finally:
        # get last entry and insert build appended if not completed
        # Do something here
        pass
