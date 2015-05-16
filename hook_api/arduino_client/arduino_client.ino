#include <Servo.h>

Servo mainServo;

int val;
int ledPin=13;

void setup() {
  Serial.begin(9600);
  // put your setup code here, to run once:
  mainServo.attach(7);
}

void loop() {
  // put your main code here, to run repeatedly:
  while (Serial.available() > 0) {
  int degree = Serial.parseInt();
    if (Serial.read() == '\n') {  
        mainServo.write(degree);
        Serial.print("Turn servo ");
        analogWrite(ledPin, 255);        
        Serial.println(degree);
        delay(30);
        analogWrite(ledPin, 0);             
    }
  }
}
