function valida_envia(form) {
    let validation = ['name', 'email', 'data_nascimento', 'naturalidade', 'empresa', 'cargo', 'funcao', 'Comp_obj', 'instituicao']
    let msg = ''

    console.log('0')
    
    for ( i in validation) {
        if (document.querySelector(`#${validation[i]}`).value == '') {
            msg += 'Faltou preencher o campo' + ' ' + validation[i] + '\n'
        }
    }
       
    if (document.querySelector('#sexo').value == '0' ) {
        msg += 'Faltou selecionar o Genero.' + '\n'
    }

    if (msg != '') {
        alert(msg)
    }
}
