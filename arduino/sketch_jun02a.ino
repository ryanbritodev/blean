



















































































#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const int redLightPin = 2;
const int yellowLightPin = 3;
const int greenLightPin = 4;

LiquidCrystal_I2C lcd(0x27, 16, 2);

byte gotinha[] = {
  B00100,
  B00100,
  B01110,
  B01110,
  B11111,
  B11111,
  B11111,
  B01110
};

byte acentoAgudo[] = {
  B00001,
  B00100,
  B01010,
  B10001,
  B10001,
  B11111,
  B10001,
  B00000
};

void setup() {
  pinMode(redLightPin, OUTPUT);
  pinMode(yellowLightPin, OUTPUT);
  pinMode(greenLightPin, OUTPUT);

  Serial.begin(9600); // Certifique-se de que a taxa de transmissão está correta

  lcd.init();
  lcd.backlight();
  lcd.createChar(0, gotinha);
  lcd.createChar(1, acentoAgudo);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Global  Solution");
  lcd.setCursor(0, 1);
  lcd.write(byte(0));
  lcd.print(" Blue  Future");
  lcd.setCursor(15, 1);
  lcd.write(byte(0));
  delay(3000);
}

void loop() {
  if (Serial.available()) {
    char result = Serial.read();
    lcd.clear();
    digitalWrite(greenLightPin, LOW);
    digitalWrite(yellowLightPin, LOW);
    digitalWrite(redLightPin, LOW);
    Serial.print("Comando recebido: ");  // Adiciona um log para o comando recebido
    Serial.println(result);

    if (result == '1') {
      digitalWrite(redLightPin, HIGH);
      lcd.setCursor(6, 0);
      lcd.print("COM");
      lcd.setCursor(1, 1);
      lcd.print("MICROPL");
      lcd.write(byte(1));
      lcd.print("STICO");
    } else if (result == '2') {
      digitalWrite(greenLightPin, HIGH);
      lcd.setCursor(6, 0);
      lcd.print("SEM");
      lcd.setCursor(1, 1);
      lcd.print("MICROPL");
      lcd.write(byte(1));
      lcd.print("STICO");
    } else if (result == '3') {
      digitalWrite(yellowLightPin, HIGH);
      lcd.setCursor(3, 0);
      lcd.print("AGUARDANDO");
      lcd.setCursor(3, 1);
      lcd.print("AMOSTRA...");
    }
  }
}
