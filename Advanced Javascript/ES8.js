.padStart()
.padEnd()

const fun = (a, b, c, d) => {
    console.log(a)
}

fun(1, 2, 3, 4)

Object.values()
Object.entries()
Object.keys()

const obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}

Object.keys(obj).forEach(key => {
    console.log(key, obj[key])
})

Object.values(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).forEach(value => {
    console.log(value[1] + value[0].replace('username', ''))
})

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}

fetchUsers()

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]



