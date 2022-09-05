function valida_envia(form) {
    let validation = ['name', 'email', 'data_nascimento', 'naturalidade', 'empresa', 'cargo', 'funcao', 'Comp_obj', 'instituicao']
    let validaradius = ['masculino', 'feminino', 'pfnd']

    let sexo = ''
    let msg = ''

    console.log('0')
    
    for ( i in validation) {
        if (document.querySelector(`#${validation[i]}`).value == '') {
            msg += 'Faltou preencher o campo' + ' ' + validation[i] + '\n'
        }
    }

   for (j in validaradius) {
        if (!$("input[name='sexo']:checked").length) {
            sexo = 'ok'
        }
        console.log(document.querySelector(`#${validaradius}`).checked)
    }
    

    
    if (sexo == '' ) {
        msg += 'Faltou selecionar o Genero.' + '\n'
    }

    if (msg != '') {
        alert(msg)
    }
}