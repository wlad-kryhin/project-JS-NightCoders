const spinner = document.querySelector('#spinner-js')
export default class Spinner {
    active() {
        const contentSpinner = `<div
class="loading-eclipse">
  <div class="spinnerEl">
    <div>
    </div>
  </div>
</div>`
       return spinner.innerHTML = contentSpinner
    }
    hidden() {
        spinner.innerHTML =''
    }
}
