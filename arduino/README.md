# Sistema de Detecção de Microplásticos na Água: Um Guia Completo e Detalhado para Implementação

## Contexto e Motivação

A proliferação de microplásticos em diversos ambientes aquáticos representa uma grave ameaça à saúde de ecossistemas e à segurança alimentar. Esses fragmentos plásticos menores que 5 mm podem ser ingeridos por organismos vivos, entrando na cadeia alimentar e causando danos físicos e químicos com consequências imprevisíveis para a saúde humana.

Neste contexto, o desenvolvimento de um sistema de detecção de microplásticos na água assume grande relevância. Ao utilizar tecnologias de ponta como visão computacional e aprendizado de máquina, este sistema oferece uma solução inovadora para monitorar a presença de microplásticos em amostras de água, permitindo ações rápidas para mitigar os efeitos nocivos desses poluentes.

## Funcionamento do Sistema

O sistema de detecção de microplásticos na água se baseia em três componentes principais:

- **Modelo de Visão Computacional:** Treinado com o Google Teachable Machine para identificar microplásticos em imagens capturadas por uma câmera.
- **Hardware:**
  - Computador: Processa as imagens capturadas pela câmera e executa o modelo de detecção de microplásticos.
  - Microcontrolador Arduino Uno R3: Controla LEDs e display LCD com base nos resultados da detecção.
  - Display LCD: Exibe o resultado da análise.
  - LEDs: Indicam a presença de microplásticos (verde, amarelo, vermelho).

## Implementação Passo a Passo

### 1. Treinamento do Modelo com Teachable Machine

1.1 **Acessando o Teachable Machine**
   - Acesse o Google Teachable Machine através do [link](https://teachablemachine.withgoogle.com/).

1.2 **Criando um Modelo de Imagem**
   - **Definição de Classes:** Identifique as diferentes categorias de microplásticos que deseja reconhecer no seu sistema.
   - **Adição de Imagens:** Carregue imagens de cada classe criada.

1.3 **Treinamento do Modelo**
   - Clique no botão "Treinar modelo".

1.4 **Exportação do Modelo**
   - Exporte o modelo em formato TensorFlow.

### 2. Configuração do Software

2.1 **Instalação do Python**
   - Baixe e instale o Python 3.10 através do [site oficial](https://www.python.org/downloads/).

2.2 **Modificação do Código Python**
   - Realize as seguintes alterações no arquivo "TeachableMachineaArduino.py":
     - Definição da Porta COM.
     - Substituição dos Nomes das Classes.
     - Ajuste da Precisão (opcional).

### 3. Execução do Sistema

3.1 **Conexão do Arduino**
   - Conecte o Arduino Uno R3 ao seu computador através de um cabo USB.

3.2 **Execução do Código Python**
   - Execute o programa "TeachableMachineaArduino.py".

### 4. Programação do Arduino

4.1 **Abertura do IDE do Arduino**
   - Instale e abra o Arduino IDE, a interface de desenvolvimento.

4.2 **Carregamento do Código**
   - Abra o arquivo "ArduinoProgram.ino" no Arduino IDE e carregue-o na placa Arduino conectada.

### 5. Funcionamento Completo do Sistema

- **Captura de Imagens:** O sistema captura imagens da amostra de água através da câmera conectada ao computador.
- **Processamento de Imagens:** O programa Python em execução no computador processa as imagens capturadas.
- **Detecção de Microplásticos:** O modelo de visão computacional identifica a presença de microplásticos.
- **Envio de Resultados:** O programa Python envia os resultados da detecção para o Arduino.
- **Controle de LEDs e Display LCD:** O Arduino interpreta os resultados e controla LEDs e o display LCD.
- **Exibição no Display LCD:** O resultado da análise é exibido no display LCD.

## Impacto Ambiental e Considerações Futuras

O sistema de detecção de microplásticos na água demonstra o potencial da tecnologia para solucionar desafios ambientais urgentes. A implementação deste sistema pode contribuir para:

- Monitoramento de ecossistemas aquáticos.
- Avaliação da qualidade da água.
- Desenvolvimento de estratégias de mitigação da poluição por microplásticos.

Além da detecção de microplásticos, o sistema pode ser adaptado para identificar outros tipos de poluentes ou objetos em diferentes contextos ambientais.

### Próximos Passos:

- Aperfeiçoar a precisão da detecção.
- Desenvolver um sistema portátil.
- Integrar o sistema a plataformas de monitoramento ambiental.

## Recursos Adicionais

- Repositório Git (código Python e Arduino): [link](link_do_repositório).
- [Teachable Machine](https://teachablemachine.withgoogle.com/)
- [Documentação Python](https://docs.python.org/)
- [Documentação Arduino](https://docs.arduino.cc/)

## Conclusão

Este guia fornece uma visão geral do sistema de detecção de microplásticos na água utilizando visão computacional e Arduino. A implementação deste sistema requer conhecimentos básicos de programação em Python e Arduino. O uso de componentes relativamente simples e acessíveis torna este projeto uma ferramenta viável para o monitoramento ambiental participativo e o desenvolvimento de soluções inovadoras para a preservação dos recursos hídricos.

**Observação:** Este guia foi criado com base em informações disponíveis e pode ser adaptado às suas necessidades específicas. É recomendável consultar especialistas em visão computacional e Arduino para garantir a implementação adequada do sistema.
