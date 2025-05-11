import { createContext, useState, useEffect, useContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(sessionStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [role, setRole] = useState(null)

  useEffect(() => {
    if (token) {
      try {
        const userData = JSON.parse(atob(token))
        setUser(userData)
        setRole(userData.role)
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Error al decodificar el token:', error)
        logout()
      }
    } else {
      setUser(null)
      setRole(null)
      setIsAuthenticated(false)
    }
  }, [token])

  const login = (newToken) => {
    sessionStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const logout = () => {
    sessionStorage.removeItem('token')
    setToken(null)
    setUser(null)
    setRole(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)