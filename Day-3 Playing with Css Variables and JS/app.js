const inputs = document.querySelectorAll('.controls input')

console.log(inputs)

function handleUpdate () {
    //console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input =>input.addEventListener('mousemove', handleUpdate));

////////////////////////
