function showModalDigital(idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function showModalTraditional(idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function showModalGraphic(idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function showModalModeling(idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function hideModal(idModal, event){
    if(event.target.className === 'modal'){
        const modal = document.querySelector(idModal)
        modal.style.display = 'none'
    }
}

function closeAllModal(){
    const modais = document.querySelectorAll('.modal')
    modais.forEach(modal => {
        modal.style.display = 'none'
    })
    
}

function loadAllProductions(){
    loadProductionsDigital();
    loadProductionsTraditional();
    loadProductionsGraphic();
    loadProductionsModeling();
}

// ====================== Arte Digital ==========================

async function insertDigital(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/insertDigital.php', {
        method: 'POST',
        body: formData
        })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleDigital+' foi cadastrado com sucesso!')
        loadProductionsDigital()
        clearFormDigital('#modal-cadastrar-digital')
    }
}

async function loadProductionsDigital(){
    const response = await fetch('backend/listDigital.php')
    const result = await response.json()
    // console.log(result)
    if(result?.success){
        const listDigital = document.querySelector('#catalogo-digital') //lista com as artes digitais
        listDigital.innerHTML = ''
        const digital = result.data
        digital.map((digital) =>{ // array de arte digital
            listDigital.innerHTML += `
            <div class="card-art-digital">
                <a href="digital">
                    <div class="mask"></div>
                    <img src="${digital.capa}" alt="${digital.titulo}" />
                </a>
                <div>
                    <a href="digital">
                        <h2>${digital.titulo}</h2>
                    </a>
                    <div>
                        <p>${digital.marcacao}</p>
                        <img src="assets/img/trash-icon.svg" alt="Apagar" onclick="deleteDigital(${digital.id })"/>
                        <img src="assets/img/edit-icon.svg" alt="Editar" onclick="loadDigitalData(${digital.id })"/>
                    </div>
                </div>
            </div>
        ` // cria um card com as informações do card
 
        })
    }else{
        alert('Erro ao carregar projeto em Arte Digital')
    }
}

async function deleteDigital(id) {
    const response = await fetch('backend/deleteDigital.php?id='+id)
    const result = await response.json()
    if(result?.success){
        alert('Seu projeto foi deletado com sucesso da categoria de "Arte Digital"!')
        loadProductionsDigital()
    }
}

async function loadDigitalData(id) {
    const response = await fetch('backend/get-production-by-idDigital.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModalDigital('#modal-editar-digital')

        // pega o id dentro da div e busca o campo
        const titleDigital = document.querySelector('#modal-editar-digital input[name=titleDigital]')
        titleDigital.value = result.data.titulo

        const tagDigital = document.querySelector('#modal-editar-digital input[name=tagDigital]')
        tagDigital.value = result.data.marcacao

        const toolsDigital = document.querySelector('#modal-editar-digital input[name=toolsDigital]')
        toolsDigital.value = result.data.ferramenta

        const categoryDigital = document.querySelector('#modal-editar-digital input[name=categoryDigital]')
        categoryDigital.value = result.data.categoria

        const coverDigital = document.querySelector('#modal-editar-digital input[name=coverDigital]')
        coverDigital.value = result.data.capa

        const id = document.querySelector('#modal-editar-digital input[name=id]')
        id.value = result.data.id
    }
}

async function editDigital(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/editDigital.php', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleDigital+' foi editado com sucesso!')
        loadProductionsDigital()
    }
}

function clearFormDigital(idModal){
    const titleDigital = document.querySelector(`${idModal} input[name=titleDigital]`)
    titleDigital.value = ''

    const tagDigital = document.querySelector(`${idModal} input[name=tagDigital]`)
    tagDigital.value = ''

    const toolsDigital = document.querySelector(`${idModal} input[name=toolsDigital]`)
    toolsDigital.value = ''

    const categoryDigital = document.querySelector(`${idModal} input[name=categoryDigital]`)
    categoryDigital.value = ''

    const coverDigital = document.querySelector(`${idModal} input[name=coverDigital]`)
    coverDigital.value = ''
}

// ====================== Arte Tradicional ==========================

async function insertTraditional(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/insertTraditional.php', {
        method: 'POST',
        body: formData
        })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleTraditional+' foi cadastrado com sucesso!')
        loadProductionsTraditional()
        clearFormTraditional('#modal-editar-traditional')
    }
}

async function loadProductionsTraditional(){
    const response = await fetch('backend/listTraditional.php')
    const result = await response.json()
    // console.log(result)
    if(result?.success){
        const listTraditional = document.querySelector('#catalogo-traditional') //lista com as artes tradicionais
        listTraditional.innerHTML = ''
        const traditional = result.data
        traditional.map((traditional) =>{ // array de arte tradicional
            listTraditional.innerHTML += `
            <div class="card-art-traditional">
                <a href="traditional">
                    <div class="mask"></div>
                    <img src="${traditional.capa}" alt="${traditional.titulo}" />
                </a>
                <div>
                    <a href="traditional">
                        <h2>${traditional.titulo}</h2>
                    </a>
                    <div>
                        <p>${traditional.marcacao}</p>
                        <img src="assets/img/trash-icon.svg" alt="Apagar" onclick="deleteTraditional(${traditional.id })"/>
                        <img src="assets/img/edit-icon.svg" alt="Editar" onclick="loadTraditionalData(${traditional.id })"/>
                    </div>
                </div>
            </div>
        ` // cria um card com as informações do card
 
        })
    }else{
        alert('Erro ao carregar projeto em Arte Tradicional')
    }
}

