from flask import Flask, request
from hook_api.dropeat_drone import DroneHook

app = Flask(__name__)
drone = DroneHook()
drone.status = 'ready to fly'

@app.route('/status', methods=['GET'])
def drone_status():
    return drone.status

@app.route('/shop_owner', methods=['GET'])
def shop_owner():
    if drone.status == 'ready to fly':
        drone.status = 'on the way'
    return drone.status

@app.route('/shop_customer', methods=['GET'])
def shop_customer():
    if drone.status == 'on the way':
        drone.status = 'arrived'
    return drone.status

@app.route('/drop_package', methods=['GET'])
def drop_package():
    if drone.status == 'arrived':
        drone.drop()
        drone.status = 'returning'
        return 'dropped'
    return 'not arrived yet'

@app.route('/reset', methods=['GET'])
def reset():
    drone.status = 'ready to fly'
    drone.reset()
    return 'reset'

if __name__ == '__main__':
    app.run(debug=True)