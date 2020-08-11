import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/34931766?s=460&u=ec66d195477648c3fd8f9544d38b0cba395c7f5c&v=4" alt="Alexandre Dias" />
                <div>
                    <strong>Alexandre Dias</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Gosto muito de física, mas sou careiro porque eu manjo demais
                <br /><br />
                Tenho um método revolucionário para aprender física.
                Com esse método você aprender a construir bombas atômicas em 1 mês
            </p>

            <footer>
                <p>
                    Preço/Hora:
                    <strong>R$ 500,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone do whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;