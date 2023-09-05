import Footer from "./Footer"
import Header from "./Header"
import './Sobre.css'

const Sobre = () => {
    return (
        <div>
            <Header />
            <div className="estiloSobre">
                <div className="text">
                    <h1 className="titulo-style">
                        Quem Somos
                    </h1>
                    <p className="conteudo">
                        Lançado em 2015, o Romario’s Technologies é o principal local de compras on-line do Sul do Brasil, com presença ativa em Ijui. Apoiada por uma ampla gama de soluções personalizadas de marketing, dados e serviços, o Romario’s Technologies possui mais de 100 vendedores e 300 marcas e atendendo 3 Mil clientes em toda a região
                    </p>
                </div>
                <div className="imagem">
                    <img src="" alt="" />
                </div>
            </div>


            <Footer />
        </div>
    )
}
export default Sobre
