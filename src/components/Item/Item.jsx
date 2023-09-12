export const Item = ({ user }) => {
    // console.log(user)
    // console.log(user)
    // const [userData, setUser] = useState(user)
    return (
            <div>
                <h1>{user.nombre}</h1>
                <h2>{user.id}</h2>
            </div>
        // 👆 EL USER QUE LLEGA ES UN OBJETO, MUESTRO SUS PROPIEDADES EN EL DOM
    )
}
