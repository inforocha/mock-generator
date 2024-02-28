/**
 * @autor Davi Rocha (info.rocha2@gmail.com)
 * controla a tela.
 * @version 1.0
 */
const main = (_ => {
	"use strict";
	const VM = {}
	const CACHE_DOM = {}
	const CACHE_DATA = {
		erros: []
	}

	window.addEventListener('load', _init)
	function _init() {
		CACHE_DOM.textarea_json = document.getElementById('textarea-json')
		CACHE_DOM.btn_executar = document.getElementById('btn-executar')

		CACHE_DOM.btn_executar.addEventListener('click', _executar)
	}

	function _executar() {
		if (!_validar_textarea()) {
			alert('informe o json corretamente')
		}

		_criar_insert()
	}

	function _validar_textarea() {
		const json = CACHE_DOM.textarea_json.value
		console.log(json)
		// const json = JSON.parse(CACHE_DOM.textarea_json.value)

		// limpando os erros
		CACHE_DATA.erros = []

		// validar vazio
		if (CACHE_DOM.textarea_json.value == '') CACHE_DATA.erros.push('Informe o json no textarea.')

		// validar json
		// if (json && !json.table) CACHE_DATA.erros.push('Informe a chave table no json.')
		// if (json && !json.columns) CACHE_DATA.erros.push('Informe a chave columns no json.')

		// retornamdo erros
		return (CACHE_DATA.erros.length)
	}

	function _criar_insert() {
		const json = JSON.parse(CACHE_DOM.textarea_json.value)
		for (let i in json) {
			console.log(i)
		}
	}
})();