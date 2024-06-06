# https://www.tinkercad.com/things/bpBPSg0CR12-global-solution-blue-future?sharecode=dSe2dT_8u7aOaHaq_syi8ARMs1yMeOMUJQOMnTItNps

from tensorflow.keras.models import load_model
import numpy as np
import cv2
import serial

# Carregar o modelo treinado
model = load_model('../model/keras_model.h5')

# Inicializar a conexão com o Arduino
class SerialArduino:
    def __init__(self, port='COM7', baudrate=9600, timeout=1):
        self.port = port
        self.baudrate = baudrate
        self.timeout = timeout
        try:
            self.serial_connection = serial.Serial(port, baudrate, timeout=timeout)
            print("Conexão com Arduino estabelecida com sucesso!")
        except serial.SerialException as e:
            print(f"Erro ao conectar com o Arduino: {e}")
            self.serial_connection = None

    def read_data(self):
        if self.serial_connection and self.serial_connection.in_waiting > 0:
            data = self.serial_connection.readline().decode('utf-8').rstrip()
            return data
        return None

    def write_data(self, data):
        if self.serial_connection:
            self.serial_connection.write(data.encode())
            print(f"Comando enviado para o Arduino: {data}")

    def close(self):
        if self.serial_connection:
            self.serial_connection.close()

# Inicialização da conexão com o Arduino
arduino_connection = SerialArduino(port='COM7', baudrate=9600)

# Inicialização da captura de vídeo
cap = cv2.VideoCapture(0)

# Definição das classes
classes = ['COM MICROPLASTICO', 'SEM MICROPLASTICO', 'AGUARDANDO ANALISE']

# Loop principal
try:
    while True:
        success, img = cap.read()
        if not success:
            print("Erro ao capturar imagem da câmera.")
            continue

        # Pré-processamento da imagem
        img_resized = cv2.resize(img, (224, 224))
        image_array = np.asarray(img_resized)
        normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
        data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
        data[0] = normalized_image_array

        # Previsão
        prediction = model.predict(data)
        index_val = np.argmax(prediction)

        # Exibir a classe prevista na imagem
        cv2.putText(img, str(classes[index_val]), (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        print(f"Previsão: {classes[index_val]}")

        # Enviar comando para o Arduino
        if index_val == 0:  # Classe "COM MICROPLASTICO"
            arduino_connection.write_data('1\n')
        elif index_val == 1:  # Classe "SEM MICROPLASTICO"
            arduino_connection.write_data('2\n')
        elif index_val == 2:  # Classe "AGUARDANDO ANALISE"
            arduino_connection.write_data('3\n')

        # Mostrar a imagem capturada
        cv2.imshow('IMG', img)
        if cv2.waitKey(1) & 0xFF == ord('q'):  # Pressione 'q' para sair do loop
            break

except KeyboardInterrupt:
    print("Programa interrompido pelo usuário.")
finally:
    # Fechamento da conexão serial e da captura de vídeo
    arduino_connection.close()
    cap.release()
    cv2.destroyAllWindows()
