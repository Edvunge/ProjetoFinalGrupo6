
# Documentação da API 


<h2>Aqui ficará a documentção dos endpoints todos: os Gets, Posts, Put e por ai.</h2>

<p>Endpoint que recebe um id como parametros e devolve o item que tiver esse id
- GET  /api/teste/:id
   DTO req {}
   DTO res { colection: string[] }


  
- PUT
- CREATE
- DELETE
</p>

<p><br>
Cria uma API REST com os seguintes endpoints 
    - o primeiro, com o caminho GET / api / : Id.
<br>
A API deve ter o método ...de qualquer tipo ...  em que o deve existir algum corpo do pedido ou algo do genero,  é um objeto com uma propriedade .... 
<br>
A resposta do método PATCH deve incluir:
<br>
Código de estado 
    ex: 404 quando acontecer alguma coisa ou não.</p>


<h3>LISTA DE APIs Necessarias</h3>
<p><i>
API que carrega o menuPrincipal;<br>
API de SIGN UP;<br>
API de LOGIN;<br>
API que reserva o lugar através do ID;<br>
API CHECKOUT;<br>
API que user(permite o user visualizar a homePage);<br>
</i></p>

<p>
<h4>DOCUMENTAÇÂO DO FUNCIONAMENTO da APIs</h4> 
A API menuPrincipal é neste menu que qualquer user tem acesso, com ou sem registo, aqui os users podem visualizar os lugares disponiveis para reserva, os detalhes da reservas, a possibilidade de pesquisar lugares, verificar as avaliações.

Caminho<br>  
    POST/api/menuPrincipal<br>
</p>

<p>
<h4>DOCUMENTAÇÂO DO FUNCIONAMENTO da API SIGN UP(Create your account.)</h4>
A API SIGN UP é responsável pelo registo do usuario na plataforma, ou seja no caso do visitante, quando o visitante estiver pronto para fazer a reserva será solicitado a criar um SIGN UP, esta API vai ser responsável pela criação da conta, a API trata de fazer o SIGN UP, ou seja, quando um VISITANTE se torna um UTILIZADOR.<br>

    . Deve mostrar um campo de texto, que pede um nome(Mandatory);
    . Só pode avançar caso este campo estiver preenchido;
    . O nome pode ter no máximo até 40 caracteres;
    . Deve ser possível cumprir esta ação ao clicar na tecla ENTER;
    . O utilizador deve ser reconhecido pelo token que lhe foi atribuído quando faz o SIGN UP;

<h5>Caminho</h5>
- GET /api/SIGN UP
- DTO req {email, password}
- Faz va
- DTO res {token: string}
</p>


<p>
<h6><bold>OBS:</bold>O VISITANTE não tem acesso a reserva do lugar sem estar registado. 
UTILIZADOR tem acesso a esta as reservas;</h6>  
</p>

<p>
<h4>DOCUMENTAÇÂO DO FUNCIONAMENTO da API LOGIN</h4>
A API LOGIN é aqui onde o user já devidamente registado pode entrar na sua conta, e poder fazer uma reserva.<br>

Caminho<br>  
    GET/api/login<br>

- GET /api/auth
- DTO req {email, password}
- Faz va
- DTO res {token: string}
</p>

<p>
<h4>DOCUMENTAÇÂO DO FUNCIONAMENTO da API RESERVA;</h4>
A API é responsável por DEVOLVER todos dados de confirmaçao e validaçao(login), e podem fazer a sua reserva devidamente autenticado.

Caminho<br>  
    POST/api/menuReservas<br>
</p>


<p>
<h4>DOCUMENTAÇÂO DO FUNCIONAMENTO API CHECKOUT;</h4>
esta API é a responsável por ADICIONAR a forma de pagamento, ou seja, quando um UTILIZADOR finaliza aqui a sua reserva confirmando o pagamento.

.Apenas UTILIZADORES válidos têm acesso a esta ação;
Deve ser possível:

. o UTILIZADOR voltar ao passo anterior que na secção de reserva e poder alterar qualquer dado e continuar para o pagamento;
. ter disponivel pelo menos duas formas de pagamento ou mais: MBway, multibanco;
. caso não o utilizador não escolheu uma forma de pagamento, não pode avançar;
<br>  
Caminho<br>  
    POST/api/reserva/payMent<br>  
</p>
