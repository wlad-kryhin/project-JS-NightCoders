const spinner = document.querySelector('#spinner-js')
export default class Spinner {
    render() {
        const contentSpinner = `<div
class="loading-eclipse">
  <div class="spinnerEl">
    <div>
    </div>
  </div>
</div>`
       return spinner.innerHTML = contentSpinner
    }
    clear() {
        spinner.innerHTML =''
    }
}
