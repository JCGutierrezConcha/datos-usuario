// IIFE

const main = (() => {
    const resultsElement = document.querySelector('#user-data')
    async function private() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10")

            if (!response.ok) {
                throw new Error("Error al cargar los datos");
            }

            const { results } = await response.json()
            results.forEach((user) => {
                resultsElement.innerHTML += `
                <img src = ${user.picture.medium} alt="Foto Principal">
                <p>${user.name.first} ${user.name.last} <br>
                ${user.email}<br>
                ${user.cell} </p>
                `
            })
        } catch (error) {
            console.log(error)
        }
    }
    // función pública
    return {
        getData() {
            private()
        }
    }
})()

document.addEventListener('DOMContentLoaded', () => {
    main.getData()
})