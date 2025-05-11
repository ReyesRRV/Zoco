import React, { useState } from 'react'

const UserProfileForm = ({ userData, onUpdate }) => {
  const [form, setForm] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    address: userData?.address || '',
    phone: userData?.phone || '',
    studies: userData?.studies || '',
    experience: userData?.experience || '',
    role: userData?.role || '',
    currentPassword: '',
    newPassword: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'El nombre es obligatorio'
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Correo inválido'
    if (!form.phone.match(/^[0-9]+$/)) newErrors.phone = 'Solo números permitidos'
    if (form.newPassword && form.newPassword.length < 6) {
      newErrors.newPassword = 'Mínimo 6 caracteres'
    }
    if (!form.role) newErrors.role = 'El rol es obligatorio'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    onUpdate(form)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md w-full h-full max-w-2xl space-y-4 overflow-auto">
      <h2 className="text-xl font-semibold mb-2">Información del Usuario</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {[
          { label: 'Nombre', name: 'name', type: 'text' },
          { label: 'Correo', name: 'email', type: 'email' },
          { label: 'Dirección', name: 'address', type: 'text' },
          { label: 'Teléfono', name: 'phone', type: 'text' },
          { label: 'Estudios', name: 'studies', type: 'text' },
          { label: 'Experiencia', name: 'experience', type: 'text' },
          { label: 'Rol', name: 'role', type: 'text' },
          { label: 'Contraseña Actual', name: 'currentPassword', type: 'password' },
          { label: 'Nueva Contraseña', name: 'newPassword', type: 'password' },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-1"
            />
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Guardar Cambios
      </button>
    </form>
  )
}

export default UserProfileForm
