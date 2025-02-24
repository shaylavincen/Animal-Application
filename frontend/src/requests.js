//in seperate file to increase reusability

export function getAnimals() {
    return fetch('http://localhost:3000/animals/get')
        .then(response => response.json());
}

export function createAnimals(animal) {
    return fetch('http://localhost:3000/animals/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content=Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
        .then(response => response.json());
}

export function updateAnimals(animal, animalID) {
    return fetch(`http://localhost:3000/animals/put/ ${animalID}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content=Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
        .then(response => response.json());
}

export function deleteAnimals(animalID) {
    return fetch(`http://localhost:3000/animals/delete/${animalID}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content=Type': 'application/json'
        }
    })
        .then(response => response.json());
}
