const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			carrito: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			añadirAlCarrito: (itemId, itemTitle, itemPrice, itemImage) =>{
				const store = getStore();
				if (!store.carrito.some(producto => producto.id == itemId) && store.carrito !== null) {
					setStore({ carrito: [...store.carrito, {id: itemId, title: itemTitle, price: itemPrice, image : itemImage}] });
				} else {
					Swal.fire("Ya existe en el carrito!!")
				}	
			},
			añadirCarritoAlUsuario: (id) => {
				const store = getStore()
				const actions=getActions()
				// const token = localStorage.getItem('jwt-token');

				fetch(process.env.BACKEND_URL + 'api/user/' + id ,{
					method: 'PUT',
					headers: {
						"Content-Type": "application/json"
						// "Authorization" : "Bearer " + token
					},
					body : JSON.stringify({ carrito: store.carrito })
				})
				.then(resp => {								
					return resp.json();
				})
				.then(data => {            
				})
				.catch(error => {			
					console.log('Oops something went wrong'+ error);
				})
			},
			getUserCarrito: (id) => {
				// const token = localStorage.getItem('jwt-token');
				// if(token) {
				fetch(process.env.BACKEND_URL + 'api/user/' + id ,{
					method: 'GET',
					  headers: {
						"Content-Type": "application/json",
					},
				})
				 .then(resp => {								
					return resp.json();
				})
				.then(data=> {
					console.log(data);
					const store = getStore();
					const jsonCarrito = data.carrito.map(item => {
						const validString = item.replace(/'/g, '"')
						console.log(validString);

						return JSON.parse(validString)
					})
					setStore({ ...store, carrito: jsonCarrito });
				})
				.catch(error => {			
					console.log('Oops something went wrong'+ error);
				})
			// }
			}

		}

	};
};

export default getState;
