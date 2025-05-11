const users = [
    { email: 'admin@zoco.com', password: 'admin123', role: 'admin' },
    { email: 'user1@zoco.com', password: 'user123', role: 'user' },
    { email: 'user2@zoco.com', password: 'user456', role: 'user' }
  ]
  
  // Simula una llamada de login con retardo
  export const loginApi = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(
          u => u.email === email && u.password === password
        )
        if (user) {
          const token = btoa(JSON.stringify({ email: user.email, role: user.role }))
          resolve({ token })
        } else {
          reject(new Error('Credenciales inválidas'))
        }
      }, 500)
    })
  }