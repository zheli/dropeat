#include <Servo.h>

Servo mainServo;

int val;
int ledPin=13;

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }  
  mainServo.attach(7);
  mainServo.write(80);
  delay(30);
  mainServo.write(180);
  delay(30);
}

void loop() {
  while (Serial.available() > 0) {
  int degree = Serial.parseInt();
    if (Serial.read() == '\n') {
        Serial.print("Prepare turning servo ");
        mainServo.write(degree);
        Serial.print("Turn servo ");
//        analogWrite(ledPin, 255);        
        Serial.println(degree);
        delay(30);
//        analogWrite(ledPin, 0);             
    }
  }
}
