# BLEAN: Sistema de Detecção de Microplásticos na Água
**AUTORES:**
- Diogo Leles Franciulli RM558487
- Felipe Sousa de Oliveira RM559085
- Ryan Brito Pereira Ramos RM554497

## Contexto e Motivação

O aumento da contaminação por **microplásticos** em peixes e humanos representa uma ameaça significativa para a **biodiversidade** e pode ter consequências adversas para a saúde humana quando os microplásticos entram na **cadeia alimentar**. Este projeto oferece uma solução inovadora e de baixo custo para **monitorar a presença de microplásticos na água**, permitindo uma ação rápida para mitigar os efeitos nocivos desses poluentes.

## Nosso projeto

O sistema baseia-se na utilização do **[Google Teachable Machine](https://teachablemachine.withgoogle.com/)** para o treinamento de um modelo capaz de identificar microplásticos em imagens capturadas por uma câmera. **O Google Teachable Machine** é uma ferramenta desenvolvida pelo Google que simplifica o processo de treinamento de modelos de **machine learning**, especialmente para tarefas de classificação de imagens. Além disso, usamos uma API em NodeJS (criada por nós), para que ocorra o trânsito das informações adquiridas após o processo do Arduino + IA para localizar e quantificar os microplásticos (a API pode ser encontrada no diretório _**/backend**_, considerando o caminho root), esses dados são salvos em um banco NoSQL (MongoDB), e assim tanto o Website (Front-End), quanto o Arduino (com o Python) conseguem usar a API para salvar e resgatar os dados.

<br>

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Microplastic.jpg" alt="Imagem de Microplásticos na Água" width="50%"> <img src="https://i.ytimg.com/an/T2qQGqZxkD0/0f04f0b2-a39a-4621-8bb5-1f5f7bf9bf10_mq.jpg?v=5dc445a2" alt="Imagem de Microplásticos na Água" width="32.9%">
</div>

### O treinamento do modelo no **Google Teachable Machine** envolve os seguintes componentes:

- **Keras:** O treinamento do modelo é realizado usando **Keras**, uma biblioteca open source para redes neurais em Python. Ela fornece uma interface amigável e intuitiva para construir e treinar modelos de aprendizado de máquina, incluindo **redes neurais convolucionais (CNNs)**, que são particularmente úteis para tarefas de processamento de imagens.

- **Python:** O código em Python é usado para interagir com o modelo treinado e processar os dados de entrada. Isso pode incluir o **pré-processamento de imagens** antes de passá-las para o modelo para classificação, bem como o **tratamento dos resultados** de saída do modelo.
- **TensorFlow:** TensorFlow é usado como o **backend** para o Keras, fornecendo as funcionalidades de baixo nível necessárias para executar operações numéricas eficientes em tensores, que são estruturas de dados fundamentais para representar dados em aprendizado de máquina.

<br>

<div align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" width="10%" alt="Logo Keras"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="10%" alt="Logo Python"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" width="10%" alt="Logo Tensorflow">
</div>

<br>

O **Google Teachable Machine** simplifica todo esse processo, permitindo que usuários com pouca ou nenhuma experiência em aprendizado de máquina criem e treinem modelos de classificação de imagem de forma rápida e intuitiva. A detecção é realizada em tempo real, permitindo a análise rápida e eficiente da presença de microplásticos nas amostras de água.

## Funcionamento do Sistema

O sistema de **detecção de microplásticos** na água se baseia em alguns componentes principais:

- **Software:**
  - **Modelo de Visão Computacional:** Modelo no formato **.h5** (Hierarchical Data Format) treinado com o Google Teachable Machine para identificar microplásticos em imagens capturadas por uma câmera.
- **Hardware:**
  - **Computador:** Processa as imagens capturadas pela câmera e executa o modelo de detecção de microplásticos.
  - **Microcontrolador Arduino Uno R3:** Controla LEDs e display LCD com base nos resultados da detecção.
  - **Display LCD:** Exibe o resultado da análise.
  - **LEDs:** Indicam a presença de microplásticos (verde, amarelo, vermelho).

<div align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-RyG4DlcRjYky84Phm6JgFlbxKVU22V3Kg&s" width="50%" alt="Arduino">
</div>

## Implementação do nosso Projeto (Passo a Passo)

### É necessário fazer algo em relação a API?

- A API está hospedada e funcionando, os caminhos da aplicação estão conectadas na API hospedada, logo, o trabalho máximo em relação a isso seria esperar a API ligar (50 segundos), em caso de standby do server em que ela está hospedada
- Porém, caso queira rodar a API localmente:
  - Entre na pasta _**/backend**_ e rode o comando "npm install" para instalar os pacotes do package.json (para rodar o comando, tenha o **npm** instalado em seu computador, faça o download pelo site do [Node](https://nodejs.org/en));
  - Após instalar os pacotes, use "npm run dev" para deixar a API rodando localmente na porta 3001, agora já é possível usar a API localmente, testando com Postman, ou colocando a URL local onde você quiser testar (frontend ou arduino/python).

### Passo a Passo para Instalar o TensorFlow com Suporte a GPU no Windows (em 2024)

### Pré-requisitos:

- **GPU compatível:** Sua placa gráfica deve ter uma capacidade de computação superior a 3.5 e suportar CUDA 11.2. Você pode verificar isso usando o comando **_nvidia-smi_** no prompt de comando. Verifique se a capacidade de computação é superior a 3.5 e se a versão do CUDA é compatível.
- **Sistema operacional:** Windows 11
- **Python:** Versão 3.7.1 a 3.9.1

<div align="center">
  <img src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a0d86f6091d6699000060_NVLogo_2D/NVLogo_2D_thmb.jpg" width="60%" alt="Logo NVIDIA">
</div>
  
## Instale os drivers NVIDIA:
- Baixe os drivers mais recentes para sua placa gráfica no site da [NVIDIA](https://www.nvidia.com/download/index.aspx) e siga as seguintes instruções:
- Baixe o **CUDA Toolkit 11.2** para **Windows** no site da [NVIDIA](https://developer.nvidia.com/cuda-downloads)
- Baixe o **TensorRT 8.2 GA Update 1** no site da [NVIDIA](https://developer.nvidia.com/tensorrt)
- Baixe e instale o **C++ Redistributable para Visual Studio 2019** no site da [Microsoft](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)
- Baixe e instale o **Python 3.9.1** no site do [Python](https://www.python.org/downloads/release/python-390/)

## Configure as variáveis de ambiente:

- Adicione os diretórios do **CUDA**, **TensorRT** e **Python** ao %path% do seu sistema.
- Consulte a documentação do **CUDA** e do **TensorRT** para obter instruções sobre como configurar as variáveis de ambiente.

## Criando um ambiente virtual:

- Crie um ambiente virtual usando o comando **_virtualenv_** no prompt de comando.
- Ative o ambiente virtual usando o comando **_activate_**.
- Instale o TensorFlow com suporte a **GPU** usando o comando **_pip install tensorflow-gpu==2.10_**

<div align="center">
  <img src="https://user-images.githubusercontent.com/41811634/108357975-e689f500-71cc-11eb-9df2-fea776366202.png" width="60%" alt="Logo NVIDIA">
</div>

## Referências:

- **Vídeo de instrução:** [How to install TensorFlow with GPU support in 2024? | ONLY method that works | Techy Man's Solutions](https://www.youtube.com/watch?v=trLpdJnsxco&t=318s)
- **Documentação do TensorFlow:** https://www.tensorflow.org/api_docs
- **Documentação do CUDA:** https://docs.nvidia.com/cuda/
- **Documentação do TensorRT:** https://docs.nvidia.com/deeplearning/tensorrt/

### 1. Treinamento do Modelo com Teachable Machine

1.1 **Acessando o Teachable Machine**

- Acesse o **Google Teachable Machine** através do [link](https://teachablemachine.withgoogle.com/).

1.2 **Criando um Modelo de Imagem**

- **Definição de Classes:** Identifique as diferentes categorias de microplásticos que deseja reconhecer no seu sistema.
- **Adição de Imagens:** Carregue imagens de cada classe criada.

<br>

<div align="center">
  <img src="https://teachablemachine.withgoogle.com/assets/img/contentpage/home/2017-version.jpg" width="60%" alt="Logo NVIDIA">
</div>

<br>

1.3 **Treinamento do Modelo**

- Clique no botão **"Treinar modelo"**.

1.4 **Exportação do Modelo**

- Exporte o modelo em formato **.h5** e copie o código utilizando a biblioteca do **TensorFlow**.

### 2. Configuração do Software

2.1 **Modificação do Código Python**

- Realize as seguintes alterações no arquivo "TeachableMachineaArduino.py":
  - Definição da **Porta COM**.
  - Substituição dos **Nomes das Classes** (labels.txt).
  - Ajuste da Precisão (opcional).

### 3. Execução do Sistema

3.1 **Conexão do Arduino**

- Conecte o Arduino Uno R3 ao seu computador através de um cabo USB.

3.2 **Execução do Código Python**

- Execute o programa "TeachableMachineaArduino.py".

### 4. Programação do Arduino

4.1 **Abertura do IDE do Arduino**

- Instale e abra o Arduino IDE, a interface de desenvolvimento.

<div align="center">
  <img src="https://www.datocms-assets.com/76605/1659348717-software-arduino-pro-ide.png" width="60%" alt="Logo NVIDIA">
</div>

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

Além da detecção de microplásticos, o sistema pode ser adaptado para identificar outros tipos de poluentes ou objetos em diferentes contextos ambientais

## Acesse o website **Blean** e a simulação do nosso protótipo em feito com **Arduino**:

- [Blean - For Our Oceans to Be Clean with Blean](https://ryanbritodev.github.io/blean)
- [Simulador Tinkercad](https://www.tinkercad.com/things/bpBPSg0CR12-global-solution-blue-future?sharecode=dSe2dT_8u7aOaHaq_syi8ARMs1yMeOMUJQOMnTItNps)

## Referências

- [Teachable Machine](https://teachablemachine.withgoogle.com/)
- [Documentação Python](https://docs.python.org/)
- [Documentação Arduino](https://docs.arduino.cc/)

## Conclusão

Este guia fornece uma visão geral do sistema de detecção de microplásticos na água utilizando visão computacional e Arduino. A implementação deste sistema requer conhecimentos básicos de programação em Python e Arduino. O uso de componentes relativamente simples e acessíveis torna este projeto uma ferramenta viável para o monitoramento ambiental participativo e o desenvolvimento de soluções inovadoras para a preservação dos recursos hídricos.

**Observação:** Este guia foi criado com base em informações disponíveis e pode ser adaptado às suas necessidades específicas.

### README.md feito paras as matérias de Edge Computing & Computer Systems e Computational Thinking with Python para Global Solution - Blue Future (FIAP 2024) 
(Já que ambos estão entrelaçados neste projeto)

