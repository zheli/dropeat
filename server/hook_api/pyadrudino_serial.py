__version__ = '0.1'
__author__ = 'Zhe Li <zheli.se.gb@gmail.com>'

import serial


class Ardruino(object):
    def __init__(self, port, rate=57600, timeout=0.02):
        self.connection = serial.Serial(port, rate, timeout=timeout)

    def __str__(self):
        return "Arduino: {}".format(self.connection.port)

    def __exit__(self):
        self.connection.close()


class CommandManager(Ardruino):
    def send_cmd(self, cmd):
        cmd = cmd + '\n'
        self.connection.write(cmd)
