class Basal {
  static get peso() {
    return Number(document.getElementById('peso-basal').value);
  }

  static get altura() {
    return Number(document.getElementById('altura-basal').value);
  }

  static get idade() {
    return Number(document.getElementById('idade-basal').value);
  }

  static get genero() {
    return document.getElementById('genero-basal').value == 'm' ? 66 : 655;
  }

  static get frequencia() {
    return Number(document.getElementById('frequencia-basal').value);
  }

  static get formPage() {
    return document.getElementById('form-basal');
  }

  static get resultPage() {
    return document.getElementById('result-basal');
  }

  static changeView() {
    this.formPage.style.display = this.formPage.style.display == 'none' ? 'flex' : 'none';
    this.resultPage.style.display = this.resultPage.style.display == 'none' ? 'flex' : 'none';
  }

  static calc() {
    const expr = Number(
      this.frequencia *
      (this.genero == 'm'
        ? 66 + 13.7 * this.peso + 5 * this.altura - 6.8 * this.idade
        : 655 + 9.6 * this.peso + 1.5 * this.altura - 4.7 * this.idade)
    )
    return isNaN(Number(expr)) ? 0 : Number(expr).toFixed(2)
  }

  static submit() {
    const result = document.getElementById('basal-result-label')
    result.innerHTML = `${Basal.calc()} <b>Kcal</b>`

    Basal.changeView()
  }
}
