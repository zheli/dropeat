import time
from pyadrudino_serial import CommandManager

duo_port = '/dev/cu.usbmodem142111'
release_degree = "80"
hook_degree = "180"


class DroneHook(object):
    droped = False
    cm = CommandManager(duo_port, 9600)

    def __init__(self):
        self.cm.send_cmd(hook_degree)
        self.droped = False

    def drop(self):
        self.cm.send_cmd(release_degree)
        self.droped = True

    def reset(self):
        self.cm.send_cmd(hook_degree)
        self.droped = False


def main():
    drone_hook = DroneHook()
    drone_hook.drop()
    time.sleep(10)
    drone_hook.release()


if __name__ == '__main__':
    main()