async function deleteTraditional(id) {
    const response = await fetch('backend/deleteTraditional.php?id='+id)
    const result = await response.json()
    if(result?.success){
        alert('Seu projeto foi deletado com sucesso da categoria de "Arte Tradicional"!')
        loadProductionsTraditional()
    }
}

async function loadTraditionalData(id) {
    const response = await fetch('backend/get-production-by-idTraditional.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModalTraditional('#modal-editar-traditional')

        // pega o id dentro da div e busca o campo
        const titleTraditional = document.querySelector('#modal-editar-traditional input[name=titleTraditional]')
        titleTraditional.value = result.data.titulo

        const tagTraditional = document.querySelector('#modal-editar-traditional input[name=tagTraditional]')
        tagTraditional.value = result.data.marcacao

        const toolsTraditional = document.querySelector('#modal-editar-traditional input[name=toolsTraditional]')
        toolsTraditional.value = result.data.ferramenta

        const categoryTraditional = document.querySelector('#modal-editar-traditional input[name=categoryTraditional]')
        categoryTraditional.value = result.data.categoria

        const coverTraditional = document.querySelector('#modal-editar-traditional input[name=coverTraditional]')
        coverTraditional.value = result.data.capa

        const id = document.querySelector('#modal-editar-traditional input[name=id]')
        id.value = result.data.id
    }
}

async function editTraditional(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/editTraditional.php', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleTraditional+' foi editado com sucesso!')
        loadProductionsTraditional()
    }
}

function clearFormTraditional(idModal){
    const titleTraditional = document.querySelector(`${idModal} input[name=titleTraditional]`)
    titleTraditional.value = ''

    const tagTraditional = document.querySelector(`${idModal} input[name=tagTraditional]`)
    tagTraditional.value = ''

    const toolsTraditional = document.querySelector(`${idModal} input[name=toolsTraditional]`)
    toolsTraditional.value = ''

    const categoryTraditional = document.querySelector(`${idModal} input[name=categoryTraditional]`)
    categoryTraditional.value = ''

    const coverTraditional = document.querySelector(`${idModal} input[name=coverTraditional]`)
    coverTraditional.value = ''
}

// ====================== Design Gráfico ==========================

async function insertGraphic(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/insertGraphic.php', {
        method: 'POST',
        body: formData
        })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleGraphic+' foi cadastrado com sucesso!')
        loadProductionsGraphic()
        clearFormGraphic('#modal-cadastrar-graphic')
    }
}

async function loadProductionsGraphic(){
    const response = await fetch('backend/listGraphic.php')
    const result = await response.json()
    // console.log(result)
    if(result?.success){
        const listGraphic = document.querySelector('#catalogo-graphic') //lista com as design gráfico
        listGraphic.innerHTML = ''
        const graphic = result.data
        graphic.map((graphic) =>{ // array de design gráfico
            listGraphic.innerHTML += `
            <div class="card-art-graphic">
                <a href="graphic">
                    <div class="mask"></div>
                    <img src="${graphic.capa}" alt="${graphic.titulo}" />
                </a>
                <div>
                    <a href="graphic">
                        <h2>${graphic.titulo}</h2>
                    </a>
                    <div>
                        <p>${graphic.marcacao}</p>
                        <img src="assets/img/trash-icon.svg" alt="Apagar" onclick="deleteGraphic(${graphic.id })"/>
                        <img src="assets/img/edit-icon.svg" alt="Editar" onclick="loadGraphicData(${graphic.id })"/>
                    </div>
                </div>
            </div>
        ` // cria um card com as informações do card
 
        })
    }else{
        alert('Erro ao carregar projeto em Design Gráfico')
    }
}

async function deleteGraphic(id) {
    const response = await fetch('backend/deleteGraphic.php?id='+id)
    const result = await response.json()
    if(result?.success){
        alert('Seu projeto foi deletado com sucesso da categoria de "Design Gráfico"!')
        loadProductionsGraphic()
    }
}

