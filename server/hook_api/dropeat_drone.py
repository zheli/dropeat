import logging
import os
import time
from datetime import datetime
from pyadrudino_serial import CommandManager

release_degree = "80"
hook_degree = "180"

class DroneHook(object):
    droped = False
    status = None
    timestamp = None
    logger = logging.getLogger(__name__)

    def __init__(self):
        current_path = os.path.dirname(os.path.realpath(__file__))
        with open(os.path.join(current_path, 'duo_port'), 'r') as content_file:
            duo_port = content_file.read()
        self.cm = CommandManager(duo_port, 9600)
        self.cm.send_cmd(hook_degree)
        self.droped = False
        self.timestamp = datetime.now()
        self.logger.info('initialized')

    def drop(self):
        self.cm.send_cmd(release_degree)
        self.droped = True
        self.timestamp = datetime.now()
        self.logger.info('dropped')

    def reset(self):
        self.cm.send_cmd(hook_degree)
        self.droped = False
        self.timestamp = datetime.now()
        self.logger.info('reset')


def main():
    drone_hook = DroneHook()
    drone_hook.drop()
    time.sleep(10)
    drone_hook.reset()


if __name__ == '__main__':
    main()
