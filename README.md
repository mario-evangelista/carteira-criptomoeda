## Gerador de Carteira Bitcoin (Testnet)

Este script Node.js simples e seguro gera carteiras Bitcoin para a rede de teste (testnet). Ele utiliza bibliotecas padrão da indústria como `bip39`, `bip32` e `bitcoinjs-lib` para garantir a conformidade com as melhores práticas de segurança e geração de chaves.

**Funcionalidades:**

- **Geração de Mnemonic:** Cria uma frase mnemônica de 12 palavras fácil de lembrar, que serve como a chave mestre para sua carteira.
- **Derivação de Chaves HD:** Utiliza o padrão BIP49 para gerar várias chaves e endereços a partir de uma única seed, melhorando a privacidade.
- **Múltiplos Endereços:** Gera 5 endereços Bitcoin (testnet) por padrão (você pode ajustar este número).
- **Saída Clara:** Exibe os endereços gerados, suas chaves privadas correspondentes e a seed mnemônica de forma organizada.

**Como Usar:**

1. **Pré-requisitos:** Certifique-se de ter o Node.js e npm (gerenciador de pacotes do Node) instalados em seu sistema.
2. **Instalação:** Clone este repositório e instale as dependências:

   ```bash
   git clone https://github.com/mario-evangelista/carteira-criptomoeda.git
   cd gerador-carteira-bitcoin
   npm install
   ```

3. **Execução:** Execute o script:

   ```bash
   node createWallet.js
   ```

4. **Resultado:** O script irá gerar e exibir:
   - **Seed Mnemônica:** Guarde esta frase em um local seguro e **nunca** a compartilhe com ninguém. É a chave para acessar seus bitcoins.
   - **Endereços Bitcoin (Testnet):** Estes são os endereços que você pode usar para receber bitcoins na rede de teste.
   - **Chaves Privadas:** Cada endereço terá sua chave privada correspondente. Mantenha estas chaves privadas **absolutamente confidenciais**.

**Avisos:**

- **Testnet:** Este script gera carteiras para a rede de teste do Bitcoin. Os bitcoins da testnet não têm valor real.
- **Segurança:** A segurança da sua carteira depende inteiramente de você. Armazene sua seed mnemônica e chaves privadas em locais seguros e offline.
- **Responsabilidade:** Use este script por sua conta e risco. Não me responsabilizo por qualquer perda de fundos.

**Contribuições:**

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades!

**Licença:**

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
