function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrou user')
    }
    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <h1>Meu Cadastro:</h1>
                <div>
                    <input type="text" placeholder="Digite o nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form