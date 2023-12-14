class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Heroi('Merlin', 100, 'mago');
  const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  const monge = new Heroi('Li Bai', 50, 'monge');
  const ninja = new Heroi('Hanzo', 28, 'ninja');
  const heroiIndefinido = new Heroi('Indefinido', 99, 'indefinido');
  
  mago.atacar(); // Saída: O mago Merlin atacou usando magia
  guerreiro.atacar(); // Saída: O guerreiro Aragorn atacou usando espada
  monge.atacar(); // Saída: O monge Li Bai atacou usando artes marciais
  ninja.atacar(); // Saída: O ninja Hanzo atacou usando shuriken
  heroiIndefinido.atacar(); // Saída: O indefinido Indefinido atacou usando um ataque indefinido
  