async function loadGraphicData(id) {
    const response = await fetch('backend/get-production-by-idGraphic.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModalGraphic('#modal-editar-graphic')

        // pega o id dentro da div e busca o campo
        const titleGraphic = document.querySelector('#modal-editar-graphic input[name=titleGraphic]')
        titleGraphic.value = result.data.titulo

        const tagGraphic = document.querySelector('#modal-editar-graphic input[name=tagGraphic]')
        tagGraphic.value = result.data.marcacao

        const toolsGraphic = document.querySelector('#modal-editar-graphic input[name=toolsGraphic]')
        toolsGraphic.value = result.data.ferramenta

        const categoryGraphic = document.querySelector('#modal-editar-graphic input[name=categoryGraphic]')
        categoryGraphic.value = result.data.categoria

        const coverGraphic = document.querySelector('#modal-editar-graphic input[name=coverGraphic]')
        coverGraphic.value = result.data.capa

        const id = document.querySelector('#modal-editar-graphic input[name=id]')
        id.value = result.data.id
    }
}

async function editGraphic(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/editGraphic.php', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleGraphic+' foi editado com sucesso!')
        loadProductionsGraphic()
    }
}

function clearFormGraphic(idModal){
    const titleGraphic = document.querySelector(`${idModal} input[name=titleGraphic]`)
    titleGraphic.value = ''

    const tagGraphic = document.querySelector(`${idModal} input[name=tagGraphic]`)
    tagGraphic.value = ''

    const toolsGraphic = document.querySelector(`${idModal} input[name=toolsGraphic]`)
    toolsGraphic.value = ''

    const categoryGraphic = document.querySelector(`${idModal} input[name=categoryGraphic]`)
    categoryGraphic.value = ''

    const coverGraphic = document.querySelector(`${idModal} input[name=coverGraphic]`)
    coverGraphic.value = ''
}

// ====================== Modelagem 3d ==========================

async function insertModeling(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/insertModeling.php', {
        method: 'POST',
        body: formData
        })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleModeling+' foi cadastrado com sucesso!')
        loadProductionsModeling()
        clearFormModeling('#modal-cadastrar-modeling')
    }
}

async function loadProductionsModeling(){
    const response = await fetch('backend/listModeling.php')
    const result = await response.json()
    // console.log(result)
    if(result?.success){
        const listModeling = document.querySelector('#catalogo-modeling') //lista com modelagem 3d
        listModeling.innerHTML = ''
        const modeling = result.data
        modeling.map((modeling) =>{ // array de modelagem 3d
            listModeling.innerHTML += `
            <div class="card-art-modeling">
                <a href="modeling">
                    <div class="mask"></div>
                    <img src="${modeling.capa}" alt="${modeling.titulo}" />
                </a>
                <div>
                    <a href="digital">
                        <h2>${modeling.titulo}</h2>
                    </a>
                    <div>
                        <p>${modeling.marcacao}</p>
                        <img src="assets/img/trash-icon.svg" alt="Apagar" onclick="deleteModeling(${modeling.id })"/>
                        <img src="assets/img/edit-icon.svg" alt="Editar" onclick="loadModelingData(${modeling.id })"/>
                    </div>
                </div>
            </div>
        ` // cria um card com as informações do card
 
        })
    }else{
        alert('Erro ao carregar projeto em Modelagem 3d')
    }
}

async function deleteModeling(id) {
    const response = await fetch('backend/deleteModeling.php?id='+id)
    const result = await response.json()
    if(result?.success){
        alert('Seu projeto foi deletado com sucesso da categoria de "Modelagem 3d"!')
        loadProductionsModeling()
    }
}

async function loadModelingData(id) {
    const response = await fetch('backend/get-production-by-idModeling.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModalModeling('#modal-editar-modeling')

        // pega o id dentro da div e busca o campo
        const titleModeling = document.querySelector('#modal-editar-modeling input[name=titleModeling]')
        titleModeling.value = result.data.titulo

        const tagModeling = document.querySelector('#modal-editar-modeling input[name=tagModeling]')
        tagModeling.value = result.data.marcacao

        const toolsModeling = document.querySelector('#modal-editar-modeling input[name=toolsModeling]')
        toolsModeling.value = result.data.ferramenta

        const categoryModeling = document.querySelector('#modal-editar-modeling input[name=categoryModeling]')
        categoryModeling.value = result.data.categoria

        const coverModeling = document.querySelector('#modal-editar-modeling input[name=coverModeling]')
        coverModeling.value = result.data.capa

        const id = document.querySelector('#modal-editar-modeling input[name=id]')
        id.value = result.data.id
    }
}

async function editModeling(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/editModeling.php', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu projeto '+result.data.titleModeling+' foi editado com sucesso!')
        loadProductionsModeling()
    }
}

function clearFormModeling(idModal){
    const titleModeling = document.querySelector(`${idModal} input[name=titleModeling]`)
    titleModeling.value = ''

    const tagModeling = document.querySelector(`${idModal} input[name=tagModeling]`)
    tagModeling.value = ''

    const toolsModeling = document.querySelector(`${idModal} input[name=toolsModeling]`)
    toolsModeling.value = ''

    const categoryModeling = document.querySelector(`${idModal} input[name=categoryModeling]`)
    categoryModeling.value = ''

    const coverModeling = document.querySelector(`${idModal} input[name=coverModeling]`)
    coverModeling.value = ''
}
