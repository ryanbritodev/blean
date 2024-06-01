# Sistema de Detecção de Microplásticos na Água

Este projeto tem como objetivo desenvolver um sistema de detecção de microplásticos na água utilizando visão computacional.

## Objetivo

O sistema baseia-se na utilização do [Google Teachable Machine](https://teachablemachine.withgoogle.com/) para treinamento de um modelo capaz de identificar microplásticos em imagens capturadas por uma câmera. A detecção é realizada em tempo real, permitindo a análise rápida e eficiente da presença de microplásticos nas amostras de água. 

<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Microplastic.jpg" alt="Imagem de Microplásticos na Água" width="50%"> <img src="https://i.ytimg.com/an/T2qQGqZxkD0/0f04f0b2-a39a-4621-8bb5-1f5f7bf9bf10_mq.jpg?v=5dc445a2" alt="Imagem de Microplásticos na Água" width="32.9%">

## Motivação

O aumento da contaminação por microplásticos em peixes e humanos representa uma ameaça significativa para a biodiversidade e pode ter consequências adversas para a saúde humana quando os microplásticos entram na cadeia alimentar. Este projeto oferece uma solução inovadora e de baixo custo para monitorar a presença de microplásticos na água, permitindo uma ação rápida para mitigar os efeitos nocivos desses poluentes.

## Componentes Utilizados

- **Câmera (webcam)** para captura de imagens da amostra de água.
- **Computador** com capacidade de processamento para executar o modelo de visão computacional.
- **Modelo de rede neural** treinado para detecção de microplásticos, gerado utilizando o Google Teachable Machine.
- **Python** para comunicação entre o modelo de visão computacional e o Arduino, permitindo o envio dos resultados da detecção para o microcontrolador.
- **Arduino Uno R3** para controlar os LEDs e o display LCD com base nos resultados da detecção.
- **Display LCD** para exibir o resultado da análise.
- **LEDs** (verde, amarelo e vermelho) para indicar a presença de microplásticos na amostra de água.

## Impacto Ambiental

Ao utilizar tecnologias como visão computacional e machine learning, este projeto demonstra o potencial da tecnologia para abordar desafios ambientais urgentes e promover práticas sustentáveis.

## Instruções de Uso
### Passo 1: Criar um Modelo com o Teachable Machine
Acesse o Image Model - Teachable Machines. Crie as diferentes classes (objetos) que deseja reconhecer. Dê a cada classe um nome que você possa reconhecer posteriormente. Você pode fazer upload de imagens para cada classe usando a webcam. Geralmente, é uma boa ideia incluir uma classe vazia (apenas com o fundo). Em seguida, clique em "Treinar modelo". Uma vez que o modelo tenha carregado, você pode garantir que ele funcione bem usando a webcam.

Em seguida, vamos exportar o modelo da seguinte maneira: Clique em "Exportar modelo", selecione "Tensorflow" (não Tensorflow.js), depois "Keras" e, finalmente, "Baixar meu modelo". Extraia esse arquivo e salve os arquivos em uma pasta.

Passo 2: Instalar o Python 3.10
Agora vamos instalar o Python. Para isso, vamos à Microsoft Store e instalamos a partir dela. Para este tutorial, estou usando o Python 3.10.

Em seguida, vamos instalar diferentes módulos usando pip. Para verificar se você tem o "pip" instalado, digite o seguinte comando no terminal: py -m ensurepip --upgrade. Normalmente, ele deve estar instalado, mas se você não tiver instalado, siga este tutorial aqui.

Antes de começarmos a instalar os pacotes, precisamos fazer com que o Windows aceite arquivos com mais de 260 caracteres. Para fazer isso, siga este tutorial aqui.

Em seguida, digite os seguintes comandos no terminal do Windows:

```
pip install opencv-python
pip install "tensorflow<2.11"
pip install pyserial
```

Passo 3: Modificar o Programa
No programa "TeachableMachineaArduino.py", na linha 15, defina a porta COM à qual seu Arduino está conectado.

Nas linhas 136 e 138, substitua "Classe1" e "Classe2" pelos nomes que você deu às suas classes no Teachable Machine. Se você tiver mais de 2 classes, precisará adicioná-las aqui.

OPCIONAL: Você pode alterar a precisão desejada modificando a linha 89. Por padrão, a precisão está definida para 90%.

Conecte seu Arduino via USB e execute o código Python. Se tudo funcionar corretamente, você deve ver uma janela aparecer que detecta as diferentes classes.

Passo 4: Programar o Arduino
Para verificar os números recebidos pelo Arduino, você pode usar o programa "Comunication.ino".

Se desejar usar os resultados do Teachable Machine para mover um servo ou outro, pode usar o programa "MoverServos.ino".
