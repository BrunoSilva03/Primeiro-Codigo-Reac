import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2013}/>
                <Item marca="Camaro Amarelo" ano_lancamento={2012}/>
                <Item marca="Porsche" ano_lancamento={2016}/>
            </ul>
        </>
    )
}

export default List