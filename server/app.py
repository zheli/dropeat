from datetime import datetime
from flask import Flask, request
from hook_api.dropeat_drone import DroneHook

app = Flask(__name__)
drone = DroneHook()
drone.status = 'ready to fly'

@app.route('/status', methods=['GET'])
def drone_status():
    if drone.status == 'on the way':
        current_time = datetime.now()
        if (current_time - drone.timestamp).seconds > 5:
            drone.status = 'arrived'
    elif drone.status == 'returning':
        current_time = datetime.now()
        if (current_time - drone.timestamp).seconds > 5:
            drone.status = 'returned'
            drone.reset()
            drone.status = 'ready to fly'
    return drone.status

@app.route('/shop_owner', methods=['GET'])
def shop_owner():
    if drone.status == 'ready to fly':
        drone.status = 'on the way'
        drone.timestamp = datetime.now()
    return drone.status

@app.route('/drop_package', methods=['GET'])
def drop_package():
    if drone.status == 'arrived':
        drone.drop()
        drone.status = 'returning'
        return drone.status
    return 'not arrived yet'

@app.route('/reset', methods=['GET'])
def reset():
    drone.reset()
    drone.status = 'ready to fly'
    return 'reset'

if __name__ == '__main__':
    app.run(debug=True)